import { create } from "zustand";
import { Car } from "../../models";

type ModalState = {
    isOpen: boolean;
    carDetails: Car | null;
    openModal: (car: Car) => void;
    closeModal: () => void;
  };
  
 export const useModalWindow= create<ModalState>((set) => ({
    isOpen: false,
    carDetails: null,
    openModal: (car) => set({ isOpen: true, carDetails: car }),
    closeModal: () => set({ isOpen: false, carDetails: null }),
  }));