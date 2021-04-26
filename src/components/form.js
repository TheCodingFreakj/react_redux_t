import React from "react";
import { useDispatch } from "react-redux";
import { addonFooditems } from "../store/fooditems";
const ConnectedForm = () => {
  const [title, settitle] = React.useState("");
  const onChange = (e) => {
    settitle(e.target.value);
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addonFooditems(title));
    settitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title} // grab the init value from formData
          onChange={onChange}
        />
      </div>
      <button type="submit">SAVE</button>
    </form>
  );
};

export default ConnectedForm;
//https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-an-object
//If you wish to set tracking information for this branch you can do so with:
//git branch --set-upstream-to=origin/<branch> development
// Once you have connected your component in this way,
// your component receives props.dispatch
//You may use it to dispatch actions to the store.

// function Counter({ count, dispatch }) {
//   return (
//     <div>
//       <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
//       <span>{count}</span>
//       <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
//       <button onClick={() => dispatch({ type: 'RESET' })}>reset</button>
//     </div>
//   )
// }
// Providing a mapDispatchToProps allows you to specify which actions your component might need to dispatch. I
// Therefore, instead of calling props.dispatch(() => increment()), you may call props.increment() directly.

//React Redux gives you two ways to let components dispatch actions:
//By default, a connected component receives props.dispatch and can dispatch actions itself.
//connect can accept an argument called mapDispatchToProps
//lets you create functions that dispatch when called, and pass those functions as props to your componen
