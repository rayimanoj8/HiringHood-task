const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    taskName: { type: String, required: true },
    dueDate: { type: Date, required: true },
    priority: { type: String, required: true },
    reminder: { type: String, required: true },
    taskCompleted: { type: Boolean, default: false }, 
});

const projectSchema = new mongoose.Schema({
    projectId: { type: String, required: true }, 
    projectName: { type: String, required: true }, 
    tasks: [taskSchema], 
});

const userSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true }, 
    projects: [projectSchema], 
});

const User = mongoose.model("User", userSchema);
module.exports = User;
