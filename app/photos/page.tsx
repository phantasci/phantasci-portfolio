import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Photos",
  description: "Tommy Phang's Photos",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Photos</h1>
      <ImageGrid
        columns={3}
        images={[
          {
            src: "/photos/yay.jpg",
            alt: "PRAISE THE SUN!",
            href: "https://www.youtube.com/watch?v=bzJDimvPW1Y",
          },
        ]}
      />

    </section>
  );
}
