import { createSlice } from "@reduxjs/toolkit";

const foodslice = createSlice({
  name: "fooditems",
  initialState: {
    fooditems: [],
  },
  reducers: {
    addFooditems: (state, action) => {
      state.fooditems = action.payload;
    },

    showFooditems: (state, action) => {
      state.fooditems = action.payload;
    },
    updateFooditems: (state, action) => {
      state.fooditems = action.payload;
    },

    deleteFooditems: (state, action) => {
      state.fooditems = action.payload;
    },
  },
});
export default foodslice.reducer;

//Actions
const {
  addFooditems,
  showFooditems,
  updateFooditems,
  deleteFooditems,
} = foodslice.actions;

export const addonFooditems = ({ title }) => async (dispatch) => {
  try {
    // const res = await api.post('/api/auth/login/', { username, password })
    dispatch(addFooditems({ title }));
  } catch (e) {
    return console.error(e.message);
  }
};

export const displayFooditems = ({ title }) => async (dispatch) => {
  try {
    // const res = await api.post('/api/auth/login/', { username, password })
    dispatch(showFooditems({ title }));
  } catch (e) {
    return console.error(e.message);
  }
};

//   https://blog.bitsrc.io/simplifying-redux-with-redux-toolkit-6236c28cdfcb
//https://blog.logrocket.com/smarter-redux-with-redux-toolkit/
// https://www.softkraft.co/how-to-setup-redux-with-redux-toolkit/#how-to-setup-create-react-app-with-redux
// https://medium.com/the-andela-way/why-you-should-use-redux-toolkit-2b73a8e2f75a
