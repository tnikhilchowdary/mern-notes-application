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

export const updateNotes = async (req, res) => {
    try{
        const {id} = req.params;
        const update = await note.findByIdAndUpdate(
            id,
            req.body,
            {new:true}
        )

        if(!update){
            return res.status(404).json({
                message:"Note Not Found"
            });
        }

        res.status(200).json({
            message:"Notes Updated Succesfully",
            update
        })
    }
    catch(error){
        res.status(500).json({
            message:"Error in Updating Notes",
            error:error.message
        })
    }
}

export const deleteNotes = async (req, res) => {
    try{
        const {id} = req.params;

        const deleteNotes = await note.findByIdAndDelete(id);
        res.status(200).json({
            message:"Deleted Succesfully",
            deleteNotes
        })
    }
    catch(error){
        res.status(500).json({
            message:"Error in Deleting Notes",
            error:error.message
        })
    }
}