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
import {
  updateExpense,
  deleteExpense,
  deleteExpenseSuccess,
  updateExpenseSuccess,
} from '../actions/ExpenseActions';
import {deleteExpenseData, updateExpenseData} from '../screens/Controller';

const ExpenseItem = ({expense, onDelete, onUpdate}) => {
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
      title,
      description,
      date,
      type,
      amount,
    };
    const handleUpdateExpense = (expenseId, expenseUpdate) => {
      dispatch(updateExpenseSuccess(expenseId, expenseUpdate));
      Alert.alert('Cập nhật thành công!');
    };
    updateExpenseData(expense.id, updatedExpense, handleUpdateExpense);
    toggleModal();
  };

  const handleDelete = () => {
    onDelete(expense.id);
  };

  const handleUpdate = () => {
    if (!title || !description || !date || !type || !amount) {
      Alert.alert('Vui lòng nhập đầy đủ thông tin!');
      return;
    }
    const updatedExpense = {
      title,
      description,
      date,
      type,
      amount,
    };
    onUpdate(expense.id, updatedExpense);
    toggleModal();
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
          <Image source={require('../assets/ic_pen.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnDeleteContainer}
          onPress={handleDelete}>
          <Text style={styles.btnDelete}>-</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={isModalVisible} animationType="fade" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.titleModel}>Cập nhật chi tiêu</Text>
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
            <TouchableOpacity style={styles.button} onPress={handleUpdate}>
              <Text style={styles.buttonText}>Lưu</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnClose} onPress={toggleModal}>
              <Text style={styles.btnCloseText}>Đóng</Text>
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
    fontSize: 20,
    color: '#fff',
  },
  btnDeleteContainer: {
    backgroundColor: 'orange',
    width: 24,
    height: 24,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
  },
  btnEdit: {
    width: 24,
    height: 24,
    resizeMode: 'cover',
    marginRight: 5,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 16,
    paddingVertical: '45%',
  },
  modalContent: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
  },
  titleModel: {
    fontSize: 20,
    fontWeight: '600',
    padding: 10,
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
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
    backgroundColor: '#007AFF',
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
