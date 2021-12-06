import React, { useEffect, useState } from 'react'
// import './Orderformstyle.css';
import '../App.css'
import './Form.css'
import { FormControl, TextField } from '@mui/material'
// import DialogSelect from './DialogSelect'
import { MenuItem,InputProps,InputLabel, Select
} from '@mui/material'
import axios from 'axios'
import GetClient from './getClient'
import GetInstrument from './getInstrument'





export default function Form(){





const facevalue=''
const expiry=''



const [orderbook,setOrderBook]=useState({limitOrder:'true'})
const [client,setClient]=useState({})
const [clientStatus,setClientStatus]=useState(0)
const [clientError,setClientError]=useState(false)
const [instrument,setInstrument]=useState({})
const [instrumentStatus,setInstrumentStatus]=useState(0)
const [instrumentError,setInstrumentError]=useState(false)
const [orderDirection,setOrderDirection]=useState("")


const getClientByID=(event)=>{
    
    if (event.target.value.length===6){
        console.log(event.target.value)
        setClientStatus(event.target.value.length)
        
        axios.get(`http://localhost:8080/client/${event.target.value}`)
        .then(response=>{
            console.log(response.data);
           setClient(response.data)
           setOrderBook({...orderbook,clientID:event.target.value})
           setClientStatus(true)
           
            
        })
        .catch(error=>setClientError(true))
    }
    
}

const clientDetails=()=>{
    return !clientError && <GetClient client={client} custodian={client.custodian} error={clientError}/>
}

const getInstrumentByID=(event)=>{
    
    if (event.target.value.length===4){
        setInstrumentStatus(event.target.value.length)
        console.log(event.target.value)
        axios.get(`http://localhost:8080/instrument/${event.target.value}`)
        .then(response=>{
            console.log(response.data);
           setInstrument(response.data)
           setOrderBook({...orderbook,instrumentID:event.target.value})
          
            
        })
        .catch(error=>setInstrumentError(true))
    }

    
}

const instrumentDetails=()=>{
    return !instrumentError && <GetInstrument instrument={instrument} error={instrumentError}/>
}


console.log(instrument.instrumentName)
//useEffect(()=>{setOrderBook({...orderbook,client})},[client])
//useEffect(()=>{setOrderBook({...orderbook,instrument})},[instrument])
useEffect(()=>{console.log(orderbook)},[orderbook])

const buyHandler=()=>{
  
   setOrderDirection("BUY")
   // axios.post("http://localhost:8080/transaction",orderbook).then(response=>console.log(response))
   // .catch(error=>console.log(error))
   console.log(orderbook)
}

const sellHandler=()=>{
   // setOrderDirection("SELL")

    console.log(orderbook)
    //axios.post("http://localhost:8080/transaction",orderbook)
    //.then(response=>console.log(response))
    //.catch(error=>console.log(error))
}
const priceHandler=(e)=>{
    var p= e.target.value
    var pr=parseInt(p)
    setOrderBook({...orderbook,price:pr})
}

const form=<FormControl fullWidth >



<div style={{marginBottom:20,marginTop:20}}>
<TextField fullWidth label="Client ID" variant="outlined" focused required onChange={getClientByID}/><br/>
</div>
<div style={{marginBottom:20,marginTop:20}}>
<GetClient client={client} custodian={client.custodian} error={clientError}/>
</div>
<div style={{marginBottom:20,marginTop:20}}>
<TextField fullWidth label="Instrument ID" variant="outlined" focused  required onChange={getInstrumentByID}/><br/>
</div>
<div style={{marginBottom:20,marginTop:20}}>
<GetInstrument instrument={instrument} error={instrumentError}/>
</div>
<div style={{marginBottom:0,marginTop:20}}>
<TextField fullWidth label="Price" 
   
 variant="outlined" type="number" required onChange={priceHandler} /><br/>
</div>



<FormControl sx={{ marginTop:5, minWidth: 120 }}>
<InputLabel id="demo-simple-select-label">Quantity</InputLabel>
<Select



labelId="demo-simple-select-label"
id="demo-simple-select"

label="Quantity"
fullWidth
onChange={(e)=>{setOrderBook({...orderbook,quantity:e.target.value})}}
>
<MenuItem value={25}>25</MenuItem>
<MenuItem value={50}>50</MenuItem>
<MenuItem value={75}>75</MenuItem>
<MenuItem value={100}>100</MenuItem>
<MenuItem value={125}>125</MenuItem>
<MenuItem value={150}>150</MenuItem>
<MenuItem value={175}>175</MenuItem>
<MenuItem value={200}>200</MenuItem>
{/* <MenuItem value={225}>225</MenuItem>
<MenuItem value={250}>250</MenuItem>
<MenuItem value={275}>275</MenuItem>
<MenuItem value={300}>300</MenuItem>
<MenuItem value={325}>325</MenuItem>
<MenuItem value={350}>350</MenuItem> */}
</Select>



</FormControl>







<div style ={{marginTop:20}}>
<button id="buy" value="BUY" onClick={(e)=>{setOrderBook({...orderbook,orderDirection:e.target.value})}}
>BUY</button>
<button id="sell" value="SELL" style={{marginLeft:250}} onClick={(e)=>{setOrderBook({...orderbook,orderDirection:e.target.value})}}>SELL</button>
</div>






</FormControl>







return <div>
<div className="formdiv" style={{margin:'auto',padding:20,marginLeft:'35%',width:400,borderRadius:5,backgroundColor:'#f2f2f2',}}>{form}</div>



</div>
}