import React from 'react'


const Header = () => {

    const signup=()=>{
    

        }
    const login=async(e)=>{
        // const provider = await new GoogleAuthProvider();
        // return signInWithPopup(auth,provider);
        
    }
  return (
    <div className='h-24 w-full bg-black flex'>
      <img className="ml-10 w-[12rem] h-[9rem] -mt-8" src='https://cdn.dribbble.com/userupload/5117876/file/original-a0ac978e88332fc7b46b3ace42abf171.jpg?resize=400x0' alt='logo'></img>
      {/* <h1 className='text-white text-lg w-[10rem]mt-8 '>Happy Aspirants</h1> */}
      <div className='flex mt-8 justify-center -ml-40 pl-[50rem] space-x-12 text-lg'>
        <h1 className='text-white cursor-pointer'>Home</h1>
        <h1 className='text-white cursor-pointer'>About Us</h1>
        {/* <h1 className='text-white cursor-pointer'>Contact Us📞</h1> */}
        <h1 className='text-white cursor-pointer'>Cart🛒</h1>
        <button className='text-white cursor-pointer mb-9' onClick={login}>Log In</button>
        <button className='text-white cursor-pointer mb-9' onClick={signup}>Sign Up</button>
      </div>
    </div>
  )
}

export default Header;
