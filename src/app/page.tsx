"use client"
// Note: Page Component
// lo ponemos en el cliente porque es el que va a tener el formulario

import React from 'react';
// importamos el hook que creamos en el server para usarlo en el cliente
import {useChat} from 'ai/react';


//creamos la funcion que va a ser el componente
function HomePage() {
  // usamos el hook que creamos en el server
  // el hook nos devuelve un objeto con dos funciones
  // handleInputChange: para manejar el cambio en el input
  // handleSubmit: para manejar el submit del formulario
  const{handleInputChange, handleSubmit, messages, isLoading, input} = useChat()
    console.log(messages);

    //le pasamos el handleSubmit al onSubmit del formulario creamos el formulario//
     // creamos el input
    // le pasamos el handleSubmit al onSubmit del formulario//
    //creamos el label para el input
    // creamos el boton para enviar el mensaje
    // le pasamos el handleInputChange al onChange del input
    // le pasamos el handleInputChange al onChange del input
    // le pasamos el handleInputChange al onChange del input
    // creamos el textarea para el mensaje que el usuario va a enviar

  return (
    <section className='flex justify-center items-center h-screen'>
      
      <form className='text-white max-w-xl w-full' onSubmit={handleSubmit}>
        <div className='text-white max-h-96 h-full overflow-y-auto'>
        {messages.map((m)=> (
          <div className={`flex flex-col mb-2 p-2 rounded-md ${
            m.role== "assistant"
            ?'self-end bg-pink-400'
            :'self-start bg-pink-300'
            }`} 
            key={m.id}
          >
            <span className={`text-xs &{
              m.role=='assistant'? 'text-right'
              :'text-left'
            }`}
            >
              {m.role}           
            </span>
            {m.content}
          </div>
        ))}
        </div>
        <div className='flex justify-between my-4'>
          <label className='text-pink-600 block font-bold my-2'> 
            Ask Barbie,
          </label>
          <button className='bg-pink-600 text-white px-3 py-2 rounded-md focus:outline-none disabled:opacity-50'disabled={isLoading|| !input}>
            Run
          </button>
        </div>
  
        <textarea
        //va a tener 4 filas
          rows={4}
          value={input}
        // placeholder para que el usuario sepa que tiene que escribir
          placeholder="Type me..."
          className='text-pink-600 bg-white px-3 py-2 w-full rounded-md focus:outline-none'
        // le pasamos el handleInputChange al onChange del textarea para manejar el cambio en el textarea porque el usuario va a escribir ahi
          onChange={handleInputChange}>
        </textarea>
      </form>
    </section>
  )
};


export default HomePage;

