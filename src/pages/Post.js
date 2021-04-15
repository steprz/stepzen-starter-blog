import { React } from "react";
import { useParams, Link } from "react-router-dom";
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
                            <Link to="#">Travel</Link>,{" "}
                            <Link to="#">Culture</Link>
                            <h1 href="#">{post.title}</h1>
                            <p>
                                Written By:{" "}
                                <Link to={post.authorUrl}>
                                    {post.authorName}
                                </Link>
                            </p>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: post.content,
                                }}
                            ></div>
                            <Link to="#">#Culture</Link>,{" "}
                            <Link to="#">#Travel</Link>,{" "}
                            <Link to="#">#Society</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Post;
