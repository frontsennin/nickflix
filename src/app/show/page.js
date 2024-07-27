"use client";

import Show from "@/components/show";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Page() {
  const [hasContent, setHasContent] = useState(false);
  const content = useSelector((state) => state.showContent.value);

  useEffect(() => {
    content && setHasContent(true);
  }, [content]);

  return (
    hasContent && (
      <Show
        id={content.id}
        title={content.title}
        image={content.image}
        isAdult={content.isAdult}
        overview={content.overview}
        language={content.language}
        genreList={content.genreList}
        genreIds={content.genreIds}
      />
    )
  );
}
