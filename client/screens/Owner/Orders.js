import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image , TextInput} from 'react-native';


export default function Order() {

    const menu_items = [  
        {"name":"pizza", "price":"100"},  
        {"name":"Burger", "price":"50"},
        {"name":"Coffee", "price":"60"},  
        {"name":"Hash brown", "price":"30"}   
    ] 
  return (
    <View>

        <Text style={{ alignSelf: "center", marginBottom: 40, fontSize: 16, fontFamily: 'GothamMedium', color: "black" }}>Current orders going on ......😋 🍔 🍟 🍕</Text>

                <View style={{backgroundColor: "#ECECEC", borderRadius: 10, marginHorizontal: 20}}>
                <Text style={{ marginLeft: 0, fontSize: 22, fontFamily: 'GothamMedium', marginTop: 10, color: "black", textAlign: "center" }}>Table no. 4</Text>
                <View style={{borderBottomWidth: 1, borderBottomColor: "black", marginHorizontal: 90, marginTop: 10}} />
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

                              <View
                                  style={{paddingTop: 10,marginTop: 10, marginBottom: 20, marginRight: 10}}
                                  
                              >
                                  <View style={{
                                      backgroundColor: "transparent",
                                      padding: 12,
                                      borderRadius: 6,
                                  }}>
                                      <Text style={{color: "black", textAlign: "center", fontFamily: 'GothamMedium'}}>Total: 1</Text>
                                  </View>
                              </View>
                              
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
                        <Text style={{color: "white", textAlign: "center", fontFamily: 'GothamMedium'}}>Received by User 🖖🏼</Text>
                    </View>
                </TouchableOpacity>
            </View>
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
    backgroundColor: "#222222",
    padding: 12,
    borderRadius: 6,
}
});
