import { Link } from "react-router-dom";
import React from "react";
import { useQuery } from "@apollo/client";
import "../index.css"
import Layout from "../components/Layout";

import { GET_POSTS } from "../queries/posts.queries";

const Home = () => {
  const { data, loading, error } = useQuery(GET_POSTS);


  return (
    //hero
 
      <body>
        <div id="top" className="page" role="document">
        <header role="header">
      
          <h2>
            Posts
          </h2>
          </header>
          <main role="main">
          <ul>
            {data?.getPosts?.map((post) => (
              <li>
                <Link to={`/posts/${post.id}`} className="a">
                  <h2>{post.title}</h2>
                  {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
                </Link>
                Author:<Link to={`${post.authorLink}`} className="a">
                 {post.authorName} </Link>
               
               <p>
                 Post Id: {post.id}
               </p> 
              </li>
            ))}
          </ul>
          </main>
          </div>
      </body>
 
  );
};

export default Home;
