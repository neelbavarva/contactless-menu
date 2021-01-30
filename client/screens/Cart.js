import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


export default function Cart() {

    const menu_items = [  
        {"name":"pizza", "price":"100", "amount":"1"},  
        {"name":"Burger", "price":"50", "amount":"1"},
        {"name":"Coffee", "price":"60", "amount":"1"},  
        {"name":"Hash brown", "price":"30", "amount":"1"}   
    ]  


    const [name, setName] = useState([]);
    const [price, setPrice] = useState([]);
    const [amount, setAmount] = useState([]);

    return (
        <View>
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
                                style={{paddingTop: 10,marginTop: 10, marginBottom: 20, margin: 10}}
                                
                            >
                                <View style={styles.button}>
                                    <Text style={{color: "white", textAlign: "center", fontFamily: 'GothamMedium'}}>+</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={{paddingTop: 10,marginTop: 10, marginBottom: 20, margin: 10}}
                                
                            >
                                <View style={{
                                    backgroundColor: "tomato",
                                    padding: 12,
                                    paddingHorizontal: 14,
                                    borderRadius: 6,
                                }}>
                                    <Text style={{color: "white", textAlign: "center", fontFamily: 'GothamMedium'}}>-</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                style={{paddingTop: 10,marginTop: 10, marginBottom: 20, marginRight: 10}}
                                
                            >
                                <View style={{
                                    backgroundColor: "transparent",
                                    padding: 12,
                                    borderRadius: 6,
                                }}>
                                    <Text style={{color: "black", textAlign: "center", fontFamily: 'GothamMedium'}}>Total: 1</Text>
                                </View>
                            </TouchableOpacity>
                            
                            </View>
                        </View>
                    </View>
                </View>
                )
            })}
            <TouchableOpacity 
                    style={{paddingTop: 10,marginTop: 10, marginBottom: 20, margin: 10}}
                    
                >
                    <View style={{
                        backgroundColor: "#222222",
                        padding: 12,
                        borderRadius: 6,
                    }}>
                        <Text style={{color: "white", textAlign: "center", fontFamily: 'GothamMedium'}}>Confirm Order</Text>
                    </View>
                </TouchableOpacity>
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
  button : {
    backgroundColor: "green",
    // borderWidth: 1,
    // borderColor: "green",
    padding: 12,
    borderRadius: 6,
}
});
