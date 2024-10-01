import { View, Text, Button } from 'react-native'
import React, {useState} from 'react'
import axios from 'axios'

const Create = () => {

  const [message, setMessage] = useState()

  return (
    <View>
      <Text>Create</Text>
       <Button title='Register' onPress={async () => {
        try {
        const {data} = await axios.get('https://mms-sv8b.vercel.app/api/deaths');
        setMessage(data);
      }
      catch (error) {console.log(error)}
      }}>
        </Button>
    <Text>{message}</Text>
    </View>
  )
 }

export default Create