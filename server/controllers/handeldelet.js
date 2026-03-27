import Notes from "../models/Notesmodel.js";

export const handeldelet = async (req, res) => {
    try { 
        const { id } = req.params;

        const deletedNote = await Notes.findByIdAndDelete(id);

        if (!deletedNote) {
            return res.status(404).json({
                message: "Note not found"
            });
        }

        res.status(200).json({
            message: "Note deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};