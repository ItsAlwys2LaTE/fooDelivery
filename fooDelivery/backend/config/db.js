import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://anupamsharma12102004:Anupam1210@cluster0.wt737.mongodb.net/fooDelivery').then(()=>console.log("DB Connected"));
   
}