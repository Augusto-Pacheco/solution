import { React, useState } from 'react'
import { ApolloProvider } from '@apollo/client'

import client from "../pages/api/client";
import Author from "../components/Author";

const services = () => {
  return (
    <div className='flex items-center justify-left h-screen mb-12 bg-fixed bg-center bg-cover custom-img text-2xl text-white'>
      <ApolloProvider client={client}>
<Author />
      </ApolloProvider>
      
     </div>
  )
}

export default services;