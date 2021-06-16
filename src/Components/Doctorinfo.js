import React, { useState } from 'react'
import jsondata from '../MOCK_DATA.json';
import './doctorinfo.css';
import Card from './Card';
// import { GoogleLogin,GoogleLogout } from 'react-google-login';
const Doctorinfo = () => {
    const [search,setSearch]= useState('');
   

    return <div className="doctorinfo">
            
            <center>
            <input type="text" placeholder="Search...."
            value={search} onChange={e=>{setSearch(e.target.value)}}/>
             <div className="container">
               {jsondata.filter(val=>{
                   if(search === '')
                   {
                       return val;
                   }
                   else if(val.first_name.toLowerCase().includes(search.toLowerCase()) ||
                   val.specilization.toLowerCase().includes(search.toLowerCase())){
                       return val;
                   }
               }).map((val,id)=>{
                  return <Card val={val} i={id}/>
               })
            }
            </div>
            </center>
           
        </div>
    
}

export default Doctorinfo;
