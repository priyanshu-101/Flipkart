import mongoose from "mongoose";


export const Connection  = async(username, password) =>{
    const URL = `mongodb://${username}:${password}@ac-xz5kr2h-shard-00-00.ruxcvc9.mongodb.net:27017,ac-xz5kr2h-shard-00-01.ruxcvc9.mongodb.net:27017,ac-xz5kr2h-shard-00-02.ruxcvc9.mongodb.net:27017/?ssl=true&replicaSet=atlas-68n8rj-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true})
        console.log(`Connected successfully`);
    }catch(error){
        console.log(`Error while connecting with database`, error.message);
    }
}

export default Connection;