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