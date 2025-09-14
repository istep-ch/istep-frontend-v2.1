"use client";

import { ReactNode } from "react";
import { Provider } from "urql";
import { client } from "../../lib/graphql";
import "./globals.css";
type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
  return (
    <Provider value={client}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </Provider>
  );
}
