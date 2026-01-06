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
    try {
      await axios.post("http://localhost:5000/notes", {
        notes: input,
      });
      alert("Submitted Successfully");
      window.location.reload();
    } catch (error) {
      console.log("Error in adding Notes");
    }
  };

  const fetchNotes = async () => {
    try {
      const response = await axios.get("http://localhost:5000/notes");
      setNotesList(response.data.notes);
    } catch (error) {
      console.log("Error Fetching Notes", error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(`http://localhost:5000/notes/${id}`, {
        notes: updateNotes,
      });
      fetchNotes();
      setUpdateId(null);
      setUpdateNotes("");
    } catch (error) {
      console.log("Error in Updating Notes");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/notes/${id}`);
      fetchNotes();
    } catch (error) {
      console.log("Error in Deleting Notes", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10">
      <div className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-8">

        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Welcome to the Notes App
        </h1>

        {/* INPUT SECTION */}
        <form onSubmit={handleSubmit} className="flex gap-4 mb-8">
          <textarea
            placeholder="Enter Notes"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border border-gray-300 rounded-xl px-4 py-3
                       resize-none focus:outline-none
                       focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-xl
                       hover:bg-blue-600 transition font-semibold"
          >
            Submit
          </button>
        </form>

        {/* NOTES LIST */}
        <ul className="space-y-4">
          {notesList.map((list) => (
            <li
              key={list._id}
              className="bg-white border border-gray-200 rounded-xl
                         px-6 py-4 shadow-sm hover:shadow-md transition
                         flex items-center gap-6"
            >
              {/* LEFT SIDE – TEXT / INPUT */}
              <div className="flex-1">
                {updateId === list._id ? (
                  <input
                    type="text"
                    value={updateNotes}
                    onChange={(e) => setUpdateNotes(e.target.value)}
                    className="w-full border border-blue-400 rounded-lg px-4 py-2
                               focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                ) : (
                  <p className="text-gray-800 font-medium break-words">
                    {list.notes}
                  </p>
                )}
              </div>

              {/* RIGHT SIDE – BUTTONS */}
              <div className="flex items-center gap-3 shrink-0">
                {updateId === list._id ? (
                  <button
                    onClick={() => handleUpdate(list._id)}
                    className="px-4 py-2 text-sm font-semibold
                               bg-green-500 text-white rounded-lg
                               hover:bg-green-600 transition"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setUpdateId(list._id);
                      setUpdateNotes(list.notes);
                    }}
                    className="px-4 py-2 text-sm font-semibold
                               bg-yellow-400 text-white rounded-lg
                               hover:bg-yellow-500 transition"
                  >
                    Edit
                  </button>
                )}

                <button
                  onClick={() => handleDelete(list._id)}
                  className="px-4 py-2 text-sm font-semibold
                             border border-red-500 text-red-500 rounded-lg
                             hover:bg-red-500 hover:text-white transition"
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
