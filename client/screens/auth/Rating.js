 import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StarRating from 'react-native-star-rating';

const Rating = () => {
  constructor(props) 
  {
    super(props);
    this.state = {
      generalStarCount: 3.5,
      customStarCount: 2.5,
    };
  }

  onGeneralStarRatingPress(rating) 
  {
    this.setState({
      generalStarCount: rating,
    });
  }

  onCustomStarRatingPress(rating) 
  {
    this.setState({
      customStarCount: rating,
    });
  }

  render() 
  {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          How was your trip with me 
        </Text>
     
     
        <StarRating
          disabled={false}
          maxStars={5}
          rating={this.state.generalStarCount}
          reversed
          starSize={50}
          selectedStar={rating => this.onGeneralStarRatingPress(rating)}
        />
        
       
       
      </View>
    );
  }
}; export default Rating

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#f333333',
    marginBottom: 5,
  },
  star: {
    paddingHorizontal: 6,
    opacity: 0,
    
  },
});
