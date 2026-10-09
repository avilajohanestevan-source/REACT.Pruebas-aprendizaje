import mongoose from 'mongoose'

//console.log(process.env.MONGODB_URI)

export const connectDB = async () => {
	try {
	//const url = 'mongodb+srv://avilajohanestevan_db_user:aebfwWXLimHpA7AV@cluster0.fpqkzup.mongodb.net/?appName=Cluster0'

    //bloquear codigo hasta que se realice la conexion a la base de datos

	    const connection = await mongoose.connect(process.env.MONGODB_URI)
        //console.log(connection)
        //console.log(process.env)
        console.log('MongoDB connected')

    }
	catch (error) {
	    console.log(error.message)
        process.exit(1)    
	}
}


