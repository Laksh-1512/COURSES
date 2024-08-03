import React from 'react'
import ItemsCard from './ItemsCard'

const data=[{
  img: "https://appxcontent.kaxa.in/paid_course3/2024-07-07-0.07833836520330406.png",
  name:"Complete Web Development + Devops + Blockchain Cohort",
  detail:"Complete syllabus - https://blog.100xdevs.com/ Starts 2nd Au",
  price:"5999",
},{
  img: "https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.40079486154772104.png",
  name:"Complete Web Development + Devops + Blockchain Cohort",
  detail:"Complete syllabus - https://blog.100xdevs.com/ Starts 2nd Au",
  price:"5999",
},{
  img:"https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.40079486154772104.png",
  name:"Complete Web Development + Devops + Blockchain Cohort",
  detail:"Complete syllabus - https://blog.100xdevs.com/ Starts 2nd Au",
  price:"5999",
}]

const SecondPage = () => {
  return (

    <div  className='bg-black h-[42rem] w-full text-white '>
       <h1 className='text-white text text-center font-bold text-3xl pt-10'>Courses</h1> 
       <div className=' flex justify-center mt-6 gap-5 '>
        {data.map((e)=>{return(<ItemsCard img ={e.img} name={e.name} detail={e.detail} price={e.price}></ItemsCard>)})}
       </div>
       {/* <div className='flex justify-center'>
        <button className='bg-gradient-to-r from-blue-700 to-purple-700 font-bold text-xl rounded-lg m-2 p-2 w-[30rem]' onClick={}>Connect to Metamask Wallent</button>
       </div> */}
    </div>
  )
}

export default SecondPage
