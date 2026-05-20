import { useEffect, useState }
from "react";

import axios from "axios";

import { Link }
from "react-router-dom";

import "../styles/blog.css";

function Blog() {

  const [posts, setPosts] =
    useState([]);

  useEffect(() => {

    axios.get(
      "http://localhost:5000/posts"
    )

    .then((res) => {

      setPosts(res.data);

    });

  }, []);

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

          posts.map((post) => (

            <article
              className="blog_card"
              key={post._id}
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

            </article>

          ))

        }

      </div>

    </section>

  );
}

export default Blog;