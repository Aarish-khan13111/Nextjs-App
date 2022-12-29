const axios = require("axios");
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import Router, { useRouter } from "next/router";
import React, { useState } from "react";

const addNewHero = () => {
  const [form, setForm] = useState({
    superHero: "",
    realName: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios("http://localhost:3000/api/hero", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(form),
      });
      Router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container ">
      <h1 className="display-4 text-center"> Add a new hero Identity</h1>
      <form
        className="container"
        style={{ maxWidth: "45rem" }}
        onSubmit={handleForm}>
        <MDBInput
          onChange={handleChange}
          label="SuperHero"
          type="text"
          name="superHero"
        />
        <MDBInput
          className="my-3"
          onChange={handleChange}
          label="realName"
          type="text"
          name="realName"
        />
        <MDBBtn type="submit">Add New Hero</MDBBtn>
      </form>
    </div>
  );
};

export default addNewHero;
