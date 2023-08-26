//modelo que permite usa la api de openai con react
import {Configuration, OpenAIApi} from 'openai-edge'
import { NextResponse } from 'next/server'
//importamos el stream (para que sea mas rapido el flujo) y la respuesta
import {OpenAIStream, StreamingTextResponse} from 'ai';

//creamos la configuracion de la api
const config= new Configuration({
    apiKey:process.env.OPENAI_API_KEY,

})
//creamos la api de openai con la configuracion
const openai= new OpenAIApi(config);

//creamos la funcion post que recibe un request
export async function POST(request:Request) {
    const { messages } = await request.json();
    //creamos la respuesta de la api
    const response= await openai.createChatCompletion({
        model:"gpt-3.5-turbo",
        stream:true,
        messages,
    });
    //creamos el stream de la respuesta
    const stream= OpenAIStream(response);
    //retornamos la respuesta
    return new StreamingTextResponse(stream);
}
