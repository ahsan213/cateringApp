import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { TextInputMask } from 'react-native-masked-text'
import Counter from "react-native-counters";
import Feather from 'react-native-vector-icons/Feather';
class CreateOrder extends Component {
  constructor() {
    super();
    this.state = {
        p1:{Name:"Bistro White Stackable Chair", id:"5f85d5a3a0fa5e0aa7d7b4b7", quantity:"", price:1.5},
        p2:{Name:"Bi-fold White Trestle 1.8m Table", id:"5f85d5c7a0fa5e0aa7d7b4b8", quantity:"", price:8},
        p3:{Name:"Festoon Lights 20 Globs Set (18m)", id:"5f85d5d9a0fa5e0aa7d7b4b9", quantity:"", price:35},
        p4:{Name:"3m x 3m White Gazebo/Marquee", id:"5f85d5eea0fa5e0aa7d7b4ba", quantity:"", price:55},
        p5:{Name:"3m x 6m White Gazebo/Marquee", id:"5f85d602a0fa5e0aa7d7b4bb", quantity:"", price:75},
        p6:{Name:"Patio Gas Heaters", id:"5f85d60fa0fa5e0aa7d7b4bc", quantity:"", price:75},
        p7:{Name:"Single Sand Bag", id:"5f85d62aa0fa5e0aa7d7b4bd", quantity:"", price:3},
        p8:{Name:"Plastic Colourful Kids Chair", id:"5f85d63ca0fa5e0aa7d7b4be", quantity:"", price:1.3},
        p9:{Name:"Bi-fold White Trestle 1.2m Table", id:"5f85d64ba0fa5e0aa7d7b4bf", quantity:"", price:6},
        p10:{Name:"Tiffany Chairs", id:"5f85d65ca0fa5e0aa7d7b4c0", quantity:"", price:6},
        p11:{Name:"3m x 4.5m White Gazebo/Marquee", id:"5f85d672a0fa5e0aa7d7b4c1", quantity:"", price:65},
        p12:{Name:"Plain Side Walls per 3 meter", id:"5f85d691a0fa5e0aa7d7b4c2", quantity:"", price:6},
        p13:{Name:"Window Side Walls per 3 meter", id:"5f85d6a1a0fa5e0aa7d7b4c3", quantity:"", price:6},
        p14:{Name:"Double Sand Bags", id:"5f85d6b0a0fa5e0aa7d7b4c4", quantity:"", price:6},
        po1:0,
        po2:0,
        po3:0,
        po4:0,
        po5:0,
        po6:0,
        po7:0,
        po8:0,
        po9:0,
        po10:0,
        po11:0,
        po12:0,
        po13:0,
        po14:0,
        totalprice:0,
        user:""
    }
  }

  onChange = (number, type) => {
    console.log(number, type) // 1, + or -
  }
  minusIcon = (isDisabled) => {
    return <Feather name='minus' size={20} color={'green'} />
  };

  plusIcon = (isPlusDisabled) => {
    return <Feather name='plus' size={20} color={'green'} />
  };

  getData = async () => {
    
    try {
      const values = await AsyncStorage.getItem('userId');
      this.setState({user:values})
      console.log(typeof (values));
      if(values !== null) {
        // value previously stored
      }
    } catch(e) {
      // error reading value
      alert(e);
    }
  }

  componentDidMount(){
    this.getData();
  }
 


