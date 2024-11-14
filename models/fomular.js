import { Schema, model, models } from 'mongoose';

const FormSchema = new Schema({
    service:{
        type:String
    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
      },
      description:{
        type:String,
        required: [true, 'Beskriv det du behöver hjälp med'],
      }
})

const FormLead = models.FormLead || model('FormLead',FormSchema)
export default FormLead