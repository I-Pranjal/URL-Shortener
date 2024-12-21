import { useState } from 'react';
import './App.css';

function App() {
  const [url, seturl] = useState("");
  const [surl, setSurl] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch(`https://ulvis.net/api.php?url=${url}`);
      const data = await response.json(); 
      console.log(data); 
      setSurl(data);
    } catch (error) {
      console.error("Error fetching the shortened URL:", error);
    }
  };

  return (
    <div className='p-4 bg-white bg-opacity-20 rounded-lg'>
      <h2 className='font-bold text-4xl text-pink-500 md:text-9xl'>
        Welcome to URL Shortener
      </h2>
      <input
        type='text'
        onChange={(e) => seturl(e.target.value)}
        className='md:w-4/6 md:p-3 m-6 text-black font-mono rounded-md'
      />
      <button
        type='submit'
        className='bg-green-500 m-4 p-3 rounded-lg hover:bg-green-700 font-bold text-black'
        onClick={handleSubmit}
      >
        Generate URL
      </button>
      <div>
        <input
          type='text'
          readOnly
          className='bg-slate-300 md:w-1/2 md:p-4 rounded-md text-black w-full p-3'
          value={surl}
        />
      </div>
    </div>
  );
}

export default App;
