import {Schema,model} from "mongoose";
interface Contactus{
    firstName:string,
    lastName:string,
    email:string,
    message:string
} 

const contactSchema=new Schema<Contactus>({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true},
    message:{type:String,required:true}
})
module.exports = model<Contactus>("contact", contactSchema);