import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'

export default function SampleTest(){

const [orderBook,setOrderBook]=useState({
    clientId: "DBS010",
    instrumentId: "I001",
    limitOrder: "true",
    orderDirection: "BUY",
    price: 100,
    quantity: 25
  })

useEffect(()=>{
console.log(orderBook)
axios.post('http://localhost:8080/transaction',orderBook).then(response=>console.log(response.data)).catch(error=>console.log(error))
},[])

return <div></div>
}