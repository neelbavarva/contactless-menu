import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image , TextInput, LogBox, Alert} from 'react-native';
import Orders from './Orders'
import AddItem from './AddItem'
import Support from './Support'
import * as myConstClass from '../../HttpLink';

export default function Owner({ownerId}) {

    const [viewMode, setViewMode] = useState("orders");
    const [orders, setOrders] = useState([]);
    
    const fetchOrders = () => {
        fetch(`${myConstClass.HTTP_LINK}/getOrders/${ownerId}`)
        .then(res=>res.json())
        .then(results=>{
            console.log(JSON.stringify(results));
            console.log("All Orders received.");
            setOrders(results)
        }).catch(err=>{
            console.log("Yo Bitch, got Error while receiving categoriesData in Home.js\n"+err)
        })
    }

    useEffect(()=>{
        fetchOrders(),
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    },[])

    const deleteItemButtonHandler = (id) => {
        console.log("Konsi id ja rhi hai :-", id);
        fetch(`${myConstClass.HTTP_LINK}/deleteOrder/${id}`,{
            method:"delete",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                id: id
            })
        })
        .then(res=>res.json())
        .then(data=>{
            Alert.alert(`Selected Order has been deleted`)
        })
        .then(() => {
            fetchOrders();
        })
        .catch(err=>{
            Alert.alert("Some Error while Deleting the Order...")
            console.log(err.message);
        });
    }

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

                {viewMode === "orders" && <Orders orders={orders} deleteItemButtonHandler={deleteItemButtonHandler} />}
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
