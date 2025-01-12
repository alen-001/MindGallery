import mongoose from "mongoose";
const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please add a title"],
        unique: true,
        trim: true,
        maxlength: [40, "Title cannot be more than 40 characters"]
    },
    description: {
        type: String
    },
    tag: {
        type: String,
        default: "General"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    image:{
        type: String,
        default: "https://images.unsplash.com/photo-1471644865643-fe726490270a?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }

});
const Note = mongoose.model("Note", NoteSchema);
export default Note;