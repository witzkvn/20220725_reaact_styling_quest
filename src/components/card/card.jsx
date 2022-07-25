import React from "react";
import styles from "./card.module.css";
import { MdStarBorder } from "react-icons/md";
import PropTypes from "prop-types";

const Card = ({ title, artist, year, imageUrl }) => {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <div className={styles.imageContainer}>
          <img src={imageUrl} alt={title} />
        </div>
        <div className={styles.infos}>
          <h1 className={styles.title}>{title}</h1>
          <p>{artist}</p>
          <p>({year})</p>
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <p>Rate this album</p>
        <div className={styles.stars}>
          <MdStarBorder className={styles.star} />
          <MdStarBorder className={styles.star} />
          <MdStarBorder className={styles.star} />
          <MdStarBorder className={styles.star} />
          <MdStarBorder className={styles.star} />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  artist: PropTypes.string,
  year: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default Card;
