import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

function App() {
  const [input, setInput] = useState("");
  const [notesList, setNotesList] = useState([]);

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
      <input
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
                     px-4 py-3 shadow-sm hover:shadow-md transition"
        >
          {list.notes}
        </li>
      ))}
    </ul>

  </div>
</div>

  );
}

export default App;
