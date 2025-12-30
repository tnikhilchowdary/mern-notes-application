import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

function App() {
  const [notes, setNotes] = useState("");
  const [allNotes, setAllNotes] = useState([]);
  
  return (
    <div>
      <h1>Welcome to The Notes App</h1>
    </div>
  );
}

export default App;
