import {configureStore, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import uri from '../config/uri';

export const CarSlice = createSlice({
  name: 'car',
  initialState: {
    items: [] as any[],
  },
  reducers: {
    addItems: (state, action) => {
      let found = 0;
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].id == action.payload.id) {
          found = 1;
          break;
        }
      }
      if (found == 0) {
        state.items.push(action.payload);
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(createCar.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(createCar.rejected, (state, action) => {
        console.log(action.error.message);
      });
    builder
      .addCase(deleteCar.fulfilled, (state, action) => {
        state.items = state.items.filter(row => row.id !== action.payload.id);
      })
      .addCase(deleteCar.rejected, (state, action) => {
        console.log(action.error.message);
      });
    builder
      .addCase(updateCar.fulfilled, (state, action) => {
        const data = action.payload;
        const updateCar = state.items.find(row => row.id === data.id);

        if (updateCar) {
          updateCar.ten_xe_ph34559 = data.ten_xe_ph34559;
          updateCar.mau_sac_ph34559 = data.mau_sac_ph34559;
          updateCar.gia_ban_ph34559 = data.gia_ban_ph34559;
          updateCar.mo_ta_ph34559 = data.mo_ta_ph34559;
          updateCar.hinh_anh_ph34559 = data.hinh_anh_ph34559;
        }
      })
      .addCase(updateCar.rejected, (state, action) => {
        console.log(action.error.message);
      });
  },
});

export const fetchAPI = () => {
  return async (dispatch: any) => {
    try {
      const res = await fetch(uri);
      const data = await res.json();

      console.log(data);
      data.forEach((row: any) => {
        dispatch(addItems(row));
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createCar = createAsyncThunk(
  'tb_car/createCar',
  async (obj:any, thunkAPI) => {
    try {
      const res = await fetch(uri, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
      });

      const data = await res.json();

      if (res.ok) {
        return data;
      } else {
        return thunkAPI.rejectWithValue('erro');
      }
    } catch (error) {
      console.log('CreateCar  error:', error);
    }
  },
);
export const deleteCar = createAsyncThunk(
  'tb_car/deleteCar',
  async (id: any, thunkAPI) => {
    try {
      const res = await fetch(`${uri}/${id}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();

      if (res.ok) {
        return data;
      } else {
        return thunkAPI.rejectWithValue('ERRO');
      }
    } catch (error) {
      console.log('deleteCar  error:', error);
    }
  },
);
export const updateCar = createAsyncThunk(
  'tb_car/updateCar',
  async (obj: any, thunkAPI) => {
    try {
      const res = await fetch(`${uri}/${obj.id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj.data),
      });
      const data = await res.json();

      if (res.ok) {
        return data;
      } else {
        return thunkAPI.rejectWithValue('erro');
      }
    } catch (error) {
      console.log('updateCar  error:', error);
    }
  },
);

export const store = configureStore({
  reducer: {
    car: CarSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const {addItems} = CarSlice.actions;
