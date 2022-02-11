import React from 'react';
import Button from 'components/Button';
import { useRouter } from 'next/router';

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
    <div className={`tile ${orientation} about-cards`}>
      {orientation === 'left' && (
        <div id={imgId} className="img-tile inner-tile about-img-tile" />
      )}
      <div className="text-tile inner-tile about-text-tile">
        <p className="text-tile-text-emp">{empText}</p>
        {minEmpText && <p className="member-info">{minEmpText}</p>}
        {scroll && (
          <img
            src="/ndy-scroll.svg"
            id="scroll-1"
            className="scroll-img"
            alt=""
          />
        )}
        <p className="text-tile-text-minor">{minorText}</p>
        {buttonText.length > 0 && (
          <Button onClick={() => router.push({ buttonLinkName })}>
            - {buttonText}-
          </Button>
        )}
      </div>
      {orientation === 'right' && (
        <div
          id={imgId}
          className="img-tile inner-tile about-img-tile"
          alt={imgAlt}
        />
      )}
    </div>
  );
}
