import { useState } from "react";

import { v4 as uuid } from "uuid";

import "../styles/admin.css";

function Admin() {

  const [title, setTitle] = useState("");

  const [text, setText] = useState("");

  const [fullText, setFullText] = useState("");

  const [media, setMedia] = useState("");

  const [mediaType, setMediaType] =
    useState("");

  const [editingId, setEditingId] =
    useState(null);

  const [posts, setPosts] = useState(

    JSON.parse(localStorage.getItem("posts")) || []

  );

  const handleMedia = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {

      setMedia(reader.result);

      if (
        file.type.startsWith("video")
      ) {

        setMediaType("video");

      } else {

        setMediaType("image");

      }

    };

    reader.readAsDataURL(file);

  };

  const clearForm = () => {

    setTitle("");

    setText("");

    setFullText("");

    setMedia("");

    setMediaType("");

    setEditingId(null);

  };

  const savePosts = (updatedPosts) => {

    setPosts(updatedPosts);

    localStorage.setItem(
      "posts",
      JSON.stringify(updatedPosts)
    );

  };

  const publishPost = () => {

    if (
      !title ||
      !text ||
      !fullText ||
      !media
    ) {
      return;
    }

    if (editingId) {

      const updatedPosts =
        posts.map((post) =>

          post.id === editingId

            ? {
                ...post,
                title,
                text,
                fullText,
                media,
                mediaType
              }

            : post

        );

      savePosts(updatedPosts);

    } else {

      const newPost = {

        id: uuid(),

        title,

        text,

        fullText,

        media,

        mediaType,

        date:
          new Date().toLocaleDateString()

      };

      const updatedPosts = [
        newPost,
        ...posts
      ];

      savePosts(updatedPosts);

    }

    clearForm();

  };

  const deletePost = (id) => {

    const updatedPosts =
      posts.filter((post) => post.id !== id);

    savePosts(updatedPosts);

  };

  const editPost = (post) => {

    setTitle(post.title);

    setText(post.text);

    setFullText(post.fullText);

    setMedia(post.media);

    setMediaType(post.mediaType);

    setEditingId(post.id);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  };

  return (

    <section className="admin_page">

      <div className="admin_form">

        <h1>
          Panel de contenido
        </h1>

        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <textarea
          placeholder="Texto corto"
          value={text}
          onChange={(e) =>
            setText(e.target.value)
          }
        />

        <textarea
          placeholder="Contenido completo"
          value={fullText}
          onChange={(e) =>
            setFullText(e.target.value)
          }
        />

        <input
          type="file"
          accept="image/*,video/*"
          onChange={handleMedia}
        />

        {

          media && mediaType === "image" && (

            <img
              src={media}
              alt=""
              className="preview_image"
            />

          )

        }

        {

          media && mediaType === "video" && (

            <video
              src={media}
              controls
              className="preview_image"
            />

          )

        }

        <button onClick={publishPost}>

          {
            editingId
              ? "Actualizar"
              : "Publicar"
          }

        </button>

      </div>

      <div className="admin_posts">

        <h2>
          Contenidos publicados
        </h2>

        {

          posts.map((post) => (

            <div
              className="admin_post_card"
              key={post.id}
            >

              {

                post.mediaType === "video"

                  ? (

                    <video
                    src={post.media}
                    controls
                    className="admin_video"
                    />

                  )

                  : (

                    <img
                      src={post.media}
                      alt=""
                    />

                  )

              }

              <div>

                <h3>
                  {post.title}
                </h3>

                <p>
                  {post.text}
                </p>

              </div>

              <div className="admin_actions">

                <button
                  className="edit_btn"

                  onClick={() =>
                    editPost(post)
                  }
                >

                  Editar

                </button>

                <button
                  className="delete_btn"

                  onClick={() =>
                    deletePost(post.id)
                  }
                >

                  Eliminar

                </button>

              </div>

            </div>

          ))

        }

      </div>

    </section>

  );
}

export default Admin;