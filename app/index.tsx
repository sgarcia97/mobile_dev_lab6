import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {useState, useEffect} from "react"
import getUsers from "../lib/supabase_crud"

export default function App() {
  const [data, setData] = useState<any>(getUsers) 
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Users</Text>
      <View style={styles.recordWrapper}>
      <FlatList
        data={data._j}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
        <View key={item.id} style={styles.record}>
            <Text style={{color:"#000"}}>Username: {item.username}</Text>
            <Text style={{color:"#000"}}>Password: {item.password}</Text>
            </View>
        )}
      />
    </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:10,
    backgroundColor: '#fff',
  
  },
  recordWrapper:{
    display:'flex',
    gap:10,
  },
  title:{
    fontWeight:800,
    fontSize:30,
    marginBottom:10
  },
  record: {
    padding:10,
    borderWidth:1,
    borderColor:"#eaeaea",
    marginBottom:10,
    borderRadius:5
  }
});
