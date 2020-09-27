import React from 'react';
import PlaceBox from './PlaceBox';
import database from '../firebase/firebase';

class PlaceBoxs extends React.Component {
  state = {
    placeList: []
  };

  componentDidMount() {
    database
      .ref('placeList')
      .once('value')
      .then((snap) => {
        const placesObj = snap.val();
        const keyArr = Object.keys(placesObj);

        const placeList = keyArr.map((key) => {
          const place = placesObj[key];
          place.id = key;
          return place;
        });

        this.setState({
          placeList: placeList
        });
      });
  }

  render() {
    return (
      <div className="placeBoxs">
        {this.state.placeList.map((place) => (
          <PlaceBox key={place.id} {...place} />
        ))}
      </div>
    );
  }
}

export default PlaceBoxs;
