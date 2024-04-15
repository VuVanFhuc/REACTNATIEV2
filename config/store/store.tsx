import {configureStore, createSlice} from '@reduxjs/toolkit';
import uri from '../uri/uri';

export const SliceThietBi = createSlice({
  name: 'thietBi',
  initialState: {
    items: [] as any[],
  },
  reducers: {
    addItem: (state, action) => {
      let found = 0;
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].id === action.payload.id) {
          found = 1;
          break;
        }
      }
      if (found === 0) {
        state.items.push(action.payload);
      }
    },
  },
  extraReducers(builder) {},
});
export const SliceCart = createSlice({
  name: 'cart',
  initialState: {
    items: [] as any[],
  },
  reducers: {
    addItemsCart: (state, action) => {
      state.items.push(action.payload);
    },
    updateItemCart: (state, action) => {
      const data = action.payload;

      const updateItemCart = state.items.find(row => row.id === data.id);

      if (updateItemCart) {
        updateItemCart.ten_thietbi_ph34559 = data.ten_thietbi_ph34559;
        updateItemCart.hinh_anh_ph34559 = data.ten_thietbi_ph34559;
        updateItemCart.ngay_nhap_ph34559 = data.ngay_nhap_ph34559;
        updateItemCart.trang_thai_ph34559 = data.trang_thai_ph34559;
        updateItemCart.mota_ph34559 = data.mota_ph34559;
      }
    },
  },
});

export const fetchAPI = () => {
  return async (dispatch: any) => {
    try {
      const res = await fetch(uri);
      const data = await res.json();
      console.log(data);
      data.forEach((row: any) => {
        dispatch(addItem(row));
      });
    } catch (error) {
      console.log('return  error:', error);
    }
  };
};

export const store = configureStore({
  reducer: {
    thietBi: SliceThietBi.reducer,
    cart: SliceCart.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const {addItem} = SliceThietBi.actions;
export const {addItemsCart} = SliceCart.actions;
