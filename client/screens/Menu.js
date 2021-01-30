import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


export default function Menu() {

    const [names, setNames] = useState([]);
    const [cart, setCart] = useState([]);

    const menu_items = [  
        {"name":"pizza", "price":"100"},  
        {"name":"Burger", "price":"50"},
        {"name":"Coffee", "price":"60"},  
        {"name":"Hash brown", "price":"30"}   
    ]

    return (
        <View >
            {menu_items.map(item => (
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
                                    onPress={() => {
                                        if(!names.includes(item.name)) {
                                            setNames([...names, item.name]);
                                            let obj = {
                                                name: item.name,
                                                price: item.price
                                            }
                                            cart.push(obj);
                                        }
                                    }}
                                >
                                    <View style={{
                                        backgroundColor: "white",
                                        borderWidth: 1,
                                        borderColor: "green",
                                        padding: 12,
                                        borderRadius: 6,
                                    }}>
                                        <Text style={{color: names.includes(item.name) ? "blue" : "green" , textAlign: "center", fontFamily: 'GothamMedium'}}>
                                            {names.includes(item.name) ? "Added ✔️" : "Add to cart +" }
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity  
                                    disabled={names.includes(item.name) ? false : true }
                                    style={{paddingTop: 10,marginTop: 10, marginBottom: 20, margin: 10}}
                                    onPress={() => {
                                        if(names.includes(item.name)) {
                                            let newNames = names.filter(nm => (nm === item.name) ? false:true);
                                            setNames(newNames);

                                            newCart = cart.filter(ob => (ob.name === item.name) ? false: true);
                                        
                                            setCart([...newCart]);
                                        }
                                    }}
                                >
                                    <View style={{
                                        backgroundColor: "white",
                                        borderWidth: 1,
                                        borderColor: "green",
                                        padding: 12,
                                        borderRadius: 6,
                                    }}>
                                        <Text style={{color: names.includes(item.name) ? "blue" : "green" , textAlign: "center", fontFamily: 'GothamMedium'}}>
                                            {names.includes(item.name) ? "Remove" : "" }
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            ))}
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
