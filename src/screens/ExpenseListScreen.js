import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Modal, TextInput, Alert } from 'react-native';
import ExpenseItem from '../components/ExpenseItem';
import { useSelector, useDispatch } from 'react-redux';
import { fetchExpensesSuccess, createExpenseSuccess, deleteExpenseSuccess, updateExpenseSuccess } from '../actions/ExpenseActions';
import { addExpenseData, deleteExpenseData, getExpressData, updateExpenseData } from './Controller';

const ExpenseListScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [amount, setAmount] = useState('');
  const [timKiem, settimKiem] = useState('');

  const dispatch = useDispatch();
  const expenses = useSelector(state => state.expenses.expenses);

  useEffect(() => {
    const handleFetchExpenses = data => {
      dispatch(fetchExpensesSuccess(data));
    };

    getExpressData(handleFetchExpenses);
  }, [dispatch]);

  // Filter the expenses based on the search term
  const filteredExpenses = expenses.filter(expense => {
    return expense.title.toLowerCase().includes(timKiem.toLowerCase());
  });

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
      id: String(expenses.length + 1),
      title,
      description,
      date,
      type,
      amount: parseFloat(amount),
    };
    const handleAddExpenses = data => {
      dispatch(createExpenseSuccess(data));
    };

    addExpenseData(expense, handleAddExpenses);
    toggleModal();
  };

  const handleDeleteExpense = expenseId => {
    deleteExpenseData(expenseId, expenseId => {
      dispatch(deleteExpenseSuccess(expenseId));
      Alert.alert('Xoá thành công!');
    });
    const handleFetchExpenses = data => {
      dispatch(fetchExpensesSuccess(data));
    };

    getExpressData(handleFetchExpenses);
  };

  const handleUpdateExpense = (expenseId, ExpenseUpdate) => {
    updateExpenseData(expenseId, ExpenseUpdate, expenseId => {
      dispatch(updateExpenseSuccess(expenseId, ExpenseUpdate));
      Alert.alert('Cập nhật thành công!');
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Danh sách chi tiêu</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={settimKiem}
        placeholder='Tìm kiếm'
      />
      <FlatList
        data={filteredExpenses}
        keyExtractor={expense => expense.id.toString()}
        renderItem={({item}) => (
          <ExpenseItem
            expense={item}
            onDelete={handleDeleteExpense}
            onUpdate={handleUpdateExpense}
          />
        )}
        extraData={filteredExpenses} // Ensure list updates when the filter changes
      />
      <TouchableOpacity style={styles.btnAdd} onPress={toggleModal}>
        <Text style={styles.btnText}>+</Text>
      </TouchableOpacity>
      <Modal visible={isModalVisible} animationType="fade" transparent>
        {/* Your modal content */}
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
    backgroundColor: '#cce1f0',
    width: '100%',
    height: 100,
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
    backgroundColor: '#0e6fc4',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    height: 50,
    marginBottom: 10,
    marginLeft: 16,
    marginRight: 16,
  },
});
