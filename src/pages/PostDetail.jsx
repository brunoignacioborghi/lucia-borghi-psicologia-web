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

function PostDetail() {

  const { id } = useParams();

  const [post, setPost] =
    useState(null);

  useEffect(() => {

    axios.get(
      "https://render.com/docs/web-services#port-binding/posts"
    )

    .then((res) => {

      const foundPost =
        res.data.find(
          (p) => p._id === id
        );

      setPost(foundPost);

    });

  }, [id]);

  if (!post) {

    return (
      <h1>
        Post no encontrado
      </h1>
    );

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