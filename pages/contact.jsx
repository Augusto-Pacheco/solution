import React from 'react'

const Contact = () => {
  return (
    <div className='flex items-center justify-left h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      <h1 className='text-2xl font-bold text-center text-white p-4'>contactanos</h1>
         <form className='max-w-[600px] m-auto'>
             <div className='grid grid-cols-2 gap-2'>
                 <input className='input input-bordered input-md w-full max-w-xs' type="text" placeholder='Name' />
                 <input className='input input-bordered input-md w-full max-w-xs' type="email" placeholder='Email' />
             </div>
             <input className='input input-bordered w-full max-w-xls shadow-lg p-3 my-2' type="text" placeholder='Subject' />
             <textarea className='textarea p-3 w-full' cols="30" rows="10" placeholder='Message'></textarea>
             <button className="btn btn-wide max-w-xls">Submit</button>
         </form>
    </div>
    // <div className="className=flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
    //     <h1 className='text-2xl font-bold text-center p-4'>contactanos</h1>
    //     <form className='max-w-[600px] m-auto'>
    //         <div className='grid grid-cols-2 gap-2'>
    //             <input className='border shadow-lg p-3' type="text" placeholder='Name' />
    //             <input className='border shadow-lg p-3' type="email" placeholder='Email' />
    //         </div>
    //         <input className='border shadow-lg p-3 w-full my-2' type="text" placeholder='Subject' />
    //         <textarea className='border shadow-lg p-3 w-full' cols="30" rows="10" placeholder='Message'></textarea>
    //         <button className='border shadow-lg p-3 w-full mt-2'>Submit</button>
    //     </form>
    // </div>
  )
}

export default Contact