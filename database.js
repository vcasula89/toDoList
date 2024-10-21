import mongoose from 'mongoose';
const dbName = 'clustertodolist'
const user='valentinacasula70'

const password='XIXxCtDSJp5yt0jL'

const connectionUrl = `mongodb+srv://
${user}:${password}
@clustertodolist.9ynuq.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=ClusterToDoList'`


const connect = async () => {
  try {
    await mongoose.connect(connectionUrl);
    console.log('- Connected to MongoDB server');
  } catch (error) {
    console.log('- Connection error', error);
    throw(error);
  }
}
export default connect;