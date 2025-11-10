import 'dotenv/config';
import { connectToDatabase } from './mongoose';
import mongoose from 'mongoose';

async function testConnection() {
	try {
		// Check if MONGODB_URI is set
		if (!process.env.MONGODB_URI) {
			console.error(
				'❌ Error: MONGODB_URI environment variable is not set'
			);
			console.error('💡 Please set MONGODB_URI in your .env file');
			process.exit(1);
		}

		// Attempt to connect
		await connectToDatabase();

		// Check connection state
		const connectionState = mongoose.connection.readyState;

		if (connectionState === 1) {
			console.log('✅ Database connection test PASSED!');
			console.log(
				`   Database: ${
					mongoose.connection.db?.databaseName || 'N/A'
				} | Host: ${mongoose.connection.host || 'N/A'}:${
					mongoose.connection.port || 'N/A'
				}`
			);
		} else {
			console.error('⚠️  Warning: Connection state is not "connected"');
		}

		// Close the connection
		await mongoose.connection.close();
		process.exit(0);
	} catch (error) {
		console.error('❌ Database connection test FAILED!');
		console.error('Error:', error instanceof Error ? error.message : error);
		process.exit(1);
	}
}

// Run the test
testConnection();
