import proxyAgent from "https-proxy-agent";
import { useRouter } from "next/router";
import Container from "../../components/Contrainer";

const User = ({user}) => {
  const router = useRouter();
  const { id } = router.query;

  return (
      <Container>
          <div className="row">
              <div className="col-md-6 offset-md-3">
                  <div className="card">
                      <div className="card-header text-center">
                          <img src={user.avatar} alt="" style={{borderRadius:'50%'}}/>
                      </div>
                      <div className="card-body text-center">
                          <h3>
                              {user.id}. {user.first_name} {user.last_name}
                          </h3>
                          <p>Email: {user.email}</p>
                      </div>
                  </div>
              </div>
          </div>
      </Container>
  );
};

User.getInitialProps = async (ctx) => {
  const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`, {
    agent: new proxyAgent("http://192.168.30.120:3128"),
  });
  const resJSON = await res.json();
  return {user: resJSON.data};
};

export default User;
