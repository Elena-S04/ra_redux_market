import { nanoid } from "nanoid";
import { ADD_PRODUCT } from "../actions/actionsType";

const initial_state = [
  {
    id: nanoid(),
    title: "Зайка",
    price: 650,
    discount: 480,
    image: `https://avatars.mds.yandex.net/i?id=73ad4798f2582344f5435f3bbda6538542164658-8922087-images-thumbs&n=13${nanoid(5)}`,
  },
  {
    id: nanoid(),
    title: "Собачка",
    price: 870,
    discount: 700,
    image: `https://avatars.mds.yandex.net/i?id=cce4d6b8321dfc4989d9b767b576e20d9b05032a-10702479-images-thumbs&n=13${nanoid(5)}`,
  },
  {
    id: nanoid(),
    title: "Мишка",
    price: 320,
    discount: 245,
    image: `https://avatars.mds.yandex.net/i?id=c169d542630fb32e2ed4bed5568729ea65d9fd7f-9844228-images-thumbs&n=13${nanoid(5)}`,
  },
  {
    id: nanoid(),
    title: "Енотик",
    price: 570,
    discount: 0,
    image: `https://avatars.mds.yandex.net/i?id=765ff140bbf9e0f1283a24bdc0d1bdd4532ed161-9161202-images-thumbs&n=13${nanoid(5)}`,
  },
];

export default function marketListReducer(state = initial_state, action) {
  switch (action.type) {
    case ADD_PRODUCT: {
      const { title, price, discount, image } = action.payload;
      return [
        ...state,
        {
          id: nanoid(),
          title,
          price: Number(price),
          discount: Number(discount),
          image,
        },
      ];
    }
    default:
      return state;
  }
}
