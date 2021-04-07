import { React } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import Layout from "../components/Layout";

import { GET_POST_BY_ID } from "../queries/posts.queries";

function Post() {
  const { postId } = useParams();
  const { data, error, loading } = useQuery(GET_POST_BY_ID, {
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
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
        <div
          className="bg-cover h-64 text-center overflow-hidden"
          style={{
            height: "450px",
            "background-image": `url('${post.image}')`,
          }}
          title={post.title}
        ></div>
        <div className="max-w-2xl mx-auto">
          <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="">
              <a
                href="#"
                className="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                Election
              </a>
              ,{" "}
              <a
                href="#"
                className="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                Politics
              </a>
              <h1 href="#" className="text-gray-900 font-bold text-3xl mb-2">
                {post.title}
              </h1>
              <p className="text-gray-700 text-xs mt-2">
                Written By:{" "}
                <a
                  href="#"
                  className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                >
                  Ahmad Sultani
                </a>
              </p>
              <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
              <a
                href="#"
                className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                #Election
              </a>
              ,{" "}
              <a
                href="#"
                className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                #people
              </a>
              ,{" "}
              <a
                href="#"
                className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                #Election2020
              </a>
              ,{" "}
              <a
                href="#"
                className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                #trump
              </a>
              ,
              <a
                href="#"
                className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
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
