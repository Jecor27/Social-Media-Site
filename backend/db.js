import mongoose from 'mongoose';
import 'dotenv/config'


const connectDB = async (app) => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('✅ Connected to Blog Database');

        // Start server with DB connection
        app.listen(process.env.PORT, () => {
            console.log(`🚀 Server running on port: ${process.env.PORT}`);
        });
    } catch (err) {
        console.error('❌ Database Connection Error:', err.message);
        process.exit(1); // Exit process when failed
    }
};


export default connectDB;