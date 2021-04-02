import { gql, useQuery } from "@apollo/client";

const GET_STEPZEN = gql`
  query MyHelloWorldQuery {
    wordpressPage(id: "15") {
      id
    }
  }
`;

function HelloWorld() {
  const { loading, error, data } = useQuery(GET_STEPZEN);

  if (error) return <p>{JSON.stringify(error)}</p>;
  if (loading) return <p>Loading ...</p>;
  console.log(data);
  return (
    <>
      <p>StepZen says: "{data.wordpressPage.id}"</p>
      <a
        className="App-link"
        href="https://stepzen.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn StepZen
      </a>
    </>
  );
}

export default HelloWorld;
