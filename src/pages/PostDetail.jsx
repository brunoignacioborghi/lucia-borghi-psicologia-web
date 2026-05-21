import {
  useEffect,
  useState
}

from "react";

import axios from "axios";

import {
  useParams
}

from "react-router-dom";

import "../styles/postdetail.css";

import Loader from "../components/Loader";

function PostDetail() {

  const { id } = useParams();

  const [post, setPost] =
    useState(null);

  useEffect(() => {

    axios.get(
      "https://lucia-borghi-web.onrender.com/posts"
    )

    .then((res) => {

      const foundPost =
        res.data.find(

          (p) =>

            String(p._id) ===
            String(id)

        );

      setPost(foundPost);

    });

  }, [id]);

  if (!post) {

  return <Loader />;

}

  return (

    <section className="post_detail">

      {

        post.mediaType === "video"

          ? (

            <video
              src={post.media}
              controls
              className="post_media"
            />

          )

          : (

            <img
              src={post.media}
              alt=""
            />

          )

      }

      <small>
        {post.date}
      </small>

      <h1>
        {post.title}
      </h1>

      <p>
        {post.fullText}
      </p>

    </section>

  );
}

export default PostDetail;