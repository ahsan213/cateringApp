import React from 'react';  
import {StyleSheet, Text, View,Button,FlatList,ImageBackground,Image,TouchableOpacity,AsyncStorage} from 'react-native';  


  
class Dashboard extends React.Component { 

  constructor() {
    super();
    this.state = {
        data: [],
        userdata:""
    }
    this.getData=this.getData.bind(this);
  }

  getData = async () => {
    
    try {
      const values = await AsyncStorage.getItem('userId');
      // alert(values);
      console.log(typeof (values));
     
      var url = 'https://ahsan-catering-backend.herokuapp.com/api/user/order/getById'
            fetch(url, {
              method: 'POST', // or 'PUT'
              body: JSON.stringify({id:values}), // data can be `string` or {object}!
              headers: {
                'Content-Type': 'application/json'
              }
            }).then(res => res.json())
              .then(response => {
                console.log('Success:', JSON.stringify(response))
                // alert("Get data successfully")
                console.log(response.orders);
                // this.setState({showAlert:true});
                // alert(response.Userdata.email);
                // storeData('userId',response.Userdata.userId);
                // storeData('email',response.Userdata.email);
                // this.props.navigation.navigate('Dashboard');
                this.setState({data:response.orders})
              })
              .catch(error => {
                alert("Can not get order")
                console.error('Error:', error)
              });
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

  render() {
    console.log("Render",this.state.data)
    return (  
        <ImageBackground  style={{flex:9,backgroundColor:'white'}}>
        <View style={styles.top}>
            <Text style={styles.title}>Orders</Text>
        </View>
        <FlatList 
           data={this.state.data}
           
           keyExtractor={item => item._id}

            style={{width:'100%'}}
            renderItem={({item}) => {
              // alert(item);
                let arrayToShow = ['md-star-outline','md-star-outline','md-star-outline','md-star-outline','md-star-outline'];
                for(let i = 0;i<item.ratings;i++){
                    arrayToShow[i] = 'md-star';
                }
                return(
                    <TouchableOpacity style={styles.button}>
                        
                        <View style={{flex:1,justifyContent:"center"}}>
                            <Text style={styles.name}>{item.Date.substring(0, 10)}</Text>
                            <Text style={styles.type}>{item.totalPrice}</Text>
                            <Text style={styles.type}>{item.status}</Text>
                            

                        </View>
                      <View>
                      <Image style={{width:150,height:80}}
                        source={require('./img/catering.jpg')} />
                      </View>
                        
                       
                    </TouchableOpacity>

                )
            }}
        ></FlatList>
<TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('CreateOrder')}>
            <Text style={styles.buttonText}
              
            >Create Order
                   </Text>
          </TouchableOpacity>
    </ImageBackground>

    );  
  }  
}  
export default Dashboard;

const styles = StyleSheet.create({  
  container: {  
      flex: 1,  
      justifyContent: 'center',  
      alignItems: 'center'  
  },  
  input1: {
    width: 360,
   
    height: 150,
    backgroundColor: 'white',
    
    marginBottom: 15,
    borderRadius: 10,
    color: 'black',
    paddingHorizontal: 10,
    marginLeft:30,
    borderWidth:1.5,
    marginTop:20
  },
  top:{
    flexDirection:"row",
    paddingVertical:20,
    alignItems:"center"
},back:{
    fontSize:30,
    color:'black',
    padding:10,
    paddingLeft:20
},title:{
    fontSize:30,
    marginLeft:130,
    color:'black',
textAlign:'center',
fontWeight:'bold'
},button:{
    flexDirection:"row",
    padding:20,
    borderBottomColor:'black',
    borderBottomWidth:0.2,
    alignItems:"center",
    paddingVertical:20,
    width:'100%'
},image:{
    borderRadius:100,
    resizeMode:"stretch",
    width:60,
    height:60
},name:{
    
    color:'black',
    fontSize:20,
    padding:10,
    fontWeight:'bold'
},type:{
    
    color:'black',
    fontSize:15,
    paddingLeft:10
},price:{

},ratings:{
    flexDirection:"row",
    padding:10
},
buttonContainer: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginLeft:30,
    marginTop:10,
    borderRadius: 14,
    width:300
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 14,
    paddingHorizontal: 15,
    fontSize:14
  },
  buttonContainer1: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginLeft:25,
    marginTop:10,
    borderRadius: 14,
    width:360,
    height:50,
    borderWidth:1,
    justifyContent:'center'
  },
  buttonText1: {
    color: 'black',
    fontWeight: 'bold',
    
    borderRadius: 14,
    paddingHorizontal: 15,
    fontSize:16
  },
  buttonContainer2: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginLeft:25,
    marginTop:30,
    borderRadius: 14,
    width:360,
    height:50,
    borderWidth:1,
    justifyContent:'center'
  },
  buttonText2: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 14,
    paddingHorizontal: 15,
    fontSize:16
  }
});  
