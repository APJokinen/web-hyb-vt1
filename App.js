import { StatusBar } from 'expo-status-bar';
import {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [age, setAge] = useState('')
  const [lowLimit, setLowLimit] = useState(0)
  const [highLimit, setHighLimit] = useState(0)

  const calculate = () => {
    const ageInt = age.replace(',','.')
    const limit1 = Math.round((220-ageInt)*0.65)
    const limit2 = Math.round((220-ageInt)*0.85)
    setLowLimit(limit1)
    setHighLimit(limit2)
  }


  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <Text style={styles.field}>Age</Text>
      <TextInput style={styles.field}
      value={age}
      onChangeText={text => setAge(text)}
      keyboardType='decimal-pad'/>
      <Text style={styles.field}>Limits</Text>
      <Text style={styles.field}>{lowLimit}{"-"}{highLimit}</Text>
      <Button title="Calculate" onPress={calculate}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    marginLeft:20,
    width: '90%'

  },
  field: {
    fontSize: 20,
    marginBottom: 10,
  }
});
