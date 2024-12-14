import { applyMiddleware, combineReducers, createStore } from "redux";
import productReducer from "./reducers/productReducer";
import restaurantReducer from "./reducers/restaurantReducer";
import cartReducer from "./reducers/cartReducer";
import { thunk } from "redux-thunk";

// reducer'ları birleştir
const rootReducer = combineReducers({
  product: productReducer,
  restaurant: restaurantReducer,
  cart: cartReducer,
});

/*
 * applyMiddleware herhangi bir arayazılımı redux'a dahil etmeye yarar.
 * biz burada thunk'u dahil etmek için kullancaz
 */

// store'u oluştur
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
