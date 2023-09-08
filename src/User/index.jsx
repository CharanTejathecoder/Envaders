import React from 'react'
import { Button, Card, Col } from 'react-bootstrap';

export default function User(props) {
  const { data: { firstName, lastName, title, picture } } = props;
  const str = `${title} ${firstName}`;
  return (
    <Col xs={{ span: 10, offset: 1 }} sm={{ span: 8, offset: 2 }} md={{ span: 5, offset: 0 }} lg={{ span: 4, offset: 0 }} xl={{ span: 3, offset: 0 }} >

        <div className='User'>
        <img src={picture} alt="No-image" width="100px" height="100px" />
          <div className='info'>
            <span > {str + ' ' + lastName}</span>
            {/* <span>{lastName}</span> */}
            <Button variant='outline-primary'>Add friend</Button>
          </div>
          </div>
       
    </Col>
  )
}

