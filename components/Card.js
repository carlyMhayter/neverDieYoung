import React from "react";
import Button from "components/Button";

export default function Card(props) {
  const {
    orientation,
    empText,
    minEmpText,
    minorText,
    buttonLinkName,
    buttonText,
    imgId,
    scroll,
  } = { ...props };
  return (
    <div className={`tile ${orientation}`}>
      {orientation === "left" && (
        <div id={imgId} className="img-tile inner-tile" />
      )}
      <div className="text-tile inner-tile">
        <p className="text-tile-text-emp">{empText}</p>
        {minEmpText && <p className="member-info">{minEmpText}</p>}
        {scroll && (
          <img src="/ndy-scroll.svg" id="scroll-1" className="scroll-img" />
        )}
        <p className="text-tile-text-minor">{minorText}</p>
        {buttonText.length > 0 && (
          <Button onClick={() => router.push({ buttonLinkName })}>
            - {buttonText}-
          </Button>
        )}
      </div>
      {orientation === "right" && (
        <div id={imgId} className="img-tile inner-tile" />
      )}
    </div>
  );
}
