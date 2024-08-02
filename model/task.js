import mongoose from "mongoose"

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    notify: {
        type: Boolean,
        required: true
    }
});


const Task = mongoose.model('Task', taskSchema);
export default Task;
