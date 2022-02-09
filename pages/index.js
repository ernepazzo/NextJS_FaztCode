import fetch from "isomorphic-fetch";
import proxyAgent from "https-proxy-agent";
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
        <Users users={props.users} />
      </Container>
    </div>
  );
};

Index.getInitialProps = async (ctx) => {;
  const res = await fetch("https://reqres.in/api/users", {
    agent: new proxyAgent("http://192.168.30.120:3128"),
  });
  const resJSON = await res.json();
  return {users: resJSON.data};
};

export default Index;
