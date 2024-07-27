"use client";

import Search from "@/components/search";
import Link from "next/link";
import { Provider } from "react-redux";
import { store } from "./store";

export function  Providers({ children }) {
  return (
    <Provider store={store}>
      <div className="layout-main-container">
        <div className="columns">
          <div className="column is-2">
            <Link href="/">
              <h1 className="title is-1 main-title">NICKFLIX</h1>
            </Link>
          </div>
          <div className="column">
            <Search />
          </div>
        </div>
        {children}
      </div>
    </Provider>
  );
};
