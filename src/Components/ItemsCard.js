import React, { useState } from 'react';
import { ethers,formatEther } from 'ethers';

const ItemsCard = ({ img, name, detail, price }) => {
  const [useradd,setuseradd]=useState(null);

  const handleconnection=async()=>{
     if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setuseradd(accounts[0]);
      } catch (error) {
        alert('Could not connect your Account');
      }
    } else {
      alert('Download MetaMask chrome extension');
    }
  }

  const handlePayment = async () => {
    if(useradd===null)
    await handleconnection();

    if(!window.ethereum){
      return;
    }
    if(useradd===null ){
      alert("Now you are connected! happy shopping");
      return;
    }
    const parameter = [
      {
        from: useradd,
        to: "0x8Eff16d3eF5C895FEb0FAf11aC82a42BdAfcF859",
        gasLimit: Number(21000).toString(16),
        gasPrice: Number(250000).toString(16),
        value: Number(price*5000000000000).toString(16),
      },
    ];

    try {
      await window.ethereum.request({ method: "eth_sendTransaction", params: parameter });
    } catch (error) {
      alert(error.message || 'An error occurred while transferring funds.');
    }
  };

  return (
    <div className='h-[27rem] w-[20rem] bg-slate-500 p-5 m-5 rounded-lg '>
      <img className="rounded-lg" src={img} alt="" />
      <h1 className='text-black font-bold m-2'>{name}</h1>
      <h1 className='text-black m-2'>{detail}</h1>
      <h1 className='font-bold text-lg'>₹ {price}</h1>
      <div className='flex justify-center'>
        <button className='bg-gradient-to-r from-blue-700 to-purple-700 font-bold text-xl rounded-lg m-2 p-2 w-[10rem]' onClick={handlePayment}>Buy Now</button>
      </div>
    </div>
  );
}

export default ItemsCard;
