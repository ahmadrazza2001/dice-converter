import { useEffect, useState } from 'react';
import { fetch } from '../utils/apiRequest';
import "../scss/_home.scss"
import logo from "../assets/logo.png";
import Spinner from '../utils/spinner/spinner';

const Home: React.FC = () => {

    const [link, setLink] = useState('');
    const [id, setId] = useState(null);
    const [response, setResponse] = useState<any | null>(null);
    const [isConverting, setIsConverting] = useState<boolean>(false);

    useEffect(() => {
        if(id){
            setIsConverting(true);
            const fetchData = () => {
                let interval = setInterval(async function () {
                    const res = await fetch(id);
                    if(res.status === 200) {
                        console.log("success");
                        setIsConverting(false);
                        setResponse(res.data);
                        await clearInterval(interval);
                    }
                }, 1000)
            }
           fetchData();
         }
    }, [id])

    useEffect(() => {
        if (response) {
            window.location.href = response.link;
        }
    }, [response])

  return (
    <div className="container">
     <div id="logo">
        <img src={logo}/>
        <h3>DICE Converter</h3>
        <small>Youtube to MP3</small>
     </div>
     <div id="container-body">
        <input placeholder='Enter Youtube video URL'
        type="text"
        value={link}
        onChange={(e) => {
            setLink(e.target.value);
        }} />
        <small>Note: It might take a moment to convert your video.</small>
     </div>
     <button
        onClick={() => {
            const text:any = link.split("=")[1];
            if(text) {
                setId(text)
            }
        }}
     >CONVERT & DOWNLOAD</button>
     {isConverting && <Spinner />} 
    </div>
  );
};

export default Home;
