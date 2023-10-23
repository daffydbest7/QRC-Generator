import React from 'react';
import QRCode from 'qrcode.react';
import { useState } from 'react';
import PayButton from './payButton';

const QrCodeGenerator = () => {
    const amount = 3000*35;
    const email = 'daffydbest@gmail.com';
  
  
    const [url, setUrl] = useState(" ");
  
    const handleChange =(e)=>{
      
      setUrl(e.target.value)
    }
  
    // download handler
    const downloadQR = () => {
      const canvas = document.getElementById("daveqrc");
      const pngUrl = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      let downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "daveqrc.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    };
    
    
    return (
      <div className="App text-center mx-auto">
        <h1 className='text-3xl font-bold '>King David Dynamic QrCode Generator</h1>
        <div className='container mx-auto text-center '>
          <h3 className='mt-5 bg-teal-500 text-xl lg:2xl'><span className='text-red-500 font-bold'>Instruction:</span> Enter your url in the field below to generate a QRC, donate a token for support 
          (optional), download your newly generated QR Code </h3>
          <input className="text-black border border-lg mt-4 pl-4 pr-4 pt-2 pb-2 hover:bg-teal-500 hover:text-white w-25" type='text' name="url" id='url' value={url} onChange={(e)=> {handleChange(e)}} />
          <div className='text-center mt-8'>
          <p className='mb-2'>Scan my QR Code</p>
          <QRCode id="daveqrc" value={url} includeMargin={true} renderAs="canvas"  size={250} className='mx-auto ' />
        </div>  
        </div>
        <div className='mt-[10px] '>
        <h1 className='mb-6'>Please buy me a beer for support </h1>
        <span className='bg-green-500 p-2 rounded-lg '><PayButton amount={amount} email={email} /></span>
        <div className='mt-[20px]'>
            <a className="bg-teal-500 p-2 rounded-lg mb-4 hover:text-white cursor-pointer" onClick={downloadQR}> Download QR </a>
          </div>
        <div className='app mt-12'>
          <span className='footer'> David Lawrence @2023</span>
        </div>
      </div>
  
      </div>
    );
}

export default QrCodeGenerator
