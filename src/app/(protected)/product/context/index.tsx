import { type ReactNode } from "react";
import { ProductReducer } from "./reducer";
import { createContextProvider } from "@src/common/components/localStorageContext/provider";
import { type LoadFromStorage } from "@src/common/components/localStorageContext/constant";

export const createProduct = "createProduct";

export interface ProductState {
  brandId?: number
  productId?: number

}
type ProductActionType = "setBrandId" | "setProductId" | typeof LoadFromStorage | "clearState";

export interface ProductAction {
  type: ProductActionType
  payload: number | boolean | ProductState
  payloadType?: string
}

const { LocalStorageProvider, useLocalStorageContext } = createContextProvider<
ProductState,
ProductAction
>({
  reducer: ProductReducer,
  initialState: { },
});

export const ProductProvider: React.FC<{ children: ReactNode, storageKeys: string }> = ({ children, storageKeys }) => {
  return (
    <LocalStorageProvider storageKey={storageKeys}>
      {children}
    </LocalStorageProvider>
  );
};

export const useProductContext = useLocalStorageContext;
