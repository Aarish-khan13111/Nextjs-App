const axios = require("axios");
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import Router, { useRouter } from "next/router";
import React, { useState } from "react";

const EditHero = ({ heros }) => {
  const router = useRouter();
  const heroId = router.query.id;

  const [form, setForm] = useState({
    superHero: heros.superHero,
    realName: heros.realName,
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
      const res = await axios(`http://localhost:3000/api/hero/${heroId}`, {
        method: "PUT",
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
          value={form.superHero}
        />
        <MDBInput
          className="my-3"
          onChange={handleChange}
          label="realName"
          type="text"
          name="realName"
          value={form.realName}
        />
        <MDBBtn type="submit">Edit Hero</MDBBtn>
      </form>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const id = params.id;
  const res = await axios(`http://localhost:3000/api/hero/${id}`);
  // console.log(res.data.hero);
  const { hero } = res.data;
  return {
    props: { heros: hero },
  };
}

export default EditHero;
