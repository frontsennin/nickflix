"use client";

import { discoverTv } from "@/services/tmdb";
import { useEffect, useState } from "react";

export default function DiscoverTv() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await discoverTv();
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Render data here using the `data` state */}
    </div>
  );
}
