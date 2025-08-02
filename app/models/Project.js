import mongoose from "mongoose";


const ProjectSchema = mongoose.Schema({
    name: {
        type: String,
    },
    sourcelink  : {
        type: String,
    },
    imgs: [
        {type: String,}

    ],
    category: [
        {type: String,}

    ],
    discription  : {
        type: String,
    }
})

const Project = mongoose.models.projs || mongoose.model('projs',ProjectSchema)

export default Project ;