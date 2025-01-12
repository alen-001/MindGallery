import Note from "../models/note.model.js";
const createNote=async(req,res)=>{
    if(!req.body.title){
        return res.status(400).send({message:"Title is required"});
    }
    const note= new Note({
        title:req.body.title,
        description:req.body.description,
        tag:req.body.tag,
        image:req.body.image
    });
    try{
        const createdNote=await note.save();
        res.status(201).send(createdNote);
    }catch(error){
        console.log(error.message);
        res.status(500).send({message:"Internal Server Error"});
    }
};
// createNote, deleteNote, getNotes, updateNote
const getNotes=async(req,res)=>{
    try{
        const notes=await Note.find();
        res.send(notes);
    }catch(error){
        console.log(error.message);
        res.status(500).send({message:"Internal Server Error"});
    }
};
const deleteNote=async(req,res)=>{
    console.log(req.params.id);
    const {id}=req.params;
    try{
        const deletedNote=await Note.findByIdAndDelete(id);
        if(deletedNote){
            res.status(200).send({message:"Note deleted sucessfully!",deletedNote:deletedNote})}
        else{
            res.status(400).send({message:"No note with given id"});
        }
    }catch(error){
        console.log(error.message);
        res.status(500).send({message:"Internal Server Error"});
    }
};
const updateNote=async (req,res)=>{
    const {id}=req.params;
    const note=req.body;
    try{
        const updatedNote=await Note.findByIdAndUpdate(id,note,{new:true});
        if(updatedNote){
            res.status(200).send({message:"Note updated",updatedNote:updatedNote});}
        else{
            res.status(400).send({message:"No note with given id"});
        }
    }catch(error){
        console.log(error.message);
        res.status(500).send({message:"Internal Server Error"}); 
    }
};
export {createNote,deleteNote,getNotes,updateNote};