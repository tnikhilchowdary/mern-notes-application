import { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);


  return (
    <div>
      <h1>Welcome to the Notes App</h1>
      <form>
        <div>
        <input type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        </div>
        <textarea 
        placeholder="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        />
        <div>
        <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
