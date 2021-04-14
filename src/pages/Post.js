import { React } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import Layout from "../components/Layout";

import { GET_POST_BY_ID } from "../queries/posts.queries";

function Post() {
  const { postId } = useParams();
  const { data, loading } = useQuery(GET_POST_BY_ID, {
    variables: {
      id: postId,
    },
  });

  const post = data?.getPostById;

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Layout>
      <div>
        <div
          style={{
            height: "450px",
            "background-image": `url(http://placekitten.com/200/100)`,
          }}
          title={post.title}
        ></div>
        <div>
          <div>
            <div>
              <a
                href="#"
              >
                Election
              </a>
              ,{" "}
              <a
                href="#"
              >
                Politics
              </a>
              <h1 href="#">
                {post.title}
              </h1>
              <p>
                Written By:{" "}
                <a
                  href="#"
               
                >
                  Ahmad Sultani
                </a>
              </p>
              <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
              <a
                href="#"
 
              >
                #Election
              </a>
              ,{" "}
              <a
                href="#"
              >
                #people
              </a>
              ,{" "}
              <a
                href="#"
              >
                #Election2020
              </a>
              ,{" "}
              <a
                href="#"
              >
                #trump
              </a>
              ,
              <a
                href="#"
              >
                #Joe
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Post;
