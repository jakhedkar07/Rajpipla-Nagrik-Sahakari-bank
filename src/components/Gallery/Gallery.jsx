import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import styles from './gallery.module.css';

const mediaItems = [
  './images/f.jpg',
  './images/st.jpg',
  './images/h.jpg',
  './images/uv.jpg',
  './images/k.jpg',
  './images/m.jpg',
  './images/l.jpg',
  './images/n.jpg',
  './images/ag.jpg',
  './images/s.jpg',
  './images/p.jpg',
  './images/q.jpg',
  './images/r.jpg',
  './images/t.jpg',
  './images/u.jpg',
  './images/y.jpg',
  './images/v.jpg',
  './images/w.jpg',
  './images/x.jpg',
  './images/z.jpg',
  './images/ba.jpg',
  './images/bb.jpg',
  './images/bc.jpg',
  './images/bd.jpg',
  './images/be.jpg',
  './images/bf.jpg',
  './images/bg.jpg',
  './images/bh.jpg',
  './images/11.jpg',
  './images/12.jpg',
  './images/13.jpg',
  './images/14.jpg',
  './images/15.jpg',
  './images/16.jpg',
  './images/17.jpg',
  './images/18.jpg',
  './images/video.mp4', // Add video file path
];

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const openMediaModal = (media) => {
    setSelectedMedia(media);
  };

  const closeMediaModal = () => {
    setSelectedMedia(null);
  };

  return (
    <>
      <div className={styles.body}>
        <div className={styles.h}>
          <ul className={styles.header}>
            <li>
              <h1>Media Gallery</h1>
            </li>
            <div className={styles.hh}>
              <Link to="/">
                <li>
                  <h4>Home</h4>
                </li>
              </Link>
              <li>
                <h4>/Media Gallery</h4>
              </li>
            </div>
          </ul>
        </div>
        <div className={styles.cover}>
          <div className={styles.list}>
            {mediaItems.map((media, index) => (
              <div className={styles.content} key={index} onClick={() => openMediaModal(media)}>
                {media.endsWith('.mp4') ? ( // Check if it's a video file
                  <video width="450px" height="250px" controls>
                    <source src={media} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img src={media} alt={`Media ${index + 1}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
   

<Modal
  isOpen={selectedMedia !== null}
  onRequestClose={closeMediaModal}
  contentLabel="Media Modal"
  style={{
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      maxWidth: '80%', // Adjust the desired width
      maxHeight: '80%', // Adjust the desired height
      inset: '10%', // Position within the viewport
      overflow: 'hidden',
    },
  }}
>
  <div className={styles.closeButton} onClick={closeMediaModal}>
    <span className={styles.closeIcon}>X</span>
  </div>
  {selectedMedia && selectedMedia.endsWith('.mp4') ? (
    <video width="100%" height="100%" controls>
      <source src={selectedMedia} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  ) : (
    <img src={selectedMedia} alt="Selected Media" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  )}
</Modal>



    </>
  );
};

export default Gallery;
