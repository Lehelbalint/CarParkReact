import { create } from "zustand";
import { Car } from "../../models";
import Basket from "../navigation/basket";

type BasketState = {
    items: Car[];
    addToBasket: (car: Car) => void;
    removeFromBasket: (car: Car) => void;
  };
  
  export const useBasketStore = create<BasketState>((set) => ({
    items: [],
    addToBasket: (car: Car) => set((state) => ({ items: [...state.items, car] })),
    removeFromBasket: (car: Car) => set((state) => ({
      items: state.items.filter(item => item.vin !== car.vin)
    })),
  }));