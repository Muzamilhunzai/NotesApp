import React, { useState, useEffect } from "react";
import Button from "../components/Buttons";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);

  // This function runs when the component loads to get all notes from database
  useEffect(() => {
    fetchNotes();
  }, []);

  // Function to get all notes from the server
  const fetchNotes = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/notes/getAllNotes");
      const data = await res.json();
      
      if (res.ok) {
        setNotes(data); // Update the notes state with data from database
      }
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const handleAdd = async () => {
    if (title.trim() === "" || content.trim() === "") {
      alert("Title and Content cannot be empty!");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/notes/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      // Clear the input fields
      setTitle("");
      setContent("");
      
      // Refresh the notes list to show the newly added note
      await fetchNotes();
      
      alert("Note added successfully!");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this note?")) {
      return; // Stop if user cancels
    }
    
    try {
      const res = await fetch(`http://localhost:3000/api/notes/delete/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }
      
      // Remove the deleted note from the UI without refreshing all notes
      setNotes(notes.filter(note => note._id !== id));
      
      alert("Note deleted successfully!");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-200 flex flex-col items-center justify-start py-20 px-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 drop-shadow-md">
        My Notes App
      </h1>

      <div className="w-full max-w-md flex flex-col gap-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title..."
          className="px-4 py-3 rounded-2xl border-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 shadow-sm"
        />

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your note..."
          rows="4"
          className="px-4 py-3 rounded-2xl border-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 shadow-sm"
        />

        <Button
          text="Save Note"
          onClick={handleAdd}
          type="primary"
        />
      </div>

      {/* Display all notes */}
      <div className="mt-10 w-full max-w-md flex flex-col gap-3">
        {notes.length === 0 ? (
          <p className="text-center text-gray-600">No notes yet. Create your first note!</p>
        ) : (
          notes.map((note) => (
            <div
              key={note._id}
              className="px-4 py-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 relative group"
            >
              <h2 className="font-bold text-lg text-gray-800 pr-16">
                {note.title}
              </h2>
              <p className="text-gray-600 mt-1">{note.content}</p>
              
              {/* Delete button for each note */}
              <button
                onClick={() => handleDelete(note._id)}
                className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-colors duration-200 text-sm"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CreateNote;