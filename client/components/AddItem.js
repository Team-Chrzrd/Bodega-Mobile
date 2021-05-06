import React, { useState } from 'react';
import {StyleSheet, Text, View, Pressable, Modal} from 'react-native';
import tailwind from 'tailwind-rn';

export default function AddItem() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* <AddUpdateForm /> */}
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
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

    // {/* <Modal
    //     animationType="none"
    //     transparent={true}
    //     visible={modalVisible}
    //     onRequestClose={() => {
    //       setModalVisible(!modalVisible);
    //     }}
    //   >   
    //     <Pressable
    //       style={tailwind(
    //         'items-center px-5 py-2 border border-transparent rounded-md bg-blue-700',
    //       )}
    //       onPress={() => setModalVisible(true)}
    //       >
    //       <Text style={tailwind('text-white text-base font-medium')}>
    //         Add Item
    //       </Text>
    //     </Pressable>
    //   </Modal>
    // </View> */}
    
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
