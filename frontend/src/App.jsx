import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

function App() {
  const [input, setInput] = useState("");
  const [notesList, setNotesList] = useState([]);
  const [updateNotes, setUpdateNotes] = useState("");
  const [updateId, setUpdateId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await axios.post("http://localhost:5000/notes", {
        notes:input
      },
      )
      alert("Submitted Succcesfully")
      window.location.reload();
    }
    catch(error){
      console.log("Error in adding Notes");
    }
  }

  const fetchNotes = async (e) => {
    try{
      const response = await axios.get("http://localhost:5000/notes")
      setNotesList(response.data.notes);
    }
    catch(error){
      console.log("Error Fetching Notes", error);
    }
  }

  const handleUpdate = async (id) => {
    try{
      await axios.put(`http://localhost:5000/notes/${id}`, {
        notes:updateNotes,
      });
      fetchNotes();
      setUpdateId(null);
      setUpdateNotes("");
    }
    catch(error){
      console.log("Error in Updating Notes");
    }
  }
  const handleDelete = async (id) => {
    try{
      const deleteResponse = await axios.delete(`http://localhost:5000/notes/${id}`)
      fetchNotes();
    }
    catch(error){
      console.log("Error in Deleting Notes", error);
    }
  }

  useEffect(() => {
    fetchNotes();
  }, [])


  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10">
  <div className="w-full max-w-xl bg-white shadow-lg rounded-xl p-6">
    
    <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
      Welcome to the Notes App
    </h1>

    <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
      <textarea
        type="text"
        placeholder="Enter Notes"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 
                   focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-5 py-2 rounded-lg 
                   hover:bg-blue-600 transition font-semibold"
      >
        Submit
      </button>
    </form>
    <ul className="space-y-3">
  {notesList.map((list) => (
    <li
      key={list._id}
      className="bg-gray-50 border border-gray-200 rounded-lg 
                 px-4 py-3 shadow-sm hover:shadow-md transition
                 flex items-center justify-between"
    >
      <span className="text-gray-800 font-medium">
        {list.notes}
      </span>

      <div className="flex gap-3">
        <button
          className="text-blue-500 border border-blue-500 px-3 py-1 rounded-md
                     text-sm font-semibold hover:bg-blue-500 hover:text-white
                     transition"
        >
          Edit
        </button>

        <button onClick={() => handleDelete(list._id)}
          className="text-red-500 border border-red-500 px-3 py-1 rounded-md
                     text-sm font-semibold hover:bg-red-500 hover:text-white
                     transition"
        >
          Delete
        </button>
      </div>
    </li>
  ))}
</ul>
  </div>
</div>

  );
}

export default App;
