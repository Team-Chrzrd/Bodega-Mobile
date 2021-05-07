import React, { useState } from 'react';
import {StyleSheet, Text, View, Pressable, Modal} from 'react-native';
import tailwind from 'tailwind-rn';
import AddUpdateForm from './AddUpdateForm';

export default function AddItem({type}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal
       style={tailwind(
        'flex justify-center items-center mt-2 bg-white opacity-80',
      )}
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View  style={tailwind('flex mt-2')}>
          <View style={tailwind('mt-2 px-4 py-4')}>
            <AddUpdateForm type={type} hideModal={setModalVisible}/>
          </View>
        </View>
      </Modal>
      <Pressable
           style={tailwind(
            'items-center px-5 py-2 border border-transparent rounded-md bg-blue-700',
          )}
          onPress={() => setModalVisible(true)}
          >
          <Text style={tailwind('text-white text-base font-medium')}>
            Add Item
          </Text>
      </Pressable>
    </View>
  );
};

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 22
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 35,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2
//   },
//   buttonOpen: {
//     backgroundColor: "#F194FF",
//   },
//   buttonClose: {
//     backgroundColor: "#2196F3",
//   },
//   textStyle: {
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center"
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: "center"
//   }
// });
