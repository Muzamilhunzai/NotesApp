import Notes from "../models/Notesmodel.js";

export const handeladd = async (req, res) => {
  try {
    const { title, content } = req.body;

    const newNote = new Notes({ title, content });

    await newNote.save();

    res.status(201).json({
      message: "Note added successfully",
      note: newNote,
    });
    console.log("Added Note:");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};