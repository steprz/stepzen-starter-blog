import { Link } from "react-router-dom";
import React from "react";
import { useQuery } from "@apollo/client";

import Layout from "../components/Layout";

import { GET_POSTS } from "../queries/posts.queries";

const Home = () => {
  const { data, loading, error } = useQuery(GET_POSTS);


  return (
    //hero
    <Layout>
      <div>
        <div>
          <h2>
            Posts
          </h2>
          <ul>
            {data?.getPosts?.map((post) => (
              <li>
                <Link to={`/posts/${post.id}`}>
                  <h2>{post.title}</h2>
                  <pre>{JSON.stringify(post, null, 2)}</pre>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
