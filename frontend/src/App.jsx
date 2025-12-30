import { useState } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Tailwind is Working 🎉
      </h1>

      <p className="text-lg mb-4">Count: {count}</p>

      <button
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>
    </div>
  );
}

export default App;
