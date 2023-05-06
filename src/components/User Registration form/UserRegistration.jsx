import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import dropdownContext from "../../context/DropdownContext/DropdownContext";
import { useEffect } from "react";

const UserRegistration = () => {
  const { getCountry, country, getState, selectedState, getCity, city } =
    useContext(dropdownContext);
  const [selectCountry, setSelectCountry] = useState();
  const [selectState, setSelectState] = useState();
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    sex: "",
    mobile: "",
    govID: "",
    gname: "",
    email: "",
    emergencycontact: "",
    address: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    occupation: "",
    religion: "",
    maritalstatus: "",
    bloodgroup: "",
    nationality: "",
  });

  useEffect(() => {
    getCountry();
  }, []);

  // const handleCountry = (e) => {
  //   setSelectCountry(e.target.value);
  // };

  useEffect(() => {
    getState(selectCountry);
  }, [selectCountry]);

  // const handleStateChange = (e) => {
  //   setSelectState(e.target.value);
  // };

  useEffect(() => {
    getCity(selectState);
  }, [selectState]);

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData)

  }

   const handleInputChange = (e) => {
    
      setSelectCountry(e.target.value);
      setSelectState(e.target.value);
     const { name, value } = e.target;
     setFormData({ ...formData, [name]: value });
   };

  return (
    <Container style={{ marginTop: "20px" }}>
      <h4 style={{ fontWeight: "600" }}>User Registration</h4>
      <h5 style={{ fontWeight: "600", fontSize: "17px", marginTop: "20px" }}>
        Personal Details
      </h5>
      <Row>
        <Col xs={6} md={4}>
          <Form.Label
            htmlFor="Name"
            style={{ fontWeight: "400", fontSize: "17px", marginTop: "5px" }}
          >
            Name
          </Form.Label>
          <Form.Control
            type="text"
            id="Name"
            size="sm"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />

          <Form.Label
            htmlFor="contactNumber"
            style={{ fontWeight: "400", fontSize: "17px", marginTop: "15px" }}
          >
            Mobile
          </Form.Label>
          <Form.Control
            type="number"
            id="mobile"
            size="sm"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
          />
        </Col>

        <Col xs={6} md={4}>
          <Form.Label
            htmlFor="DOB"
            style={{ fontWeight: "400", fontSize: "17px", marginTop: "5px" }}
          >
            Date of Birth
          </Form.Label>
          <Form.Control
            type="Date"
            id="DOB"
            size="sm"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
          />

          <Form.Label
            htmlFor="idType"
            style={{ fontWeight: "400", fontSize: "17px", marginTop: "15px" }}
          >
            Select type of ID Proof
          </Form.Label>

          <Form.Select id="idType" size="sm">
            {" "}
            <option value="1">Adhaar Card</option>
            <option value="2">Pan Card</option>
          </Form.Select>
        </Col>

        <Col xs={6} md={4}>
          <Form.Label
            htmlFor="gender"
            style={{ fontWeight: "400", fontSize: "17px", marginTop: "5px" }}
          >
            Sex
          </Form.Label>
          <Form.Select
            id="gender"
            size="sm"
            name="sex"
            value={formData.sex}
            onChange={handleInputChange}
          >
            {" "}
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Female">other</option>
          </Form.Select>
          <Form.Label
            htmlFor="IDproof"
            style={{ fontWeight: "400", fontSize: "17px", marginTop: "15px" }}
          >
            Enter the ID proof number
          </Form.Label>
          <Form.Control
            type="text"
            id="IDproof"
            size="sm"
            name="govID"
            value={formData.govID}
            onChange={handleInputChange}
          />
        </Col>
      </Row>

      {/* Contact Details */}
      <h5 style={{ fontWeight: "600", fontSize: "17px", marginTop: "20px" }}>
        Contact Details
      </h5>
      <Row>
        <Col xs={6} md={3}>
          <Form.Label
            htmlFor="Name"
            style={{ fontWeight: "400", fontSize: "17px", marginTop: "5px" }}
          >
            Gardian Details
          </Form.Label>
          <Form.Select id="idType" size="sm">
            {" "}
            <option value="1">Mr</option>
            <option value="2">Mrs</option>
          </Form.Select>
        </Col>

        <Col xs={6} md={3}>
          <Form.Label
            htmlFor="idType"
            style={{ fontWeight: "400", fontSize: "17px", marginTop: "5px" }}
          >
            Gardian Name
          </Form.Label>
          <Form.Control
            type="Name"
            id="GName"
            size="sm"
            name="gname"
            value={formData.gname}
            onChange={handleInputChange}
          />
        </Col>

        <Col xs={6} md={3}>
          <Form.Label
            htmlFor="gender"
            style={{ fontWeight: "400", fontSize: "17px", marginTop: "5px" }}
          >
            Gardian Email
          </Form.Label>
          <Form.Control
            type="email"
            id="Gemail"
            size="sm"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </Col>
        <Col xs={6} md={3}>
          <Form.Label
            htmlFor="gender"
            style={{ fontWeight: "400", fontSize: "17px", marginTop: "5px" }}
          >
            Emergency Contact Number
          </Form.Label>
          <Form.Control
            type="text"
            id="Econtact"
            size="sm"
            name="emergencycontact"
            value={formData.emergencycontact}
            onChange={handleInputChange}
          />
        </Col>
      </Row>
      {/* Address Details */}
      <h5 style={{ fontWeight: "600", fontSize: "17px", marginTop: "20px" }}>
        Address Details
      </h5>
      <Row>
        <Col xs={6} md={4}>
          <Form.Label
            htmlFor="Address"
            style={{ fontWeight: "400", fontSize: "17px", marginTop: "5px" }}
          >
            Address
          </Form.Label>
          <Form.Control
            type="text"
            id="Address"
            size="sm"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
          <Form.Label
            htmlFor="Country"
            style={{ fontWeight: "400", fontSize: "17px", marginTop: "15px" }}
          >
            Country
          </Form.Label>

          <Form.Select
            id="country"
            size="sm"
            name="country"
            value={formData.country}
            // onChange={(e) => handleCountry(e)}
            onChange={handleInputChange}
          >
            {country.map((obj) => (
              <option value={obj.country_name}>{obj.country_name}</option>
            ))}
          </Form.Select>
        </Col>

        <Col xs={6} md={4}>
          <Form.Label
            htmlFor="State"
            style={{ fontWeight: "400", fontSize: "17px", marginTop: "5px" }}
          >
            State
          </Form.Label>
          <Form.Select
            id="State"
            size="sm"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            // onChange={(e) => {
            //   handleStateChange(e);
            // }}
          >
            {selectedState.map((obj) => (
              <option value={obj.state_name}>{obj.state_name}</option>
            ))}
          </Form.Select>
          <Form.Label
            htmlFor="Pincode"
            style={{ fontWeight: "400", fontSize: "17px", marginTop: "15px" }}
          >
            Pincode
          </Form.Label>
          <Form.Control
            type="text"
            id="Pincode"
            size="sm"
            name="pincode"
            value={formData.pincode}
            onChange={handleInputChange}
          />
        </Col>

        <Col xs={6} md={4}>
          <Form.Label
            htmlFor="City"
            style={{ fontWeight: "400", fontSize: "17px", marginTop: "5px" }}
          >
            City
          </Form.Label>
          <Form.Select
            id="city"
            size="sm"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          >
            {city.map((obj) => (
              <option value={obj.city_name}>{obj.city_name}</option>
            ))}
          </Form.Select>
        </Col>
        {/* Other Details */}
        <h5 style={{ fontWeight: "600", fontSize: "17px", marginTop: "20px" }}>
          Other Details
        </h5>
        <Col xs={6} md={3}>
          <Form.Label
            htmlFor="Occupation"
            style={{ fontWeight: "400", fontSize: "17px", marginTop: "5px" }}
          >
            Occupation
          </Form.Label>
          <Form.Control
            type="text"
            id="Occupation"
            size="sm"
            name="occupation"
            value={formData.occupation}
            onChange={handleInputChange}
          />
        </Col>
        <Col xs={6} md={3}>
          <Form.Label
            htmlFor="Religion"
            style={{ fontWeight: "400", fontSize: "17px", marginTop: "5px" }}
          >
            Religion
          </Form.Label>
          <Form.Select
            id="Religion"
            size="sm"
            name="religion"
            value={formData.religion}
            onChange={handleInputChange}
          >
            {" "}
            <option value="Hindu">Hindu</option>
            <option value="Muslim">Muslim</option>
            <option value="Sikh">Sikh</option>
            <option value="Christian">Christian</option>
          </Form.Select>
        </Col>
        <Col xs={6} md={2}>
          <Form.Label
            htmlFor="Marital"
            style={{ fontWeight: "400", fontSize: "17px", marginTop: "5px" }}
          >
            Marital Status
          </Form.Label>
          <Form.Select
            id="Marital"
            size="sm"
            name="maritalstatus"
            value={formData.maritalstatus}
            onChange={handleInputChange}
          >
            {" "}
            <option value="1">Single</option>
            <option value="2">Married</option>
            <option value="2">Other</option>
          </Form.Select>
        </Col>
        <Col xs={6} md={2}>
          <Form.Label
            htmlFor="Blood group"
            style={{ fontWeight: "400", fontSize: "17px", marginTop: "5px" }}
          >
            Blood group
          </Form.Label>
          <Form.Select
            id="BloodGroup"
            size="sm"
            name="bloodgroup"
            value={formData.bloodgroup}
            onChange={handleInputChange}
          >
            {" "}
            <option value="1">A+</option>
            <option value="2">A-</option>
            <option value="2">B+</option>
            <option value="2">B-</option>
            <option value="2">AB+</option>
            <option value="2">AB-</option>
            <option value="2">O+</option>
            <option value="2">O-</option>
          </Form.Select>
        </Col>
        <Col xs={6} md={2}>
          <Form.Label
            htmlFor="Nationality"
            style={{ fontWeight: "400", fontSize: "17px", marginTop: "5px" }}
          >
            Nationality
          </Form.Label>
          <Form.Control
            type="text"
            id="Nationality"
            size="sm"
            name="nationality"
            value={formData.nationality}
            onChange={handleInputChange}
          />
        </Col>
      </Row>
      <Container
        style={{
          display: "flex",
          marginTop: "20px",
          alignItems: "right",
          justifyContent: "right",
        }}
      >
        <Button
          style={{
            margin: "10px",
          }}
          variant="danger"
        >
          Cancel
        </Button>{" "}
        <Button
          onClick={handleSubmit}
          style={{
            margin: "10px",
          }}
          variant="success"
        >
          Submit
        </Button>{" "}
      </Container>
    </Container>
  );
};

export default UserRegistration;
