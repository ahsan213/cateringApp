import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    AsyncStorage
} from 'react-native';


class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
          
        }
    }



    myfun = () => {
        console.disableYellowBox = true;
        let loginInfo = {};
        loginInfo.email = this.state.email;
        loginInfo.password = this.state.password;

        if( loginInfo.email== 'admin' && loginInfo.password=='admin')
        {
            this.props.navigation.navigate('AdminDashboard');   
        }
        else{
            let loginInfo = {};
            loginInfo.email = this.state.email;
            loginInfo.password = this.state.password;


            storeData = async (key,value) => {
            try {
                await AsyncStorage.setItem(key, value)
            } catch (e) {
                // saving error
            }
            }

            var url = 'https://ahsan-catering-backend.herokuapp.com/api/user/signin'
            fetch(url, {
              method: 'POST', // or 'PUT'
              body: JSON.stringify(loginInfo), // data can be `string` or {object}!
              headers: {
                'Content-Type': 'application/json'
              }
            }).then(res => res.json())
              .then(response => {
                console.log('Success:', JSON.stringify(response))
                alert("Login successfully")
                this.setState({showAlert:true});
                // alert(response.Userdata.email);
                storeData('userId',response.Userdata.userId);
                storeData('email',response.Userdata.email);
                this.props.navigation.navigate('Dashboard');
              })
              .catch(error => {
                alert("User Name or password incorrect")
                console.error('Error:', error)
              });
         
        }
    }
 
 
    render() {
        console.disableYellowBox = true;
        return (
            <KeyboardAvoidingView style={styles.conatiner}>
            <View >
            <Text style={{ color: 'black', justifyContent: 'center', textAlign: 'center', fontSize: 20, fontStyle: 'normal', fontWeight: 'bold', marginTop: 20 }}>Welcome ! Sign in to your account</Text>

                <View style={styles.logoContainer}>
                    <Image style={styles.logo}
                      source={require('./img/logocat.jpg')} />
                </View>

                <TextInput
                    style={styles.input}
                    placeholder="Enter UserName"
                    autoCapitalize="none"
                    onChangeText={email => this.setState({ email })}
                    placeholderTextColor="black" />
                    
                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    secureTextEntry
                    placeholder=" Enter Password"
                    onChangeText={password => this.setState({ password })}
                    placeholderTextColor="black" />
                     <TouchableOpacity >
                    {/* <Text style={{color:'blue',textAlign:'right' ,marginRight:40}}
                       
                    >Forgot Your Password?
                    </Text> */}
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}
                       onPress={() => this.myfun()}
                    >LOGIN
                    </Text>
                </TouchableOpacity>

                <Text style={styles.newAcoount} onPress={() => this.props.navigation.navigate('Signup')}> Create new Account</Text>
            </View>
            </KeyboardAvoidingView>
        );
    }
} export default Login;

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: "center",
        // flexGrow: 1,
        justifyContent: "center"

    },logoContainer: {
        
        alignItems: "center",
        flexGrow: 1,
        justifyContent: "center"

    },logo:{
        width: 400,
        height: 300

    },input:{
        fontWeight: '500',
        marginLeft: 50,
        width:300,
        marginRight: 15,
        height: 50,
        backgroundColor: 'white',
        // opacity: 0.5,
        marginBottom: 15,
        marginTop:15,
        borderRadius: 14,
        color: 'black',
        paddingHorizontal: 10,
        borderColor:'black',
        borderWidth:1

    },buttonContainer: {
        marginLeft: 120,
        marginRight: 120,
        backgroundColor: 'black',
        paddingVertical: 15,
        marginBottom: 20,
        marginTop:10,
        borderRadius: 14,

    },buttonText: {
        color: 'white',
        fontWeight: '900',  
        textAlign: 'center',
        borderRadius: 14,

    },newAcoount: {
        color: '#343a40',
        marginHorizontal: '30%',
        fontWeight: "bold",
        marginBottom: 30,
        textDecorationLine: "underline",
        marginLeft:130
    }
})
