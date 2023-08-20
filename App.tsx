import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

const App = () => {
  const [quote, setQuote] = useState('');

  const fetchKanyeQuote = () => {
    fetch('https://api.kanye.rest/')
      .then(response => response.json())
      .then(json => {
        setQuote(json.quote);
      })
      .catch(error => setQuote('Error: ' + error.message));
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#f0f8ff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{
        bottom: 10,
        fontSize: 25,
        fontFamily: 'sans-serif-medium',
        color: '#000000'
      }}>Try editing me! 🎉</Text>
      <Button
        onPress={fetchKanyeQuote}
        title="Get Kanye Quote"
        color="#841584"
        accessibilityLabel="Get a quote from Kanye"
      />
      <Text style={{ marginTop: 20, textAlign: 'center', color:"#000000" , fontSize: 20}}>{quote}</Text>
    </View>
  );
};

export default App;
