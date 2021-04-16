import { Link } from 'react-router-dom';
import React from 'react';
import { useQuery } from '@apollo/client';
import '../index.css';
import Layout from '../components/Layout';

import { GET_POSTS } from '../queries/posts.queries';

const Home = () => {
  const { data, loading, error } = useQuery(GET_POSTS);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <Layout>
      <div id="top" className="page" role="document">
        <header>
          <h2>Posts</h2>
        </header>
        <main role="main">
          <ul className="posts">
            {data?.getPosts?.map((post) => (
              <li className="tile" key={`homepage_post_${post.id}`}>
                <img
                  src="https://homepages.cae.wisc.edu/~ece533/images/arctichare.png"
                  alt="arctichare"
                />
                <Link to={`/posts/${post.id}`} className="a">
                  <h2>{post.title}</h2>
                </Link>
                Author:
                <Link to={`${post.authorLink}`} className="a">
                  {post.author.name}{' '}
                </Link>
                <p>Post Id: {post.id}</p>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </Layout>
  );
};

export default Home;
