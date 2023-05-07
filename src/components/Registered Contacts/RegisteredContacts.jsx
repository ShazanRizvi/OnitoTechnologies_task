import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import DataTable from "react-data-table-component";
import formContext from "../../context/FormContext/FormContext";

const RegisteredContacts = () => {
  const { getUser, user } = useContext(formContext);
  const[search,setSearch]=useState("");
  const[filteredData, setFilteredData]=useState([]);

  useEffect(() => {
    getUser();
    setFilteredData(user);
  }, []);
  const ExpandedComponent = ({ data }) => (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Date of Birth",
      selector: (row) => row.dob,
      sortable: true,
    },
    {
      name: "Gender",
      selector: (row) => row.sex,
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row) => row.mobile,
      sortable: true,
    },
    {
      name: "Government ID",
      selector: (row) => row.govID,
      sortable: true,
    },
    {
      name: "Gaurdian Name",
      selector: (row) => row.gname,
      sortable: true,
    },
    {
      name: "Gaurdian email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Emergency Contact",
      selector: (row) => row.emergencycontact,
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name: "Country",
      selector: (row) => row.country,
      sortable: true,
    },
    {
      name: "State",
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "Pincode",
      selector: (row) => row.pincode,
      sortable: true,
    },
    {
      name: "Nationality",
      selector: (row) => row.nationality,
      sortable: true,
    },
  ];
  const data = filteredData;

  useEffect(()=>{
    const result = user.filter((user)=>{
      return user.name.toLowerCase().match(search.toLowerCase());
    })
    setFilteredData(result)


  },[search])
  return (
    <>
      <Container style={{ marginTop: "20px" }}>
        <h4 style={{ fontWeight: "600" }}>All Registered Users</h4>
        <DataTable
          columns={columns}
          data={data}
          selectableRows
          pagination
          dense
          expandableRowsComponent={ExpandedComponent}
          highlightOnHover
          selectableRowsHighlight
          subHeader
          subHeaderComponent={
            <input
              className="form-control w-25"
              type="text"
              placeholder="Search by user name"
              size="sm"
              value={search}
              onChange={(e)=>{setSearch(e.target.value)}}
            />
          }
        />
      </Container>
    </>
  );
};

export default RegisteredContacts;
