import React, { Component,  } from 'react';

interface HouseUrbanization{
    constructionStarted: string;
}

class HouseUrbanization extends Component<{}, HouseUrbanization> {
    constructor(props:{}) {
        super(props);
        this.state = {
          constructionStarted: 'Property',
        };
}
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({ constructionStarted: 'Construction Started' });
    }, 2000);
  }

  componentDidUpdate() {
    
    if (this.state.constructionStarted === 'Construction Started') {
      setTimeout(() => {
        this.setState({ constructionStarted: 'Living Room' });
      }, 2000);
    } else if (this.state.constructionStarted === 'Living Room') {
      setTimeout(() => {
        this.setState({ constructionStarted: 'Dining Room' });
      }, 2000);
    } else if (this.state.constructionStarted === 'Dining Room') {
      setTimeout(() => {
        this.setState({ constructionStarted: 'Kitchen' });
      }, 2000);
    } else if (this.state.constructionStarted === 'Kitchen') {
      setTimeout(() => {
        this.setState({ constructionStarted: 'Bathroom' });
      }, 2000);
    } else if (this.state.constructionStarted === 'Bathroom') {
      setTimeout(() => {
        this.setState({ constructionStarted: 'Bedroom' });
      }, 2000);
    } else if (this.state.constructionStarted === 'Bedroom') {
      setTimeout(() => {
        this.setState({ constructionStarted: 'Swimming Pool' });
      }, 2000);
    } else if (this.state.constructionStarted === 'Swimming Pool') {
      setTimeout(() => {
        this.setState({ constructionStarted: 'Garage' });
      }, 2000);
    } else if (this.state.constructionStarted === 'Garage') {
      setTimeout(() => {
        this.setState({ constructionStarted: 'Completed' });
      }, 2000);
    }
}

  render() {
    return (
      <div className="house-urbanization">
        <h2>Construction Status: {this.state.constructionStarted}</h2>
      </div>
    );
  }
}

export default HouseUrbanization;
