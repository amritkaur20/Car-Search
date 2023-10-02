import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavDropdown from "react-bootstrap/NavDropdown";
import carData from "../carData.json";
import CarDetails from "./CarDetails";
import Card from "react-bootstrap/Card";

function CarSearch({ handleSearchText }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    const filtered = carData.filter((car) =>
      `${car.name}`.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCars(filtered);
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <Navbar
        className="bg-body-tertiary"
        style={{ backgroundColor: "aliceblue" }}
      >
        <Form inline>
          <Row style={{ marginRight: "24px", marginLeft: "47px" }}>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search for a car..."
                value={searchTerm}
                onChange={handleSearchChange}
                className=" mr-sm-2"
              />
            </Col>
          </Row>
        </Form>

        <NavDropdown
          title="Relevance"
          id="basic-nav-dropdown"
          className="col-md-1"
        />

        <NavDropdown title="All Brands" id="basic-nav-dropdown" />
      </Navbar>
      <Card
        style={{
          backgroundColor: "aliceblue",
          display: "grid",
          padding: "4rem",
          gridTemplateColumns: "auto auto auto",
          gridGap: "21px"
        }}
      >
        {filteredCars.map((car) => (
          <CarDetails key={car.id} car={car} />
        ))}
      </Card>
    </div>
  );
}
export default CarSearch;
