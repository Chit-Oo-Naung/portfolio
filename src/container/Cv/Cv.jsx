import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from '../../constants';

import "./Cv.scss";

const Cv = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <div>
        <h2 className="head-text">
          {" "}
          Download <span>CV</span>
        </h2>
      </div>

      <div>
        <a href={images.cvform} dwonload="Mr. Chit Oo Naung CV" target="_blank" rel="noreferrer">
        <button type="button" className="p-text">
          <span style={{ color: '#fff' }}>Download</span>
        </button>
        </a>
      </div>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

// export default AppWrap(MotionWrap(Cv, "app__about"), "cv", "app__whitebg");
export default AppWrap(
  MotionWrap(Cv, 'app__about'),
  'cv',
  'app__whitebg',
);