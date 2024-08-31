import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../components/CatImage/styles.module.css";

function CatImage() {
  const [imageUrl, setImageUrl] = useState("");

  const fetchCatImage = async () => {
    try {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search"
      );
      setImageUrl(response.data[0].url);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCatImage();
  }, []);

  return (
    <div className={styles.catContainer}>
      <h2>Random Cat</h2>
      <img src={imageUrl} alt="cat" className={styles.catImage} />
      <button onClick={fetchCatImage}>New Image</button>
    </div>
  );
}

export default CatImage;
