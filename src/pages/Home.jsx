import React, {useEffect} from 'react'

export default function Home() {

    //use
    useEffect(()=>{
        console.info(import.meta.env.VITE_SECRETKEY)
    }, [])


  return (
    <div className='App'>
        <h1>Homepage</h1>
    </div>
  )
}
