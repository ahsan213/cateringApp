import React, { Component } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { TextInputMask } from 'react-native-masked-text'

import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native'



class CreateInventry extends Component {

  constructor() {
    super();
    this.state = {
      showAlert: false,
      username: '',
      usererr: '',
      email: '',
      emailerr: '',
      password: '',
      passerr: '',
      phone_number: '',
      phoneerr: '',
      address:'',
     
    }

  }

 
  myfun2 = () => {
    const { username } = this.state;
    let seg = /^[a-zA-Z]+(([,. -][a-zA-Z ])?[a-zA-Z*])*$/;
    if (seg.test(username) === false) {
      this.setState({ usererr: "Enter The name like: (john)" })

    }
    else {
      this.setState({ usererr: "" })

    }
  }

  myfun6 = () => {
    const { password } = this.state;
    if (password.length <= '3') {
      this.setState({ passerr: "Password Length Must be Greater Than 3" })
    }
    else {
      this.setState({ passerr: "" })
    }
  }
  myfun3 = () => {
    const { phone_number } = this.state;

    if (phone_number.length <= '11') {
      this.setState({ phoneerr: "Please Enter The Correct Number" })
    }
    else {
      this.setState({ phoneerr: "" })
    }
  }


  myfun = () => {
    const { username, email, password, phone_number} = this.state;
    if (username == "" || email == "" || phone_number == ""  ) {
      this.setState({ error: "Fill the complete form" })
    }
    
      else {
        // this.setState({error:"Form Submitted successfully"})
        let inventorydata = {}
        inventorydata.name = this.state.username;

        inventorydata.price = this.state.email;
      
        inventorydata.quantity = this.state.phone_number;
      
        console.log(inventorydata)

        var url = 'https://ahsan-catering-backend.herokuapp.com/api/admin//inventory/add'
        fetch(url, {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(inventorydata), // data can be `string` or {object}!
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
          .then(response => {
            console.log('Success:', JSON.stringify(response))
            alert("Product Added successfully")
            this.setState({showAlert:true});
          })
          .catch(error => {  alert("Form not  Submitted successfully");console.error('Error:', error)});
        
    
    }
  }


  render() {

    return (

      <KeyboardAwareScrollView >
    
        <View style={styles.container}>
   

        <View style={styles.logoContainer}>
                    <Image style={styles.logo}
                      source={require('./img/add.jpg')} />
                </View>
      <Text style={{ color: 'red' }}>{this.state.error}</Text>
          <TextInput
            style={styles.input}
            placeholder=' Item Name'
            autoCapitalize="none"
            placeholderTextColor='black'
            // onBlur={() => this.myfun2()}
            onChangeText={(text) => { this.setState({ username: text }) }}
          />
          <Text style={{ color: 'red' }}>{this.state.usererr}</Text>
          <TextInput
            style={styles.input}
            placeholder=' Price'
            autoCapitalize="none"
            placeholderTextColor='black'
            // onBlur={() => this.myfun2()}
            onChangeText={(text) => { this.setState({ email: text }) }}
          />
          <Text style={{ color: 'red' }}>{this.state.usererr}</Text>
          <TextInputMask style={styles.input}
            placeholder='Quantity.'
            placeholderTextColor="black"
            keyboardType='phone-pad'
            type={'custom'}

            options={{
              mask: '9999'
            }}
            value={this.state.phone_number}
            // onBlur={() => this.myfun3()}
            onChangeText={text => {
              this.setState({
                phone_number: text
              })
            }}
          />
          <Text style={{ color: 'red' }}>{this.state.phoneerr}</Text>

     
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}
               onPress={() => this.myfun()}
            >ADD
                   </Text>
          </TouchableOpacity>


        </View>
      </KeyboardAwareScrollView >

    );
  }

}
export default CreateInventry;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white',
    // height:660
    // marginLeft: 5,
    // marginRight: 5,
    // marginTop:20,
  
  },
  input: {
    fontWeight: '500',
    marginLeft: 15,
    marginRight: 15,
    height: 50,
    backgroundColor: 'white',
    // opacity: 0.5,
    marginBottom: 15,
    borderRadius: 14,
    color: 'black',
    paddingHorizontal: 10,
    borderColor:'black',
    borderWidth:1,
    width: 300
    
  },

  buttonContainer: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 50,
    
    borderRadius: 14,
    width:300
  },
  buttonText: {
    color: 'white',
    fontWeight: '900',
    textAlign: 'center',
    borderRadius: 14,
    paddingHorizontal: 15
  },logoContainer: {
        
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"

},logo:{
    width: 400,
    height: 300

}
  
});