  myfun = () => {

      let products=[]
      if(Number(this.state.po1) > 0){
        products.push({
          id:this.state.p1.id,
          qantity:this.state.po1,
          price:this.state.p1.price* Number(this.state.po1),
          name:this.state.p1.Name,
        })
      }
      if(Number(this.state.po2) > 0){
        products.push({
          id:this.state.p2.id,
          qantity:this.state.po2,
          price:this.state.p2.price* Number(this.state.po2),
          name:this.state.p2.Name,
        })
      }
      if(Number(this.state.po3) > 0){
        products.push({
          id:this.state.p3.id,
          qantity:this.state.po3,
          price:this.state.p3.price* Number(this.state.po3),
          name:this.state.p3.Name,
        })
      }
      if(Number(this.state.po4) > 0){
        products.push({
          id:this.state.p4.id,
          qantity:this.state.po4,
          price:this.state.p4.price* Number(this.state.po4),
          name:this.state.p4.Name,
        })
      }
      if(Number(this.state.po5) > 0){
        products.push({
          id:this.state.p5.id,
          qantity:this.state.po5,
          price:this.state.p5.price* Number(this.state.po5),
          name:this.state.p5.Name,
        })
      }
      if(Number(this.state.po6) > 0){
        products.push({
          id:this.state.p6.id,
          qantity:this.state.po6,
          price:this.state.p6.price* Number(this.state.po6),
          name:this.state.p6.Name,
        })
      }
      if(Number(this.state.po7) > 0){
        products.push({
          id:this.state.p7.id,
          qantity:this.state.po7,
          price:this.state.p7.price* Number(this.state.po7),
          name:this.state.p7.Name,
        })
      }
      if(Number(this.state.po8) > 0){
        products.push({
          id:this.state.p8.id,
          qantity:this.state.po8,
          price:this.state.p8.price* Number(this.state.po8),
          name:this.state.p8.Name,
        })
      }
      if(Number(this.state.po9) > 0){
        products.push({
          id:this.state.p9.id,
          qantity:this.state.po9,
          price:this.state.p9.price* Number(this.state.po9),
          name:this.state.p9.Name,
        })
      }
      if(Number(this.state.po10) > 0){
        products.push({
          id:this.state.p10.id,
          qantity:this.state.po10,
          price:this.state.p10.price* Number(this.state.po10),
          name:this.state.p10.Name,
        })
      }
      if(Number(this.state.po11) > 0){
        products.push({
          id:this.state.p11.id,
          qantity:this.state.po11,
          price:this.state.p11.price* Number(this.state.po11),
          name:this.state.p11.Name,
        })
      }
      if(Number(this.state.po12) > 0){
        products.push({
          id:this.state.p12.id,
          qantity:this.state.po12,
          price:this.state.p12.price* Number(this.state.po12),
          name:this.state.p12.Name,
        })
      }
      if(Number(this.state.po13) > 0){
        products.push({
          id:this.state.p13.id,
          qantity:this.state.po13,
          price:this.state.p13.price* Number(this.state.po13),
          name:this.state.p13.Name,
        })
      }
      if(Number(this.state.po14) > 0){
        products.push({
          id:this.state.p14.id,
          qantity:this.state.po14,
          price:this.state.p14.price* Number(this.state.po14),
          name:this.state.p14.Name,
        })
      }
      

      
      let total=0;
      for(var i=0;i<products.length;i++){
        total=total+products[i].price
      }

      if(total==0){
        alert("Can not add order with total 0$")
      }else{
        alert("You are ordring of total cost "+total+"$");
        let order={};
        order.user=this.state.user;
        order.products=products;
        order.totalPrice=total;

        var url = 'https://ahsan-catering-backend.herokuapp.com/api/user/order'
            fetch(url, {
              method: 'POST', // or 'PUT'
              body: JSON.stringify(order), // data can be `string` or {object}!
              headers: {
                'Content-Type': 'application/json'
              }
            }).then(res => res.json())
              .then(response => {
                console.log('Success:', JSON.stringify(response))
                alert("Order created successfully")
                
                this.props.navigation.navigate('Dashboard');
              })
              .catch(error => {
                alert("Can not create order")
                console.error('Error:', error)
              });


      }
      

      

}


