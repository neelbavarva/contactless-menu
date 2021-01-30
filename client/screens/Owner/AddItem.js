import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image , TextInput} from 'react-native';


export default function AddItem() {
  return (
    <View style={{marginTop: 20}}>


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
                                source={require('../../assets/icons/back_arrow_icon.png')} />
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
                                <Text style={{ marginLeft: 0, fontSize: 16, fontFamily: 'GothamMedium', lineHeight: 22, color: "black" }}>Add</Text>
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
                               
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>



            <View style={{marginHorizontal: 30}}>
                <Text style={{
                    textAlign: "center", 
                    color:"black", 
                    fontFamily:"GothamBold", 
                    fontSize: 17, 
                    paddingBottom: 10,
                }}>Add New Item</Text>

                <View style={{borderBottomWidth: 1, borderBottomColor: "black", marginHorizontal: 60, marginBottom: 20}} />
                <Text style={styles.Text}>Name</Text>
                <TextInput 
                    style={{
                    backgroundColor: "white",
                    borderWidth: 1,
                    borderColor:  "#D1D1D1",
                    borderRadius: 5,
                    padding: 10,
                    marginTop: 8,
                    marginBottom: 12,
                    fontFamily: 'GothamLight', 
                    fontSize: 14,
                }}
                    placeholder="Enter name here.." 
                    // value={productName}
                    // onChangeText={text => setProductName(text)}
                />

                

                <Text style={styles.Text}>Price</Text>
                <TextInput 
                    style={{
                        backgroundColor: "white",
                        borderWidth: 1,
                        borderColor: "#D1D1D1",
                        borderRadius: 5,
                        padding: 10,
                        marginTop: 8,
                        marginBottom: 12,
                        fontFamily: 'GothamLight', 
                        fontSize: 14
                    }}
                    placeholder="694.20" 
                    // value={amount}
                    // onChangeText={text => setAmount(text)}
                />

                <Text style={styles.Text}>Category</Text>
                    <TextInput 
                        style={{
                            backgroundColor: "white",
                            borderWidth: 1,
                            borderColor: "#D1D1D1",
                            borderRadius: 5,
                            padding: 10,
                            marginTop: 8,
                            marginBottom: 12,
                            fontFamily: 'GothamLight', 
                            fontSize: 14
                        }}
                        placeholder="beverages" 
                        // value={amount}
                        // onChangeText={text => setAmount(text)}
                />


                <Text style={styles.Text}>Image URL</Text>
                    <TextInput 
                        style={{
                            backgroundColor: "white",
                            borderWidth: 1,
                            borderColor: "#D1D1D1",
                            borderRadius: 5,
                            padding: 10,
                            marginTop: 8,
                            marginBottom: 12,
                            fontFamily: 'GothamLight', 
                            fontSize: 14
                        }}
                        placeholder="http:///" 
                        // value={amount}
                        // onChangeText={text => setAmount(text)}
                />


                <TouchableOpacity 
                    style={{paddingTop: 10,marginTop: 10, marginBottom: 20}}
                    // onPress={() => {

                    //     pick()
                        
                    // }}
                >
                    <View style={styles.button}>
                        <Text style={{color: "white", textAlign: "center", fontFamily: 'GothamMedium'}}>Add Product</Text>
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
