import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {updateExpense, deleteExpense} from '../actions/ExpenseActions';

const ExpenseItem = ({expense}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState(expense.title);
  const [description, setDescription] = useState(expense.description);
  const [date, setDate] = useState(expense.date);
  const [type, setType] = useState(expense.type);
  const [amount, setAmount] = useState(expense.amount);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleEdit = () => {
    if (!title || !description || !date || !type || !amount) {
      Alert.alert('Vui lòng nhập đầy đủ thông tin!');
      return;
    }
    const updatedExpense = {
      id: expense.id,
      title,
      description,
      date,
      type,
      amount,
    };
    dispatch(updateExpense(updatedExpense));
    toggleModal();
  };

  const handleDelete = () => {
    dispatch(deleteExpense(expense.id));
    Alert.alert('Xoá thành công!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentItem}>
        <Text style={styles.title}>Tiêu đề: {expense.title}</Text>
        <Text>Mô tả: {expense.description}</Text>
        <Text>Ngày thu chi: {expense.date}</Text>
        <Text>Loại thu chi: {expense.type}</Text>
        <View style={styles.priceContainer}>
          <Text>Số tiền: </Text>
          <Text style={styles.price}>{expense.amount + '$'}</Text>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnEdit} onPress={toggleModal}>
          <Text style={{color:"red",fontWeight:"bold",margin:10}}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnDeleteContainer}
          onPress={handleDelete}>
          <Text style={styles.btnDelete}>Delete</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={isModalVisible} animationType="fade" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Tiêu đề"
              value={title}
              onChangeText={setTitle}
            />
            <TextInput
              style={styles.input}
              placeholder="Mô tả"
              value={description}
              onChangeText={setDescription}
            />
            <TextInput
              style={styles.input}
              placeholder="Ngày thu chi"
              value={date}
              onChangeText={setDate}
            />
            <TextInput
              style={styles.input}
              placeholder="Loại thu chi"
              value={type}
              onChangeText={setType}
            />
            <TextInput
              style={styles.input}
              placeholder="Số tiền"
              value={amount.toString()}
              onChangeText={setAmount}
              keyboardType="numeric"
            />
            <TouchableOpacity style={styles.button} onPress={handleEdit}>
              <Text style={styles.buttonText}>Lưu</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnClose} onPress={toggleModal}>
              <Text style={styles.btnCloseText}>X</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    padding: 16,
    margin: 10,
    flexDirection: 'row',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#404040',
  },
  priceContainer: {
    flexDirection: 'row',
  },
  price: {
    color: 'red',
    fontStyle: 'italic',
  },
  contentItem: {
    flex: 1,
  },
  btnDelete: {
    color:"red",fontWeight:"bold"
    ,margin:10
  },
  // btnDeleteContainer: {
  //   width: 24,
  //   height: 24,
  //   borderRadius: 20,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   textAlign: 'center',
  // },
  // btnContainer: {
  //   flexDirection: 'row',
  // },
  
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 16,
    paddingVertical: '40%',
  },
  modalContent: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
  },
  btnClose: {
    backgroundColor: 'gray',
    borderRadius: 4,
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
  },
  btnCloseText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    height: 50,
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'pink',
    borderRadius: 4,
    padding: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
