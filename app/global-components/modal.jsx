import React from 'react'

export default function modal({isVisible, onClose,compo}) 
  {
    const join = compo
    if(!isVisible) return null;

    const handleClose = (e) =>{
        if(e.target.id === 'wrapper') onClose();
      }
    return (
      <div className='fiex inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center item-center' id="wrapper" onClick={() => onClose(handleClose)}>
        <div className='w-[600px] flex flex-col'>
            <button className='text-white text-xl place-self-end' onClick={() => onClose}>X</button>
        </div>
        <div className='bg-white p-2 rounded'>
            {join}
        </div>
      </div>
    )
  }
