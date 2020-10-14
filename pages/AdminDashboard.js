import React from 'react';  
import {StyleSheet, Text, View,Button,FlatList,ImageBackground,Image,TouchableOpacity} from 'react-native';  
import { ListItem, Icon } from 'react-native-elements';
  
class AdminDashboard extends React.Component {  
  constructor() {
    super();
    this.state = {
        data: [],
        userdata:""
    }

  }

   confirmorder  = (data)=>{
    var url = 'https://ahsan-catering-backend.herokuapp.com/api/admin/confirmOrder'
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify({orderId:data}), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(response => {
        console.log('Success:', JSON.stringify(response))
        alert("Order Status Updated")
        this.setState({showAlert:true});
        // // alert(response.Userdata.email);
        // storeData('userId',response.Userdata.userId);
        // storeData('email',response.Userdata.email);
        // this.props.navigation.navigate('Dashboard');
      })
      .catch(error => {
        alert("Can not update order status")
        console.error('Error:', error)
      });
  }

  componentDidMount(){
    var url = 'https://ahsan-catering-backend.herokuapp.com/api/admin/getall/orders'
            fetch(url, {
              method: 'GET', // or 'PUT'
            }).then(res => res.json())
              .then(response => {
                console.log('Success:', JSON.stringify(response))
                alert("Data get success")
                console.log("Data",response.list)
                this.setState({showAlert:true});
                this.setState({data:response.list})
                // alert(response.Userdata.email);
               
              })
              .catch(error => {
                alert("Can not get data")
                console.error('Error:', error)
              });
  }

  render() {  
    console.log("Render",this.state.data)
    return (  
        <ImageBackground  style={{flex:9,backgroundColor:'white'}}>
        <View style={styles.top}>
            <Text style={styles.title}>Customer Orders</Text>
        </View>
        <FlatList 
           data={this.state.data}
           
           keyExtractor={item => item._id}

            style={{width:'100%'}}
            renderItem={({item})=>{
                let arrayToShow = ['md-star-outline','md-star-outline','md-star-outline','md-star-outline','md-star-outline'];
                for(let i = 0;i<item.ratings;i++){
                    arrayToShow[i] = 'md-star';
                }
                // const stars = arrayToShow.map((element,index)=>{
                //     return(
                //         <Image 
                //         source={require('./img/profile.jpg')} />
                //     );
                // });
                return(
                    <TouchableOpacity style={styles.button}>
                        
                        <View style={{flex:1,justifyContent:"center"}}>
                            <Text style={styles.name}>Customer Name: {item.user[0].name}</Text>
                            <Text style={styles.type}>Total Price: {item.totalPrice}</Text>
                            <Text style={styles.type}>Date: {item.Date.substring(0, 10)}</Text>
                            <Text style={styles.type}>Status: {item.status}</Text>
                            

                        </View>
                      <View>
                      <Icon
                        onPress={( ) => this.confirmorder(item._id)}
                        raised name="add" />
                      </View>
                        
                    </TouchableOpacity>
                    
                    
                )
    
            
            }}
        ></FlatList>
<TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('CreateInventry')}>
            <Text style={styles.buttonText}
              
            >Add Inventery
                   </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('ShowInventory')}>
            <Text style={styles.buttonText}
              
            >Inventery List
                   </Text>
          </TouchableOpacity>
    </ImageBackground>

    );  
  }  
}  
export default AdminDashboard;

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
},
title:{
    fontSize:30,
    marginLeft:60,
    color:'black',
   
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
