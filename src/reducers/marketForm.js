import { nanoid } from "nanoid";
import {
  CHANGE_PRODUCT_FORM,
  RESET_PRODUCT_FORM,
} from "../actions/actionsType";

const initial_state = {
  title: "",
  price: "",
  discount: "",
  image: `https://avatars.mds.yandex.net/i?id=512aeb885a5bc4e6ee16b7cc5d129c207cf792f4-9849900-images-thumbs&n=13${nanoid(5)}`,
};

export default function marketFormReducer(state = initial_state, action) {
  switch (action.type) {
    case CHANGE_PRODUCT_FORM:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    case RESET_PRODUCT_FORM:
      return initial_state;
    default:
      return state;
  }
}
