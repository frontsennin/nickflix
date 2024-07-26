"use client";

import CatalogComponent from "@/components/catalog.component";

export default function Home() {
  return (
    <div className="layout-main-container">
      <h1 className="title is-1 has-text-danger	">NICKFLIX</h1>
      <CatalogComponent />
    </div>
  );
}
