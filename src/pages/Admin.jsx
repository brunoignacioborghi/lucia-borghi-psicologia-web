import {
  useEffect,
  useState
}

from "react";

import axios from "axios";

import { motion }
from "framer-motion";

import "../styles/admin.css";

import Loader from "../components/Loader";

function Admin() {

  const [title, setTitle] =
    useState("");

  const [text, setText] =
    useState("");

  const [fullText, setFullText] =
    useState("");

  const [media, setMedia] =
    useState("");

  const [mediaType, setMediaType] =
    useState("");

  const [editingId, setEditingId] =
    useState(null);

  const [posts, setPosts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  /* LOAD POSTS */

  useEffect(() => {

    fetchPosts();

  }, []);

  const fetchPosts = async () => {

    try {

      const res = await axios.get(
        "https://lucia-borghi-web.onrender.com/posts"
      );

      setPosts(res.data);

      setLoading(false);

    } catch (err) {

      console.log(err);

      setLoading(false);

    }

  };

  /* HANDLE MEDIA */

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

  /* CLEAR FORM */

  const clearForm = () => {

    setTitle("");

    setText("");

    setFullText("");

    setMedia("");

    setMediaType("");

    setEditingId(null);

  };

  /* CREATE / UPDATE */

  const publishPost = async () => {

    if (
      !title ||
      !text ||
      !fullText
    ) {
      return;
    }

    try {

      if (editingId) {

        await axios.put(

          `https://lucia-borghi-web.onrender.com/posts/${editingId}`,

          {
            title,
            text,
            fullText,
            media,
            mediaType
          }

        );

      } else {

        await axios.post(

          "https://lucia-borghi-web.onrender.com/posts",

          {
            title,
            text,
            fullText,
            media,
            mediaType,

            date:
              new Date().toLocaleDateString()
          }

        );

      }

      fetchPosts();

      clearForm();

    } catch (err) {

      console.log(err);

    }

  };

  /* DELETE */

  const deletePost = async (id) => {

    try {

      await axios.delete(
        `https://lucia-borghi-web.onrender.com/posts/${id}`
      );

      fetchPosts();

    } catch (err) {

      console.log(err);

    }

  };

  /* EDIT */

  const editPost = (post) => {

    setTitle(post.title);

    setText(post.text);

    setFullText(post.fullText);

    setMedia(post.media);

    setMediaType(post.mediaType);

    setEditingId(post._id);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  };

  if (loading) {

    return <Loader />;

  }

  return (

    <section className="admin_page">

      <motion.div

        className="admin_form"

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

        <label className="custom_file_upload">

          Seleccionar archivo

          <input
            type="file"
            accept="image/*,video/*"
            onChange={handleMedia}
          />

        </label>

        {

          media &&
          mediaType === "image" && (

            <img
              src={media}
              alt=""
              className="preview_image"
            />

          )

        }

        {

          media &&
          mediaType === "video" && (

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

      </motion.div>

      <div className="admin_posts">

        <h2>
          Contenidos publicados
        </h2>

        {

          posts.map((post, index) => (

            <motion.div

              className="admin_post_card"

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
                delay: index * 0.1
              }}
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
                    deletePost(post._id)
                  }
                >

                  Eliminar

                </button>

              </div>

            </motion.div>

          ))

        }

      </div>

    </section>

  );
}

export default Admin;