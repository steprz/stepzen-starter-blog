import { React } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import Layout from "../components/Layout";

import { GET_POST_BY_ID } from "../queries/posts.queries";

function Post() {
    const { postId } = useParams();
    const { data, loading, error } = useQuery(GET_POST_BY_ID, {
        variables: {
            id: postId,
        },
    });

    const post = data?.getPostById;

    console.log(post);

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        // You can render any custom fallback UI
        return <h1>{error.message}</h1>;
    }

    return (
        <Layout>
            <div className="post-page">
                <img
                    src={post.featuredImage.source_url}
                    alt={post.featuredImage.slug}
                />
                <div>
                    <div>
                        <div>
                            <a href="#">Travel</a>, <a href="#">Culture</a>
                            <h1 href="#">{post.title}</h1>
                            <p>
                                Written By:{" "}
                                <a href={post.authorUrl}>{post.authorName}</a>
                            </p>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: post.content,
                                }}
                            ></div>
                            <a href="#">#Culture</a>, <a href="#">#Travel</a>,{" "}
                            <a href="#">#Society</a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Post;
