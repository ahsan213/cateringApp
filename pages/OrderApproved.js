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



class OrderApproved extends Component {

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
    if (username == "" || password == '' || email == "" || phone_number == ""  ) {
      this.setState({ error: "Fill the complete form" })
    }
    
      else {
        // this.setState({error:"Form Submitted successfully"})
        let signupInfo = {}
        signupInfo.phone = this.state.phone_number;
        signupInfo.email = this.state.email;
      
        signupInfo.address = this.state.address;
      
        signupInfo.name = this.state.username;
        
        signupInfo.password = this.state.password;
       
    console.log(signupInfo)

        var url = 'http://localhost:4000/user/signup'
        fetch(url, {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(signupInfo), // data can be `string` or {object}!
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
          .then(response => {
            console.log('Success:', JSON.stringify(response))
            alert("Form Submitted successfully")
            this.setState({showAlert:true});
          })
          .catch(error => console.error('Error:', error));
          alert("Form not  Submitted successfully")
    
    }
  }


  render() {

    return (

      <KeyboardAwareScrollView >
    
        <View style={styles.container}>
   <Text>Under Making</Text>


        </View>
      </KeyboardAwareScrollView >

    );
  }

}
export default OrderApproved;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white',
    // marginLeft: 5,
    // marginRight: 5,
    // marginTop:20,
  
  },
})