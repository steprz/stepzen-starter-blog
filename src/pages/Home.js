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
      <div className="h-screen lg:flex justify-between py-20 px-10 bg-indigo-100 text-indigo-100">
        <div className="md:w-1 mb-10 md:mb-0">
          <h2 className="text-2xl md:text-4xl lg:text-6xl text-indigo-900 mb-6 shadow-2xs">
            Posts
          </h2>
          <ul>
            {data?.getPosts?.map((post) => (
              <li className="text text-indigo-500">
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
