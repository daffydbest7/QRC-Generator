import './App.css';
//import ReactDOM from 'react-dom';
import QRCode from 'qrcode.react';
import { useState } from 'react';

function App() {

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
      <div className='container mx-auto text-center '>
        <h3 className='bg-teal-500 text-xl lg:2xl'> Enter your url in the field below to generate a QRC </h3>
        <input className="text-black border border-lg mt-4 pl-4 pr-4 pt-2 pb-2 hover:bg-teal-500 hover:text-white w-25" type='text' name="url" id='url' value={url} onChange={(e)=> {handleChange(e)}} />
        <div className='text-center mt-8'>
        <p className='mb-2'>Scan my QR Code</p>
        <QRCode id="daveqrc" value={url} includeMargin={true} renderAs="canvas"  size={250} className='mx-auto ' />
      </div>  
        <div className=''>
          <a className="bg-teal-500 p-2 rounded-lg mb-4 hover:text-white cursor-pointer" onClick={downloadQR}> Download QR </a>
        </div>

      <div className='app mt-4'>
        <span className='footer'> David Lawrence @2023</span>
      </div>
      </div>
       
    </div>
  );
}

export default App;
