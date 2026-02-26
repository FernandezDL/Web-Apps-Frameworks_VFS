import mongoose from 'mongoose'

export const connectMongoDB = async (mongoURI) => {
    try {
        await mongoose.connect(mongoURI)
        console.log('MongoDB connected')
    } catch (err) {
        console.log('MongoDB connection error:', err)
        throw err
    }
}