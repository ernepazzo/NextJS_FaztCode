import fetch from "isomorphic-fetch";
import Head from "next/head";
import Container from "../components/Contrainer";
import Users from "../components/Users";

const Index = (props) => {
  return (
    <div>
      <Container>
        <Head>
          <title>NextJS Proyect - Home</title>
        </Head>
        <h1>Next</h1>
        <Users users={props.users}/>
      </Container>
    </div>
  );
};

Index.getInitialProps = async (ctx) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return {users: data};
}

export default Index;
