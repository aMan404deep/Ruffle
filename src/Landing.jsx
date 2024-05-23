// import React from 'react'
import dog from '../src/assets/dog.png'
function Landing() {
    return (
        <div className='flex m-4 text-red-900' >
            <div className='w-1/2 px-3 flex justify-center items-center'>
                <h1 className='text-8xl text-left font-bold'>Where Being A Dog Is Just The Best</h1>
            </div>
            <div className='w-1/2 flex items-center justify-center'>
                <img src={dog} height="2rem" width="500rem"/>
            </div>
        </div>
    )
}

export default Landing