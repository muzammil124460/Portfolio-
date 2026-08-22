import { useEffect, useState } from "react";
import { Element } from "react-scroll";
import img1 from "../imgs/icons8-add-50 (1).png";
import img2 from "../imgs/Backend Development.png"
import img3 from "../imgs/python certificate.png"
import img4 from "../imgs/SQL MySQL.png"

import { motion, AnimatePresence } from "framer-motion";

export const Five = () => {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [heading, setHeading] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [showwarn, setwarn] = useState(false);

  const refreshed = async () => {
    try {
      const res = await fetch("http://localhost:8000/Users");
      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    refreshed();
  }, []);

  const toggleForm = () => {
    setwarn(!showwarn)
    setImage(null);
    setFile(null);
    setHeading("");
    setParagraph("");
  };

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setImage(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !heading || !paragraph) {
      alert("All fields are required!");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", heading);
    formData.append("paragraph", paragraph);

    try {
      await fetch("http://localhost:8000/postDATA", {
        method: "POST",
        body: formData,
      });

      refreshed();
      setImage(null);
      setFile(null);
      setHeading("");
      setParagraph("");
      setShowForm(false);
      setwarn(false);
    } catch (error) {
      console.error("Upload Error:", error);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-screen min-h-screen bg-gradient-to-b from-gray-950 to-green-500 p-5 overflow-hidden"
    >
      <div className="w-full flex flex-col md:flex-row justify-between md:justify-around items-center mb-12 gap-4">
        <Element name="Blog">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="md:text-5xl text-3xl text-center font-semibold bg-gradient-to-b from-green-400 to-gray-700 text-transparent bg-clip-text"
          >
            Blogs
          </motion.h1>
        </Element>

        <motion.div
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          onClick={toggleForm}
          className="px-6 py-2 bg-green-600 flex items-center rounded-md cursor-pointer hover:bg-green-700 shadow-md"
        >
          <img className="w-5 h-5 mr-2" src={img1} alt="Add" />
          <p className="text-white font-medium">{showForm ? "Cancel" : "Add Blog"}</p>
        </motion.div>
      </div>

      <motion.div
        className="flex overflow-x-auto gap-6 px-2 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <motion.div
              key={index}
              className="snap-center min-w-[300px] md:min-w-0 w-full max-w-sm bg-gray-800 text-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                className="w-full h-52 object-cover"
                src={blog.image ? `http://localhost:8000/uploads/${blog.image}` : "https://via.placeholder.com/300x200"}
                alt={blog.name}
              />
              <div className="p-4 flex flex-col justify-between h-48">
                <h1 className="text-lg font-bold text-green-400 mb-2 text-center line-clamp-1">
                  {blog.name}
                </h1>
                <p className="text-sm text-gray-300 text-center line-clamp-3">
                  {blog.paragraph}
                </p>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-white col-span-full text-center">No blogs yet.</p>
        )}
      </motion.div>


      <AnimatePresence>
        {showwarn && (
          <motion.div
            className="flex relative items-center justify-center mt-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-md w-96 flex flex-col gap-4"
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="border p-2 rounded-md"
              />
              <input
                type="text"
                placeholder="Enter heading"
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
                className="border p-2 rounded-md"
              />
              <textarea
                placeholder="Enter paragraph (max 150 characters)"
                value={paragraph}
                onChange={(e) =>
                  e.target.value.length <= 150 && setParagraph(e.target.value)
                }
                className="border p-2 rounded-md resize-none"
                rows="3"
              />
              <p className="text-right text-sm text-gray-500">{paragraph.length}/150</p>
              <button type="submit" className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600">
                Submit
              </button>
              <button
                type="button"
                onClick={() => setwarn(false)}
                className="bg-gray-400 text-white p-2 rounded-md hover:bg-gray-500"
              >
                Cancel
              </button>
              {image && (
                <div className="mt-4 text-center">
                  <img
                    src={image}
                    alt="Preview"
                    className="h-40 w-full object-cover rounded-md mb-2"
                  />
                  <h2 className="text-xl font-bold">{heading}</h2>
                  <p>{paragraph}</p>
                </div>
              )}
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};
