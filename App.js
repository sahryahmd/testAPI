import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bidang, setBidang] = useState('');

  const submit = () => {
    const data = {
      name,
      email,
      bidang,
    };

    axios.post('http://10.0.2.2:3004/users', data).then(res => {
      console.log('res: ', res);
      setName('');
      setEmail('');
      setBidang('');
    });
  };
  return (
    <View style={{flex: 1}}>
      <View style={{marginTop: 10}}>
        <Text>Masukkan Anggota Sahry Ahmad Farm</Text>
        <TextInput
          style={{
            borderWidth: 1,
            marginTop: 10,
            marginHorizontal: 40,
            borderRadius: 20,
          }}
          placeholder="Nama Lengkap"
          value={name}
          onChangeText={value => setName(value)}
        />
        <TextInput
          style={{
            borderWidth: 1,
            marginTop: 10,
            marginHorizontal: 40,
            borderRadius: 20,
          }}
          placeholder="Email"
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <TextInput
          style={{
            borderWidth: 1,
            marginTop: 10,
            marginHorizontal: 40,
            borderRadius: 20,
          }}
          placeholder="Bidang"
          value={bidang}
          onChangeText={value => setBidang(value)}
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#1565c0',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            marginHorizontal: 50,
            paddingVertical: 10,
            marginTop: 10,
          }}
          onPress={submit}>
          <Text style={{color: '#ffffff', fontWeight: 'bold'}}>GET DATA</Text>
        </TouchableOpacity>

        <Text style={{marginTop: 30}}> Result</Text>
        <View style={{flexDirection: 'column'}}>
          <View style={{borderBottomWidth: 1}}>
            <Image
              style={{width: 50, height: 50, marginTop: 50}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/4333/4333609.png',
              }}
            />
            <Text style={{marginTop: 5}}> Nama Lengkap</Text>
            <Text style={{marginTop: 5}}> Email</Text>
            <Text style={{marginTop: 5}}> Bidang</Text>
          </View>
          <View style={{borderBottomWidth: 1}}>
            <Image
              style={{width: 50, height: 50, marginTop: 10}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/4333/4333609.png',
              }}
            />
            <Text style={{marginTop: 5}}> Nama Lengkap</Text>
            <Text style={{marginTop: 5}}> Email</Text>
            <Text style={{marginTop: 5}}> Bidang</Text>
          </View>
          <View style={{borderBottomWidth: 1}}>
            <Image
              style={{width: 50, height: 50, marginTop: 10}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/4333/4333609.png',
              }}
            />
            <Text style={{marginTop: 5}}> Nama Lengkap</Text>
            <Text style={{marginTop: 5}}> Email</Text>
            <Text style={{marginTop: 5}}> Bidang</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default App;
