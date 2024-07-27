"use client";

import { configureStore } from "@reduxjs/toolkit";
import showContentReducer from "./Features/showContent/showContentSlice";

export const store = configureStore({
  reducer: {
    showContent: showContentReducer
  },
});
