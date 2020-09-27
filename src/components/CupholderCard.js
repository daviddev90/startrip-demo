import React from 'react';

const CupholderCard = ({
  id,
  imgSrc,
  name,
  description,
  address,
  dateRng,
  specials,
  pin
}) => (
  <div className="cupholderCard">
    <img className="cupholderCard__img" src={imgSrc} />
    <div className="cupholderCard__contents">
      <h3 className="cupholderCard__name">{name}</h3>
      <p className="cupholderCard__description">#{description}</p>
      <p className="cupholderCard__address">{address}</p>
      <div className="cupholderCard__specialLine">
        <p className="cupholderCard__specialLine__smallTitle">기간</p>
        <p className="cupholderCard__specialLine__text">{dateRng}</p>
      </div>

      <div className="cupholderCard__specialLine">
        <p className="cupholderCard__specialLine__smallTitle">특전</p>
        <p className="cupholderCard__specialLine__text">{specials}</p>
      </div>
      <p className="cupholderCard__pin">{`${pin}개의 핀`}</p>
    </div>
  </div>
);

export default CupholderCard;
