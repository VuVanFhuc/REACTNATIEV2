import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
  Button,
} from 'react-native';
import ExpenseItem from '../components/ExpenseItem';
import {useSelector, useDispatch} from 'react-redux';
import {
  fetchExpensesSuccess,
  createExpenseSuccess,
  deleteExpenseSuccess,
  updateExpenseSuccess,
} from '../actions/ExpenseActions';
import {
  addExpenseData,
  deleteExpenseData,
  getExpressData,
  updateExpenseData,
} from './Controller';
const ExpenseListScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [amount, setAmount] = useState('');

  const dispatch = useDispatch();
  const expenses = useSelector(state => state.expenses.expenses);

  useEffect(() => {
    const handleFetchExpenses = data => {
      dispatch(fetchExpensesSuccess(data));
    };

    getExpressData(handleFetchExpenses);
  }, [dispatch]);

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
      <FlatList
        data={expenses}
        keyExtractor={expense => expense.id.toString()}
        renderItem={({item}) => (
          <ExpenseItem
            expense={item}
            onDelete={handleDeleteExpense}
            onUpdate={handleUpdateExpense}
          />
        )}
        extraData={expenses}
      />
      <TouchableOpacity style={styles.btnAdd} onPress={toggleModal}>
        <Text style={styles.btnText}>+</Text>
      </TouchableOpacity>
      <Modal visible={isModalVisible} animationType="fade" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.titleModel}>Thêm chi tiêu</Text>
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
            />
            <TouchableOpacity style={styles.button} onPress={handleSave}>
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
