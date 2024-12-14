import api from "../../utils/api";
import ActionTypes from "../reducers/actionTypes";
import { v4 } from "uuid";

//* Sepetteki elemanları alan Thunk Aksiyonu
export const getCart = () => (dispatch) => {
  dispatch({
    type: ActionTypes.CART_LOADING,
  });

  api
    .get("/cart")
    .then((res) =>
      dispatch({
        type: ActionTypes.CART_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: ActionTypes.CART_ERROR,
        payload: err.message,
      })
    );
};

//* Sepete yeni eleman ekleyen thunk aksiyonu
export const addToBasket = (product) => (dispatch) => {
  //1) sepete eklenilecek ürünün bilgilerini belirle
  const newItem = {
    id: v4(),
    productId: product.id,
    title: product.title,
    price: product.price,
    photo: product.photo,
    amount: 1,
  };

  //2) api'a sepete elemanı eklemek için istek at
  api
    .post("/cart", newItem)
    // istek başarılı olursa reducer a haber ver
    .then(() =>
      dispatch({
        type: ActionTypes.ADD_TO_BASKET,
        payload: newItem,
      })
    );
};

//* Sepetteki elemanın miktarını güncelleyen Thunk Aksiyonu
export const updateItem = (id, newAmount) => (dispatch) => {
  api.patch(`/cart/${id}`, { amount: newAmount }).then((res) =>
    //* İstek başarılı olursa reducer'a güncellemeyi haber ver
    dispatch({
      type: ActionTypes.UPDATE_ITEM,
      payload: res.data,
    })
  );
};

//* Sepetteki elemanı kaldıran thunk aksiyonu
export const deleteItem = (id) => (dispatch) => {
    // api'a silmek için istek at
  api.delete(`cart/${id}`).then(() =>
    // başarılı olursa reducer'a elemanın silinme haberini gönder
    dispatch({
      type: ActionTypes.DELETE_ITEM,
      payload: id,
    })
  );
};
