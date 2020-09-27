import React from 'react';
import { Link } from 'react-router-dom';

const PlaceBox = ({ id, imgSrc, name, description, address, pin }) => (
  <div className="placebox">
    <Link to={`/place/${id}`} style={{ textDecoration: 'none' }}>
      <div className="placebox">
        <img className="placebox__img" src={imgSrc} />
        <div className="placebox__contents">
          <h3 className="placebox__name">{name}</h3>
          <p className="placebox__description">{description}</p>
          <p className="placebox__address">{address}</p>
          <p className="placebox__pin">{`${pin}개의 핀`}</p>
        </div>
      </div>
    </Link>
  </div>
);

export default PlaceBox;
