import { useParams } from "react-router-dom";

import "../styles/postdetail.css";

function PostDetail() {

  const { id } = useParams();

  const posts =
    JSON.parse(localStorage.getItem("posts")) || [];

  const post =
    posts.find((p) => p.id === id);

  if (!post) {
    return <h1>Post no encontrado</h1>;
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