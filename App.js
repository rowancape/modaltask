import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';

export default function App() {
  
  const [modalVisible, setModalVisible] = useState(false);
  
  return (

    <View style={styles.centeredView}>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>This is modal...</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={[styles.textStyle, styles.textStyleClosed]}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={[styles.textStyle, styles.textStyleOpen]}>Show modal message</Text>
      </Pressable>
      
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#efefef',
    borderRadius: 20,
    padding: 75,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderWidth: 7,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#005502',
    borderColor: "#00b404",
  },
  buttonClose: {
    backgroundColor: '#5f1600',
    borderColor: "#df3500",
  },
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textStyleOpen: {
    color: "#00fe05",
  },
  textStyleClosed: {
    color: "#ff3d00",
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
