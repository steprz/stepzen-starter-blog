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
          title={post.title}
        ></div>
        <img src="https://images.unsplash.com/photo-1611095971113-9f7542655338?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3151&q=80" alt="blog image placemark"/>
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
