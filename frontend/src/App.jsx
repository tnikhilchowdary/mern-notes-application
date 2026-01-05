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
      setNotesList(response.data);
    }
    catch(error){
      console.log("Error Fetching Notes", error);
    }
  }

  useEffect(() => {
    fetchNotes();
  }, [])


  return (
    <div>
     <h1>Welome to the Notes App</h1>
     <form onSubmit={handleSubmit}>
      <input type="text"
      placeholder="Enter Notes App"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Submit</button>
     </form>
     <div>

    </div>
    </div>
  );
}

export default App;
