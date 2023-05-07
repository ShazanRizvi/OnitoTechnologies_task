import React, { useContext, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import dropdownContext from "../../context/DropdownContext/DropdownContext";
import formContext from "../../context/FormContext/FormContext";
import { validateSchema } from "../../schemas/index";
import { useForm } from "react-hook-form";

const UserRegistration = () => {
  const { getCountry, country, getState, selectedState, getCity, city } =
    useContext(dropdownContext);
  const { register, handleSubmit,formState:{errors} } = useForm();

  const { addUser } = useContext(formContext);
  const [selectCountry, setSelectCountry] = useState();
  const [selectState, setSelectState] = useState();


  useEffect(() => {
    getCountry();
  }, []);

  const handleCountry = (e) => {
    setSelectCountry(e.target.value);
  };

  useEffect(() => {
    getState(selectCountry);
  }, [selectCountry]);

  const handleStateChange = (e) => {
    setSelectState(e.target.value);
  };

  useEffect(() => {
    getCity(selectState);
  }, [selectState]);

  const handleformSubmit = (data) => {
    addUser(
      data.name,
      data.dob,
      data.sex,
      data.mobile,
      data.govID,
      data.gname,
      data.email,
      data.emergencycontact,
      data.address,
      data.country,
      data.state,
      data.city,
      data.pincode,
      data.occupation,
      data.religion,
      data.maritalstatus,
      data.bloodgroup,
      data.nationality
    );
    //validation using yup
    const isValid = validateSchema.isValid(data);
    console.log(isValid);
    console.log(data);
    console.log(formState.errors.mobile);
  };

  // const handleInputChange = (e) => {
  // setSelectCountry(e.target.value);
  // setSelectState(e.target.value);
  // const { name, value } = e.target;
  // setFormData({ ...formData, [name]: value });
  // };
  //
  return (
    <Container style={{ marginTop: "20px" }}>
      <form onSubmit={handleSubmit(handleformSubmit)}>
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
              {...register("name")}
              // value={formData.name}
              // onChange={handleInputChange}
              placeholder="Enter Your Name"
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
              {...register("mobile")}
              // value={formData.mobile}
              // onChange={handleInputChange}
              placeholder="Enter Your Contact Number"
            />
            {/* {errors.mobile?.maxLength != 10 && */}
              {/* "Mobile number should be of 10 digits"} */}
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
              {...register("dob")}
              placeholder="Enter Your Date of Birth"
              // value={formData.dob}
              // onChange={handleInputChange}
            />

            <Form.Label
              htmlFor="idType"
              style={{ fontWeight: "400", fontSize: "17px", marginTop: "15px" }}
            >
              Select type of ID Proof
            </Form.Label>

            <Form.Select
              id="idType"
              size="sm"
              placeholder="Select an ID proof type"
            >
              <option value="" selected disabled>
                Select the type of Government ID
              </option>
              <option value="Adhaar Card">Adhaar Card</option>
              <option value="Pan Card">Pan Card</option>
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
              {...register("sex")}
              placeholder="Enter Your gender"
              // value={formData.sex}
              // onChange={handleInputChange}
            >
              <option value="" selected disabled>
                Select your gender
              </option>

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
              placeholder="Enter the ID mentioned of selected ID proof"
              type="text"
              id="IDproof"
              size="sm"
              name="govID"
              {...register("govID")}
              // value={formData.govID}
              // onChange={handleInputChange}
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
              htmlFor="GSalutation"
              style={{ fontWeight: "400", fontSize: "17px", marginTop: "5px" }}
            >
              Gardian Details
            </Form.Label>
            <Form.Select id="GSalutation" size="sm">
              {" "}
              <option value="" selected disabled>
                Please Select
              </option>
              <option value="1">Mr</option>
              <option value="2">Mrs</option>
            </Form.Select>
          </Col>

          <Col xs={6} md={3}>
            <Form.Label
              htmlFor="GName"
              style={{ fontWeight: "400", fontSize: "17px", marginTop: "5px" }}
            >
              Gardian Name
            </Form.Label>
            <Form.Control
              placeholder="Enter the name of gaurdian"
              type="Name"
              id="GName"
              size="sm"
              name="gname"
              {...register("gname")}
              // value={formData.gname}
              // onChange={handleInputChange}
            />
          </Col>

          <Col xs={6} md={3}>
            <Form.Label
              htmlFor="gemail"
              style={{ fontWeight: "400", fontSize: "17px", marginTop: "5px" }}
            >
              Gardian Email
            </Form.Label>
            <Form.Control
              placeholder="Enter the gaurdian email"
              type="email"
              id="gemail"
              size="sm"
              name="email"
              {...register("email")}
              // value={formData.email}
              // onChange={handleInputChange}
            />
          </Col>
          <Col xs={6} md={3}>
            <Form.Label
              htmlFor="Econtact"
              style={{ fontWeight: "400", fontSize: "17px", marginTop: "5px" }}
            >
              Emergency Contact Number
            </Form.Label>
            <Form.Control
              placeholder="Enter the Emergency contact number"
              type="text"
              id="Econtact"
              size="sm"
              name="emergencycontact"
              {...register("emergencycontact")}
              // value={formData.emergencycontact}
              // onChange={handleInputChange}
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
              placeholder="Enter your Address"
              type="text"
              id="Address"
              size="sm"
              name="address"
              {...register("address")}
              // value={formData.address}
              // onChange={handleInputChange}
            />
            <Form.Label
              htmlFor="Country"
              style={{ fontWeight: "400", fontSize: "17px", marginTop: "15px" }}
            >
              Country
            </Form.Label>

            <Form.Select
              id="Country"
              size="sm"
              name="country"
              {...register("country")}
              // value={formData.country}
              placeholder="Select your Country"
              onChange={(e) => handleCountry(e)}
            >
              <option value="" selected disabled>
                Select your country
              </option>
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
              placeholder="Select a State"
              id="State"
              size="sm"
              name="state"
              {...register("state")}
              // value={formData.state}
              // onChange={handleInputChange}
              onChange={(e) => {
                handleStateChange(e);
              }}
            >
              <option value="" selected disabled>
                Select your State after selecting country
              </option>
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
              placeholder="Enter your pincode"
              type="text"
              id="Pincode"
              size="sm"
              name="pincode"
              {...register("pincode")}
              // value={formData.pincode}
              // onChange={handleInputChange}
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
              placeholder="Select your City"
              id="City"
              size="sm"
              name="city"
              {...register("city")}
              // value={formData.city}
              // onChange={handleInputChange}
            >
              <option value="" selected disabled>
                Select your City after selecting State
              </option>
              {city.map((obj) => (
                <option value={obj.city_name}>{obj.city_name}</option>
              ))}
            </Form.Select>
          </Col>
          {/* Other Details */}
          <h5
            style={{ fontWeight: "600", fontSize: "17px", marginTop: "20px" }}
          >
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
              placeholder="Enter your occupation"
              type="text"
              id="Occupation"
              size="sm"
              name="occupation"
              {...register("occupation")}
              // value={formData.occupation}
              // onChange={handleInputChange}
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
              placeholder="Select your religion"
              id="Religion"
              size="sm"
              name="religion"
              {...register("religion")}
              // value={formData.religion}
              // onChange={handleInputChange}
            >
              <option value="" selected disabled>
                Select your Religion
              </option>
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
              placeholder="Select your Marital Status"
              id="Marital"
              size="sm"
              name="maritalstatus"
              {...register("maritalstatus")}
              // value={formData.maritalstatus}
              // onChange={handleInputChange}
            >
              <option value="" selected disabled>
                Select your Marital Status
              </option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Other">Other</option>
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
              placeholder="Select your Blood Group"
              id="BloodGroup"
              size="sm"
              name="bloodgroup"
              {...register("bloodgroup")}
              // value={formData.bloodgroup}
              // onChange={handleInputChange}
            >
              <option value="" selected disabled>
                Select your Blood Group
              </option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
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
              placeholder="Enter your Nationality"
              type="text"
              id="Nationality"
              size="sm"
              name="nationality"
              {...register("nationality")}
              // value={formData.nationality}
              // onChange={handleInputChange}
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
            type="submit"
            style={{
              margin: "10px",
            }}
            variant="success"
          >
            Submit
          </Button>{" "}
        </Container>
      </form>
    </Container>
  );
};

export default UserRegistration;
