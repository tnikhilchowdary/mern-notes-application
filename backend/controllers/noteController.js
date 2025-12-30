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

