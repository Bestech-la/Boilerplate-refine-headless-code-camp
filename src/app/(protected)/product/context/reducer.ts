import { LoadFromStorage } from "@src/common/components/localStorageContext/constant";
import { type CustomerAction, type ProductState } from ".";

export const ProductReducer = (
  state: ProductState = initialCustomerState,
  action: CustomerAction,
): ProductState => {
  switch (action.type) {
    case "setBrandId":
      return { ...state, brandId: action.payload as number };
    case "setProducqtId":
      return { ...state, productId: action.payload as number };
    case LoadFromStorage:
      return { ...(action.payload as ProductState) };
    case "clearState":
      return { ...initialCustomerState };
    default:
      return state;
  }
};

export const initialCustomerState: ProductState = {
  brandId: 0,
  productId: 0,
};
