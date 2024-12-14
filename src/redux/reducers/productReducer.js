const initialState = {
    products: [],
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case "x":
        return state;
  
      case "y":
        return state;
  
      case "z":
        return state;
  
      default:
        return state;
    }
  };
  
  export default productReducer;
  