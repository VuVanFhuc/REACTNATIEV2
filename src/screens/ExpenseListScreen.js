import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
} from 'react-native';
import ExpenseItem from '../components/ExpenseItem';
import { useSelector, useDispatch } from 'react-redux';
import {
  addExpense,
  deleteExpense,
  updateExpense,
} from '../actions/ExpenseActions';

const ExpenseListScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [amount, setAmount] = useState('');
  const [searchText, setSearchText] = useState('');

  const expenses = useSelector(state => state.expenses.expenses);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    setTitle('');
    setDescription('');
    setDate('');
    setType('');
    setAmount('');
  };

  const handleSave = () => {
    if (!title || !description || !date || !type || !amount) {
      Alert.alert('Vui lòng nhập đầy đủ thông tin!');
      return;
    }
    const expense = {
      id: expenses.length + 1,
      title,
      description,
      date,
      type,
      amount: parseFloat(amount),
    };
    dispatch(addExpense(expense));
    toggleModal();
  };

  const handleDelete = expenseId => {
    dispatch(deleteExpense(expenseId));
  };

  const handleUpdate = expense => {
    dispatch(updateExpense(expense));
  };

  const filteredExpenses = expenses.filter(expense =>
    expense.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>DANH SÁCH CHI TIÊU </Text>
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder='Tìm kiếm'
        onChangeText={setSearchText}
        value={searchText}
      />
      <FlatList
        data={filteredExpenses}
        keyExtractor={expense => expense.id.toString()}
        renderItem={({ item }) => (
          <ExpenseItem
            expense={item}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        )}
      />
      <TouchableOpacity style={styles.btnAdd} onPress={toggleModal}>
        <Text style={styles.btnText}>Add</Text>
      </TouchableOpacity>
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
              value={amount}
              onChangeText={setAmount}
              keyboardType="numeric"
            />
            <TouchableOpacity style={styles.button} onPress={handleSave}>
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

export default ExpenseListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    backgroundColor: 'pink',
    width: '100%',
    height: 50,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#404040',
  },
  btnAdd: {
    position: 'absolute',
    bottom: 50,
    right: 40,
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  },
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
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    height: 50,
    margin:10
  },
});
