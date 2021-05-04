import React from 'react';
import {StyleSheet, Text, View, Button, Pressable} from 'react-native';
import tailwind from 'tailwind-rn';
// import AddBuyButton from '../../../../../Bodega/client/components/ShoppingContainer/AddBuyButton';
// import AddListButton from '../../../../../Bodega/client/components/ShoppingContainer/AddListButton';
// import DeleteButton from '../../../../../Bodega/client/components/ShoppingContainer/DeleteButton';
// import MinusBuyButton from '../../../../../Bodega/client/components/ShoppingContainer/MinusBuyButton';
// import MinusListButton from '../../../../../Bodega/client/components/ShoppingContainer/MinusListButton';
// import UpdateButton from '../../../../../Bodega/client/components/ShoppingContainer/UpdateButton';

export default function ShoppingItem({itemDetails}) {
    const {category, item_name, list_qty, buy_qty, unit, _id, pantry_par, pantry_qty} = itemDetails;

    return (
        <View style={tailwind("flex flex-row justify-between px-4 py-4")}>
            <View style={tailwind("flex flex-col items-center justify-between w-1/4")}>
                <Text style={tailwind("flex items-center text-sm text-gray-500")}>{category}</Text>
                <Text style={tailwind("text-lg font-bold text-blue-700")}>{item_name}</Text>
            </View>  

            <View style={tailwind("flex flex-row justify-around w-2/5")}>
                <View style={tailwind("flex flex-col justify-center items-center mt-2")}>
                    <Text>Cart Qty</Text>
                    <View style={tailwind("flex flex-row justify-center items-center")}>
                        <Text style={tailwind("text-3xl font-semibold text-blue-700")}>{buy_qty}</Text>
                        <Text style={tailwind("ml-3")}>{unit}</Text>
                    </View>
                    <View style={tailwind("flex flex-row")}>
                        {/* <MinusBuyButton id={_id} /> */}
                        {/* <AddBuyButton id={_id} /> */}
                    </View>
                </View>

                <View style={tailwind("flex flex-col justify-center items-center mt-2")}>
                    <Text>Required Qty</Text>
                    <View style={tailwind("flex flex-row justify-center items-center")}>
                        <Text style={tailwind("text-3xl font-semibold text-blue-700")}>{list_qty}</Text>
                        <Text style={tailwind("ml-3")}>{unit}</Text>    
                    </View>
                    
                    <View style={tailwind("flex flex-row")}>
                        {/* <MinusListButton id={_id} /> */}
                        {/* <AddListButton id={_id} /> */}
                    </View>
                </View>
            </View>

            <View style={tailwind("flex flex-col justify-center items-center mt-2 pr-5")}>
                {/* <UpdateButton item={item} /> */}
                {/* <DeleteButton id={_id} /> */}
            </View>
        </View>
    )  
}
