"use client"
import { useState, useEffect } from "react";
const axios = require("axios").default;

export default function Home() {
  const [option, setOption] = useState([])
const [to, setTo] = useState("en")
const [from, setFrom] = useState("en")
const [input, setInput] = useState("")
const [output, setOutput] = useState("")

const tanslate = ()=>{
  const params = new URLSearchParams();
params.append('q', input);
params.append('source', from);
params.append('target', to);
axios.post('api_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
  axios.post('https://libretranslate.de/translate',params,{
    headers: {'accept': 'application/json',"Content-Type": "application/x-www-form-urlencoded",
  },
  }).then(res=>{
    setOutput(res.data.translatedText)
  })
}

useEffect(() => {
  axios.get('https://libretranslate.com/languages',
  {headers: {'accept': 'application/json'}}).then(res=>{
    setOption(res.data)
  })
},[])
  return (
  <>
    <h1 className="text-center py-8 text-2xl uppercase font-semibold">Translator to languages</h1>
   <div className="text-center mb-4">
    <div className="md:text-2xl max-md:text-md font-sans font-semibold py-4">
      
    From: ({from})
    <select className="bg-gray-100 m-2" onChange={e=>setFrom(e.target.value)}>
     {option.map(opt=> <option className="bg-gray-900 text-white" key={opt.code} value={opt.code}>{opt.name}</option> )}
    </select>
    To: ({to})
    <select className="bg-gray-100 m-2" onChange={e=>setTo(e.target.value)}>
     {option.map(opt=> <option className="bg-gray-900 text-white" key={opt.code} value={opt.code}>{opt.name}</option> )}
    </select>
    </div>
  

   <div>
   <div className="py-4 mx-auto">
   <textarea className="w-full bg-slate-100" cols="50" rows="8" onInput={(e)=>setInput(e.target.value)}></textarea>
   </div>
   <div>
   <textarea className="w-full bg-slate-100" cols="50" rows="8" value={output}></textarea>
   </div>
   <div className="py-4">
   <button className="border-b bg-gray-400 px-5 py-1 text-xl rounded" onClick={e=>tanslate()}>Translate</button>
   </div>
   </div>
   </div>
  </>
  )
}
