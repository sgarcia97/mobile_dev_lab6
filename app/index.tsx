import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {useState, useEffect} from "react"
import getUsers from "../lib/supabase_crud"

export default function App() {
  const [data, setData] = useState<any>(getUsers) 
  console.log(data) 
  return (
    <View style={styles.container}>
      <Text>Users</Text>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (<Text style={{color:"#000"}} key={item.id}>{item.username}</Text>)}
      />
    </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
