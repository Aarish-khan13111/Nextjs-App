import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import Link from "next/link";

const axios = require("axios");

const Index = ({ heros }) => {
  return (
    <div className="container">
      <div>
        <h1 className="display-2 text-center">Superhero Identity Manager</h1>
      </div>
      {heros.map((hero) => {
        return (
          <MDBCard
            className="border border-2 my-2"
            style={{ maxWidth: "22rem" }}>
            <MDBCardBody>
              <MDBCardTitle>{hero.superHero}</MDBCardTitle>
              <MDBCardText>Revel Identity</MDBCardText>
              <Link href={`/${hero._id}`}>
                <MDBBtn className="mx-2">View Hero</MDBBtn>
              </Link>
              <Link href={`/${hero._id}/edit`}>
                <MDBBtn>edit Hero</MDBBtn>
              </Link>
            </MDBCardBody>
          </MDBCard>
        );
      })}
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await axios("http://localhost:3000/api/hero");
  // console.log(res.data.hero);
  const { hero } = res.data;
  return {
    props: { heros: hero },
  };
}

export default Index;
