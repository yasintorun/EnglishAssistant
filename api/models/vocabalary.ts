import mongoose, {Schema, model} from 'mongoose'

const vocabalarySchema = new Schema({
    turkish: String,
    english: String,
    sentence: String,
    photo: String,
})

const Vocabalary = mongoose.model("vocabalaries", vocabalarySchema)

export default Vocabalary