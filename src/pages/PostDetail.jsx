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

import { motion }
from "framer-motion";

import "../styles/postdetail.css";

function PostDetail() {

  const { id } = useParams();

  const [post, setPost] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    axios.get(
      `https://lucia-borghi-web.onrender.com/posts/${id}`
    )

    .then((res) => {

      setPost(res.data);

      setLoading(false);

    })

    .catch(() => {

      setLoading(false);

    });

  }, [id]);

  if (loading) {

    return (

      <div className="loader_container">

        <div className="loader_circle"></div>

        <p>
          cargando contenido...
        </p>

      </div>

    );

  }

  if (!post) {

    return (
      <h1>
        Post no encontrado
      </h1>
    );

  }

  return (

    <motion.section

      className="post_detail"

      initial={{
        opacity: 0,
        y: 40
      }}

      animate={{
        opacity: 1,
        y: 0
      }}

      transition={{
        duration: 0.8
      }}
    >

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

    </motion.section>

  );
}

export default PostDetail;