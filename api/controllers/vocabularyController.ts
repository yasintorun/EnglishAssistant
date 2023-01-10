import { NextApiRequest, NextApiResponse } from "next";
import { Vocabulary } from "../../models/vocabulary";
import { connect } from "../db";
import VocabularyModel from "../models/vocabulary";

export const addVocabulary = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await connect()
        const vocabulary = req.body as Vocabulary
        if (!vocabulary) return res.status(400).json({ message: "Vocabulary is incorrect!" })

        VocabularyModel.create(vocabulary, (err, data) => {
            return res.status(200).json(data)
        })

    } catch (err) {
        console.log("---- CREATED ERROR >> addVocabulary ----")
        console.log(err)
        return res.status(500).json({ message: "Server error!" })
    }
}

export const getRandomVocabulary = async (): Promise<Vocabulary> => {
    await connect()
    const vocabularies = (await VocabularyModel.find({})).map((doc) => {
        const voc = doc.toObject()
        voc._id = voc._id.toString()
        return voc;
    })
    console.log(vocabularies)
    return vocabularies.at(Math.floor(Math.random() * vocabularies.length) - 1) as Vocabulary
}