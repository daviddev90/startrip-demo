import React from 'react';
import '../../node_modules/react-image-gallery/styles/scss/image-gallery.scss';
import ImageGallery from 'react-image-gallery';
import database from '../firebase/firebase';

class StoryBoard extends React.Component {
  state = {
    stories: []
  };

  componentDidMount = () => {
    database
      .ref('stories')
      .once('value')
      .then((snap) => {
        const stories = snap.val();
        this.setState({
          stories: stories
        });
      });
  };

  handleImgClick = (e) => {
    const imageIndex =
      e.target.parentElement.parentElement
        .getAttribute('aria-label')
        .split('Go to Slide ')[1] *
        1 -
      1;

    location.href = this.state.stories[imageIndex].linkTo;
  };
  render() {
    return (
      <ImageGallery
        items={this.state.stories}
        showNav={false}
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
        autoPlay={true}
        showBullets={true}
        onClick={this.handleImgClick}
      />
    );
  }
}

export default StoryBoard;
