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



class Signup extends Component {

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
        signupInfo.status="Active";
       
        console.log(signupInfo)

        var url = 'https://ahsan-catering-backend.herokuapp.com/api/user/signup'
        fetch(url, {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(signupInfo), // data can be `string` or {object}!
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
          .then(response => {
            console.log('Success:', JSON.stringify(response))
            alert("User Created successfully")
            this.setState({showAlert:true});
            this.props.navigation.navigate('Login');
          })
          .catch(error => {
            alert("User  not Created Error")
            console.error('Error:', error)
          });
         
    }
  }


  render() {

    return (

      <KeyboardAwareScrollView >
    
        <View style={styles.container}>
   

        <View style={styles.logoContainer}>
                    <Image style={styles.logo}
                      source={require('./img/signup.jpg')} />
                </View>
      <Text style={{ color: 'red' }}>{this.state.error}</Text>
          <TextInput
            style={styles.input}
            placeholder=' Name'
            autoCapitalize="none"
            placeholderTextColor='black'
            // onBlur={() => this.myfun2()}
            onChangeText={(text) => { this.setState({ username: text }) }}
          />
          <Text style={{ color: 'red' }}>{this.state.usererr}</Text>
          <TextInput
            style={styles.input}
            placeholder=' Email'
            autoCapitalize="none"
            placeholderTextColor='black'
            // onBlur={() => this.myfun2()}
            onChangeText={(text) => { this.setState({ email: text }) }}
          />
          <Text style={{ color: 'red' }}>{this.state.usererr}</Text>
          <TextInputMask style={styles.input}
            placeholder='Phone No.'
            placeholderTextColor="black"
            keyboardType='phone-pad'
            type={'custom'}

            options={{
              mask: '9999 9999999'
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

          <TextInput
            style={styles.input}
            placeholder='Address'
            autoCapitalize="none"
            placeholderTextColor='black'
            // onBlur={() => this.myfun2()}
            onChangeText={(text) => { this.setState({ address: text }) }}
          />
          <Text style={{ color: 'red' }}></Text>
          <TextInput
            style={styles.input}
            placeholder=' Password'
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor='black'
            // onBlur={() => this.myfun6()}
            onChangeText={password => this.setState({ password })}
          />
          <Text style={{ color: 'red' }}>{this.state.passerr}</Text>
        
          {/* <CountryPicker
          withEmoji
        />
       */}
     
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}
               onPress={() => this.myfun()}
            >SIGNUP
                   </Text>
          </TouchableOpacity>


        </View>
      </KeyboardAwareScrollView >

    );
  }

}
export default Signup;

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
    marginBottom: 20,
    
    borderRadius: 14,
    width:200
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
    height: 250

}
  
});
