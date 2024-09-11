import React from 'react'
import Image from 'next/image'

const BitcoinSend = () => {
  return (
    <div className='items-center flex flex-col bg-slate-700 overflow-hidden'>
      <h1 className='text-2xl mt-5'> Bitcoins Payment Page</h1>
      <h2 className='text-xs font-semibold text-red-400'> NOTE: Make sure to read and understand everything before making the payment</h2>
      <div>
        <Image
          src="/crypto.PNG"
          width={200}
          height={200}
          className='mt-5'
          alt='image'
        />
        <p className='text-xs'>Scan Qr Code</p>

      </div>
      <div className='text-slate-100 mt-5 bg-slate-600 p-4'>
        <h2 className='font-semibold  '> bc1q8fc4sk3ljsvdnu40nt3zwnpcvqf6sr6ek6valk</h2>
      </div>
      <h2 className='text-xs'>Copy and Send the Payments</h2>
      <div className='mt-5 m-2 p-5'>
        <h1 className='text-red-400'>YOUR BALANCE WILL BE CREDITED AUTOMATICALLY AFTER 3 CONFIRMATIONS RECEIVED AS WELL MARKED AS SUCCESS HERE
        </h1>
          
            <ul>
              <li> Send as much BTC as you want.</li>
              <li>Send funds within 20 minutes.</li>
              <ol>After your transactions get 3 confirmations your balance will be added to your account automatically.</ol>
              <li>This Bitcoin address will be used to fund your wallet, check.</li>
            </ul>
         
          
          
          
          WE ISSUE REFUNDS WITHIN 1- 2 hours
   


      </div>
    </div>
  )
}

export default BitcoinSend
