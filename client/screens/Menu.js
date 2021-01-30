import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


export default function Menu() {

    const [name, setName] = useState([]);
    const [price, setPrice] = useState([]);

    // let cart = [
    //     {name: name,
    //     price: price},
    // ];

    const menu_items = [  
        {"name":"pizza", "price":"100"},  
        {"name":"Burger", "price":"50"},
        {"name":"Coffee", "price":"60"},  
        {"name":"Hash brown", "price":"30"}   
    ] 
    
    // check if not working then make a new one
    function deleteItem(val){
        let array = []
        for( let i=0;i<name.length;i++){
            if(i != val){
                array.push(name[i])
            }
        }
        setName([]);
        setName(array);
    }
    return (
        <View >
            
            {/* Menu Header */}
            <View style={{ flex: 1, justifyContent: 'center', padding: 24, marginTop: 30, marginBottom: 20}}>
                    <View style={{ flexDirection: 'row', height: 55, backgroundColor: "#ECECEC", borderRadius: 8 }}>
                        
                        <TouchableOpacity
                            style={{ 
                                flex: 1,
                                backgroundColor: null, 
                                borderRadius: 6,
                            }}
                            
                        >
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center',marginRight: 20, justifyContent: 'center' }}>
                            <Image 
                                style={{
                                    width: 20, 
                                    height: 20, 
                                }}
                                tintColor= "#1D256E"
                                source={require('../assets/icons/back_arrow_icon.png')} />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ 
                                flex: 1,
                                backgroundColor:null, 
                                margin: 5,
                                borderRadius: 8,
                            }}
                            // onPress={() => NavbarButtonHandler("chart")}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <Text style={{ marginLeft: 0, fontSize: 16, fontFamily: 'GothamMedium', lineHeight: 22, color: "black" }}>Menu</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ 
                                flex: 1,
                                backgroundColor: null, 
                                margin: 5,
                                borderRadius: 8,
                            }}
                            // onPress={() => NavbarButtonHandler("add")}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                             <Text style={{ marginLeft: 0, fontSize: 16, fontFamily: 'GothamMedium', lineHeight: 22, color: "black" }}>Go to Cart</Text>   
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>


            
            

            {menu_items.map(item => {
                return(
                    <View key={item.name}
                        style={{
                            backgroundColor: "#ECECEC",
                            borderRadius: 8,
                            paddingVertical: 7,
                            paddingHorizontal: 7,
                            marginHorizontal: 24,
                            marginVertical: 10
                        }}> 
                        <View style={{backgroundColor: "#F5F6FC", borderRadius: 8, flexDirection: "row"}}>
                            <Image source={{uri: "https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/1_z1bkmcrb/def_height/1500/def_width/1500/version/100011/type/1"}}
                                style={{ 
                                    width: 150, 
                                    height: 150, 
                                    resizeMode: "stretch",
                                    borderRadius: 25,
                                }}
                            />
                            <View> 
                                <Text style={{
                                    fontFamily: 'GothamLight', 
                                    marginLeft: 10,
                                    marginRight: 150,
                                    lineHeight: 15,
                                    marginTop: 10,
                                }}>{item.name}</Text>
                                <View style={{padding: 1, marginVertical: 10, marginRight: 160, marginLeft: 10 , backgroundColor: "#E4E6F3"}} />
                                <Text style={{
                                    fontSize: 12,
                                    fontFamily: 'GothamMedium', 
                                    marginLeft: 10,
                                    marginRight: 150,
                                }}>Price: {item.price}</Text>

                                <View style={{flexDirection: "row"}}>
                                <TouchableOpacity  
                                    disabled={name.includes(item.name) ? true : false }
                                    style={{paddingTop: 10,marginTop: 10, marginBottom: 20, margin: 10}}
                                    onPress={() => setName( name + item.name)}
                                >
                                    <View style={{
                                        backgroundColor: "white",
                                        borderWidth: 1,
                                        borderColor: "green",
                                        padding: 12,
                                        borderRadius: 6,
                                    }}>
                                        <Text style={{color: name.includes(item.name) ? "blue" : "green" , textAlign: "center", fontFamily: 'GothamMedium'}}>
                                            {name.includes(item.name) ? "Added ✔️" : "Add to cart +" }
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity  
                                    disabled={name.includes(item.name) ? false : true }
                                    style={{paddingTop: 10,marginTop: 10, marginBottom: 20, margin: 10}}
                                    onPress={() => deleteItem(item.name)}
                                >
                                    <View style={{
                                        backgroundColor: "white",
                                        borderWidth: 1,
                                        borderColor: "green",
                                        padding: 12,
                                        borderRadius: 6,
                                    }}>
                                        <Text style={{color: name.includes(item.name) ? "blue" : "green" , textAlign: "center", fontFamily: 'GothamMedium'}}>
                                            {name.includes(item.name) ? "Remove" : "" }
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                )
            })}
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
