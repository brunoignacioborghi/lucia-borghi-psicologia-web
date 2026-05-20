import { Link } from "react-router-dom";

import "../styles/blog.css";

function Blog() {

  const posts =
    JSON.parse(localStorage.getItem("posts")) || [];

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

        {posts.map((post) => (

          <article
            className="blog_card"
            key={post.id}
          >

            {
            post.mediaType === "video"

                ? (

                <video
                    src={post.media}
                    controls
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
                to={`/contenido/${post.id}`}
              >

                <button>
                  Leer más
                </button>

              </Link>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Blog;