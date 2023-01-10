import mongoose from 'mongoose'

const vocabularySchema = new mongoose.Schema({
    turkish: String,
    english: String,
    sentence: String,
    photo: String,
})

const VocabularyModel = mongoose.models.vocabularies || mongoose.model("vocabularies", vocabularySchema)

export default VocabularyModel