import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image , TextInput} from 'react-native';
import Orders from './Orders'
import AddItem from './AddItem'
import Support from './Support'


export default function Owner() {

    const [viewMode, setViewMode] = useState("orders");

    

    useEffect(()=>{
        // fetchCategory(),
        // fetchData(),
        // fetchExpense(),
        // LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    },[])

    return (
        <View>
        <View style={{ flex: 1, justifyContent: 'center', padding: 24, marginTop: 30, marginBottom: 20}}>
                <View style={{ flexDirection: 'row', height: 55, backgroundColor: "#ECECEC", borderRadius: 8 }}>
                            
                        <TouchableOpacity
                            style={{ 
                                flex: 1,
                                backgroundColor: viewMode === "orders" ? "#999999" : null, 
                                margin: 5,
                                borderRadius: 8,
                            }}
                            onPress={() => setViewMode("orders")}
                        >
                            <View
                                    style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                <Text style={{ marginLeft: 0, fontSize: 16, fontFamily: 'GothamMedium', lineHeight: 22, color: "black" }}>Orders</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ 
                                flex: 1,
                                backgroundColor: viewMode === "add" ? "#999999" : null, 
                                margin: 5,
                                borderRadius: 8,
                            }}
                            onPress={() => setViewMode("add")}
                        >
                                <View
                                    style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Text style={{ marginLeft: 0, fontSize: 16, fontFamily: 'GothamMedium', lineHeight: 22, color: "black" }}>Add Items</Text>
                                </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ 
                                flex: 1,
                                backgroundColor: viewMode === "support" ? "#999999" : null, 
                                margin: 5,
                                borderRadius: 8,
                            }}
                            onPress={() => setViewMode("support")}
                        >
                            <View
                                    style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                <Text style={{ marginLeft: 0, fontSize: 16, fontFamily: 'GothamMedium', lineHeight: 22, color: "black" }}>Support</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>  

                {viewMode === "orders" && <Orders />}
                {viewMode === "add" && <AddItem />}
                {viewMode === "support" && <Support />}
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
