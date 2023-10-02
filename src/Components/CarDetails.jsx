import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { BsSpeedometer } from "react-icons/bs";
import { GiSteeringWheel } from "react-icons/gi";
import { BsFuelPump } from "react-icons/bs";

function CarDetails({ car }) {
  return (
    <Card
      style={{
        width: "23rem",
        backgroundColor: "aliceblue",
        boxShadow: "5px 4px #dfd6d6",
        border: "1px solid black"
      }}
    >
      <Card.Img variant="top" src={car.img} />
      <Card.Body
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          padding: "22px"
        }}
      >
        <Card.Title>
          {car.name} {car.model}
        </Card.Title>
        <p
          style={{
            marginLeft: "20px",
            paddingLeft: "14px",
            borderRadius: "21%",
            marginLeft: "88px"
          }}
        >
          {car.model_year}
        </p>

        <div className="car-info">
          <p>
            <MdAirlineSeatReclineExtra
              style={{ margin: "11px", fontSize: "29px" }}
            />
            {car.seats}
          </p>
          <p>
            <BsFuelPump style={{ margin: "11px", fontSize: "29px" }} />
            {car.fuel_type}
          </p>
          <p>
            <BsSpeedometer style={{ margin: "11px", fontSize: "29px" }} />
            {car.mileage}
          </p>
          <p>
            <GiSteeringWheel style={{ margin: "11px", fontSize: "29px" }} />
            {car.type}
          </p>
        </div>
      </Card.Body>
      <div
        style={{
          display: "flex",
          padding: "16px",
          justifyContent: "space-between"
        }}
      >
        <p>${car.price}</p>
        <Button variant="primary" size="sm">
          Rent Now
        </Button>
      </div>
    </Card>
  );
}
export default CarDetails;
