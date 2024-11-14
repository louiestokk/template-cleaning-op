import { connectToDB } from "../../../utils/database";
import FormLead from '../../../models/fomular'


export const POST = async(req,res)=>{
    const {service,email,description} = await req.json()

    try {
        await connectToDB()
        const newForfragan = new FormLead({service,email,description})
        await newForfragan.save()
        return new Response(JSON.stringify(newForfragan), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new förfrågan", { status: 500 });
    }
}