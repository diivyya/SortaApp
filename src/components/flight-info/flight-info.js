import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { DetailLabel } from './../detail-label/detail-label';
import nonStopFlightLogo from './../../assets/nonstop.png';
import './flight-info.css';

const FlightLogo = (props) => {
  return <img src={nonStopFlightLogo} width="32" height="32"></img>
}

export const FlightInfo = (props) => {
  const { name, flightNo, departureTime, origin, destination, price, date  } = props.data;
  const isMultiMode = props.isMultiMode;
  return (
    <Card bg="light" border="primary">
      <section className={`Flight-info ${isMultiMode ? 'gray-background' : ''}`}>
      <Card.Header><b>Rs. {price}</b></Card.Header>
        <DetailLabel mainText={name} subText={flightNo} ></DetailLabel>
        <DetailLabel mainText={departureTime} subText={origin} ></DetailLabel>
        <DetailLabel mainText="-" subText={destination} ></DetailLabel>
        <FlightLogo></FlightLogo>
        <Button variant="outline-danger">Book</Button>
      </section>
    </Card>
  )
}