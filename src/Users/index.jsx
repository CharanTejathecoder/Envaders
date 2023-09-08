import axios from 'axios';
import React, { useEffect, useState } from 'react'
import User from '../User';
import { Container, Row } from 'react-bootstrap';

export default function Users() {
    const URL='https://dummyapi.io/data/v1/user?limit=10';
    const [UsersData, setUsersData]= useState([]);

   useEffect(()=>{
    (async()=>{
      const {data: {data: UsersDatafromAPI}}  = await axios.get(URL,{headers:{"app-id": '64c16698b390b86d73c31d28'}});
      setUsersData(UsersDatafromAPI);
      console.log(UsersDatafromAPI);
      
    })()
   },[])  
  
  return (
    <div className='Users'>
    <Container fluid>
    <Row>
     { UsersData.map(userData=> <User data={userData} key={userData.id}  />)}  
     { UsersData.map(userData=> <User data={userData} key={userData.id}  />)} 
     </Row>
     </Container>
    </div>
  )
}
