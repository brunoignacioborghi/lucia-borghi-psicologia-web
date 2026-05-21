import {
  useEffect,
  useState
}

from "react";

import axios from "axios";

import { Link }
from "react-router-dom";

import { motion }
from "framer-motion";

import "../styles/blog.css";

function Blog() {

  const [posts, setPosts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    axios.get(
      "https://lucia-borghi-web.onrender.com/posts"
    )

    .then((res) => {

      setPosts(res.data);

      setLoading(false);

    })

    .catch(() => {

      setLoading(false);

    });

  }, []);

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

  return (

    <section className="blog_page">

      <div className="blog_header">

        <span>
          contenido psicológico
        </span>

        <h1>
          reflexiones y herramientas
          para tu bienestar
        </h1>

      </div>

      <div className="blog_grid">

        {

          posts.map((post, index) => (

            <motion.article

              className="blog_card"

              key={post._id}

              initial={{
                opacity: 0,
                y: 40
              }}

              animate={{
                opacity: 1,
                y: 0
              }}

              transition={{
                duration: 0.7,
                delay: index * 0.12
              }}
            >

              {

                post.mediaType === "video"

                  ? (

                    <video
                      src={post.media}
                      controls
                      className="blog_video"
                    />

                  )

                  : (

                    <img
                      src={post.media}
                      alt=""
                    />

                  )

              }

              <div className="blog_content">

                <small>
                  {post.date}
                </small>

                <h2>
                  {post.title}
                </h2>

                <p>
                  {post.text}
                </p>

                <Link
                  to={`/contenido/${post._id}`}
                >

                  <button>
                    Leer más
                  </button>

                </Link>

              </div>

            </motion.article>

          ))

        }

      </div>

    </section>

  );
}

export default Blog;