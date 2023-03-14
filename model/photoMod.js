import M from 'mongoose'
const { Schema } = M

const photoSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    uploadedAt: {
        type: Date,
        default: Date.now,
    },
})

const Photo = M.model('Photo', photoSchema)

export default Photo