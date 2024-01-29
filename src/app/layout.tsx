"use client";
import { ReactNode } from "react";
import { RecoilRoot } from "recoil";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head></head>
      <body>
        <RecoilRoot>{children}</RecoilRoot>
      </body>
    </html>
  );
}
