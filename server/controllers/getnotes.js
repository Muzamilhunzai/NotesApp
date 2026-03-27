import Notes from "../models/Notesmodel.js";

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Notes.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
    console.log("Fetched notes:", notes.length);
  } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).json({ message: "Server Error" });
  }
};