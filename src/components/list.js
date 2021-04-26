import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { displayFooditems } from "../store/fooditems";
const ConnectedList = () => {
  const { fooditems } = useSelector((state) => state.fooditems);
  return (
    <React.Fragment>
      <ul>{console.log(displayFooditems(fooditems))}</ul>
    </React.Fragment>
  );
};

//We return a plain object from our action creators.

// mapStateToProps = state => {
//   return {
//     someProp: state.someProp,
//     anotherProp: state.anotherProp
//   };
// };
export default ConnectedList;
