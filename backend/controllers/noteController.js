import note from "../Schema/notesSchema.js";

export const getNotes = async (req, res) => {
    try{
        const notes = await note.find({});
        res.status(200).json({
            message:"Notes Fetched Succesfully",
            notes
        })
    }
    catch(error){
        res.status(500).json({
            message:"Error in Fetching Notes",
            error:error.message
        })
    }
}

export const addNotes = async (req, res) => {
    try{
        const {notes} = req.body;
        const addnotes = new note ({notes})
        addnotes.save();
        res.status(200).json({
            message:"Notes added Succesfully",
            addnotes
        })
    }
    catch(error){
        res.status(500).json({
            message:"Error in Adding Notes",
            error:error.message
        })
    }
}