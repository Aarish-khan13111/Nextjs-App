import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import Link from "next/link";
import { useRouter } from "next/router";

const axios = require("axios");

const EachHero = ({ heros }) => {
  const router = useRouter();
  const heroId = router.query.id;

  const deleteHero = async () => {
    try {
      const deleteHero = await axios(
        `http://localhost:3000/api/hero/${heroId}`,
        {
          method: "DELETE",
        }
      );
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <MDBCard className="border border-2 my-2" style={{ maxWidth: "22rem" }}>
        <MDBCardBody>
          <MDBCardTitle>{heros.superHero}</MDBCardTitle>
          <MDBCardText>{heros.realName}</MDBCardText>
          <MDBBtn onClick={deleteHero} className="btn btn-danger">
            Delet Hero
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
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

export default EachHero;
