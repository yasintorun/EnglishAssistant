import mongoose from 'mongoose'

export const connect = async () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(process.env.DATABASE_CONNECTION_STRING || "").then(() => {
            console.log("Connect to database")
            resolve("Connect to database")
        }).catch((err) => {
            console.error("Not connected to database", err)
            reject(err)
        })
    })
}