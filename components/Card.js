import React from 'react';
import Button from 'components/Button';
import { useRouter } from 'next/router';
import styles from "styles/component-styles/Card.module.scss";

export default function Card(props) {
  const {
    orientation,
    empText,
    minEmpText,
    minorText,
    buttonLinkName,
    buttonText,
    imgId,
    imgAlt,
    scroll,
  } = { ...props };

  const router = useRouter();

  return (
    <div className={`${styles.tile} ${orientation} ${styles.aboutcards}`}>
      {orientation === 'left' && (
        <div id={imgId} className={`${styles.img} ${styles.inner}`} />
      )}
      <div className={`${styles.text} ${styles.inner} ${styles.abouttext}`} >
        <p className={styles.textemp}>{empText}</p>
        {minEmpText && <p className={styles.memberinfo}>{minEmpText}</p>}
        {scroll && (
          <img
            src="/ndy-scroll.svg"
            id="scroll-1"
            className={styles.scrollimg}
            alt=""
          />
        )}
        <p className={styles.textminor}>{minorText}</p>
        {buttonText.length > 0 && (
          <Button onClick={() => router.push({ buttonLinkName })}>
            - {buttonText}-
          </Button>
        )}
      </div>
      {orientation === 'right' && (
        <div
          id={imgId}
          className={`${styles.img} ${styles.inner} `}
          alt={imgAlt}
        />
      )}
    </div>
  );
}
