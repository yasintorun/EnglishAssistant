import mongoose from 'mongoose'

export const connect = () => {
    mongoose.connect(process.env.DATABASE_CONNECTION_STRING || "").then(() => {
        console.log("Connect to database")
    }).catch((err) => {
        console.error("Not connected to database", err)
    })
}