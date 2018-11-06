import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const List = (props) => {
  const styles = StyleSheet.create({
    bigblue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 50,
    },
    green: {
      color: 'green',
      fontSize: 20
    }
  });

  return (
    <View> 
      <Text style={styles.bigblue}>My Todo</Text>
      {props.data.map(each => <Text style={styles.green} key={`${each}-key`}>{each}</Text>)}
    </View>
  );
}

export default List;
