import React, {useState} from 'react';
import {Text, View, Pressable, Modal} from 'react-native';
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
        }}>
        <View style={tailwind('flex mt-2')}>
          <View style={tailwind('mt-2 px-4 py-4')}>
            <AddUpdateForm type={type} hideModal={setModalVisible} />
          </View>
        </View>
      </Modal>
      <Pressable
        style={tailwind(
          'items-center px-5 py-2 border border-transparent rounded-md bg-blue-700',
        )}
        onPress={() => setModalVisible(true)}>
        <Text style={tailwind('text-white text-base font-medium')}>
          Add Item
        </Text>
      </Pressable>
    </View>
  );
}