  render() {
    console.disableYellowBox = true;
    return (
      <KeyboardAwareScrollView  >
        <View style={styles.conatiner}>
          <Text style={{ color: 'black', textAlign: 'center', fontSize: 20, fontStyle: 'normal', fontWeight: 'bold', marginBottom: 30 }}>Add Order</Text>
          <Text style={styles.textitem}>Item Name:         Bistro White Stackable Chair </Text>
          <Text style={styles.textitem}>Quantiy</Text>
          <TextInputMask style={styles.input}
            placeholder='0'
            placeholderTextColor="black"
            keyboardType='phone-pad'
            type={'custom'}

            options={{
              mask: '9999'
            }}
            // value={this.state.phone_number}
            onChangeText={text => {
              this.setState({
                po1: text
              })
            }}
          />
          <Text style={styles.textitem}>Item Name:         Bi-fold White Trestle 1.8m Table </Text>
          <Text style={styles.textitem}>Quantiy</Text>
          <TextInputMask style={styles.input}
            placeholder='0'
            placeholderTextColor="black"
            keyboardType='phone-pad'
            type={'custom'}

            options={{
              mask: '9999'
            }}
            // value={this.state.phone_number}
            onChangeText={text => {
              this.setState({
                po2: text
              })
            }}
          />
          <Text style={styles.textitem}>Item Name:         Festoon Lights 20 Globs Set (18m) </Text>
          <Text style={styles.textitem}>Quantiy</Text>
          <TextInputMask style={styles.input}
            placeholder='0'
            placeholderTextColor="black"
            keyboardType='phone-pad'
            type={'custom'}

            options={{
              mask: '9999'
            }}
            // value={this.state.phone_number}
            onChangeText={text => {
              this.setState({
                po3: text
              })
            }}
          />
          <Text style={styles.textitem}>Item Name:         3m x 3m White Gazebo/Marquee </Text>
          <Text style={styles.textitem}>Quantiy</Text>
          <TextInputMask style={styles.input}
            placeholder='0'
            placeholderTextColor="black"
            keyboardType='phone-pad'
            type={'custom'}

            options={{
              mask: '9999'
            }}
            // value={this.state.phone_number}
            onChangeText={text => {
              this.setState({
                po4: text
              })
            }}
          />
          <Text style={styles.textitem}>Item Name:         3m x 6m White Gazebo/Marquee </Text>
          <Text style={styles.textitem}>Quantiy</Text>
          <TextInputMask style={styles.input}
            placeholder='0'
            placeholderTextColor="black"
            keyboardType='phone-pad'
            type={'custom'}

            options={{
              mask: '9999'
            }}
            // value={this.state.phone_number}
            onChangeText={text => {
              this.setState({
                po5: text
              })
            }}
          />
          <Text style={styles.textitem}>Item Name:         Patio Gas Heaters </Text>
          <Text style={styles.textitem}>Quantiy</Text>
          <TextInputMask style={styles.input}
            placeholder='0'
            placeholderTextColor="black"
            keyboardType='phone-pad'
            type={'custom'}

            options={{
              mask: '9999'
            }}
            // value={this.state.phone_number}
            onChangeText={text => {
              this.setState({
                po6: text
              })
            }}
          />
          <Text style={styles.textitem}>Item Name:         Single Sand Bag </Text>
          <Text style={styles.textitem}>Quantiy</Text>
          <TextInputMask style={styles.input}
            placeholder='0'
            placeholderTextColor="black"
            keyboardType='phone-pad'
            type={'custom'}

            options={{
              mask: '9999'
            }}
            // value={this.state.phone_number}
            onChangeText={text => {
              this.setState({
                po7: text
              })
            }}
          />
          <Text style={styles.textitem}>Item Name:         Plastic Colourful Kids Chair </Text>
          <Text style={styles.textitem}>Quantiy</Text>
          <TextInputMask style={styles.input}
            placeholder='0'
            placeholderTextColor="black"
            keyboardType='phone-pad'
            type={'custom'}

            options={{
              mask: '9999'
            }}
            // value={this.state.phone_number}
            onChangeText={text => {
              this.setState({
                po8: text
              })
            }}
          />
          <Text style={styles.textitem}>Item Name:         Bi-fold White Trestle 1.2m Table </Text>
          <Text style={styles.textitem}>Quantiy</Text>
          <TextInputMask style={styles.input}
            placeholder='0'
            placeholderTextColor="black"
            keyboardType='phone-pad'
            type={'custom'}

            options={{
              mask: '9999'
            }}
            // value={this.state.phone_number}
            onChangeText={text => {
              this.setState({
                po9: text
              })
            }}
          />
          <Text style={styles.textitem}>Item Name:         Tiffany Chairs </Text>
          <Text style={styles.textitem}>Quantiy</Text>
          <TextInputMask style={styles.input}
            placeholder='0'
            placeholderTextColor="black"
            keyboardType='phone-pad'
            type={'custom'}

            options={{
              mask: '9999'
            }}
            // value={this.state.phone_number}
            onChangeText={text => {
              this.setState({
                po10: text
              })
            }}
          />
          <Text style={styles.textitem}>Item Name:         3m x 4.5m White Gazebo/Marquee </Text>
          <Text style={styles.textitem}>Quantiy</Text>
          <TextInputMask style={styles.input}
            placeholder='0'
            placeholderTextColor="black"
            keyboardType='phone-pad'
            type={'custom'}

            options={{
              mask: '9999'
            }}
            // value={this.state.phone_number}
            onChangeText={text => {
              this.setState({
                po11: text
              })
            }}
          />
          <Text style={styles.textitem}>Item Name:         Plain Side Walls per 3 meter </Text>
          <Text style={styles.textitem}>Quantiy</Text>
          <TextInputMask style={styles.input}
            placeholder='0'
            placeholderTextColor="black"
            keyboardType='phone-pad'
            type={'custom'}

            options={{
              mask: '9999'
            }}
            // value={this.state.phone_number}
            onChangeText={text => {
              this.setState({
                po12: text
              })
            }}
          />
          <Text style={styles.textitem}>Item Name:         Window Side Walls per 3 meter </Text>
          <Text style={styles.textitem}>Quantiy</Text>
          <TextInputMask style={styles.input}
            placeholder='0'
            placeholderTextColor="black"
            keyboardType='phone-pad'
            type={'custom'}

            options={{
              mask: '9999'
            }}
            // value={this.state.phone_number}
            onChangeText={text => {
              this.setState({
                po13: text
              })
            }}
          />
          <Text style={styles.textitem}>Item Name:         Double Sand Bags </Text>
          <Text style={styles.textitem}>Quantiy</Text>
          <TextInputMask style={styles.input}
            placeholder='0'
            placeholderTextColor="black"
            keyboardType='phone-pad'
            type={'custom'}

            options={{
              mask: '9999'
            }}
            // value={this.state.phone_number}

            onChangeText={text => {
              this.setState({
                po14: text,
              })
            }}
          />

          
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}
              onPress={() => this.myfun()}
            >Add
                   </Text>
          </TouchableOpacity>

        </View>
      </KeyboardAwareScrollView>
    );
  }
} export default CreateOrder;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#FFF',


  },
  textitem: {
    color: 'black',
    fontSize: 14,
    textAlign: 'left',
    marginLeft: 5,
    marginTop:25
  },
  textprice: {
    color: 'black',
    fontSize: 24,
    textAlign: 'left',
    marginLeft: 5,
    marginTop:25
  },
  
  input: {
    fontWeight: '500',
    marginLeft: 120,
    width: 80,
    marginRight: 15,
    height: 40,
    backgroundColor: 'white',
    // opacity: 0.5,
    marginBottom: 15,
    marginTop: -25,
    borderRadius: 14,
    color: 'black',
    paddingHorizontal: 10,
    borderColor: 'black',
    borderWidth: 1

  }, buttonContainer: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginLeft: 80,
    borderRadius: 14,
    width: 200,
    marginTop: 70
  },
  buttonText: {
    color: 'white',
    fontWeight: '900',
    textAlign: 'center',
    borderRadius: 14,
    paddingHorizontal: 15
  }

})
