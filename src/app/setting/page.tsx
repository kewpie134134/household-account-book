"use client";
import Link from "next/link";
import Header from "../../components/moleculars/Header";

export default function Page() {
  return (
    <>
      <Header title="設定ページ" />
      <div>
        <Link href={"/"}>トップページ</Link>
      </div>
      <div>
        <Link href="/graph">グラフページ</Link>
      </div>
      <div>
        <Link href="/list">リストページ</Link>
      </div>
      <div>
        <Link href="/summary">まとめページ</Link>
      </div>
      <div>
        <Link href="/setting">設定ページ</Link>
      </div>
    </>
  );
}
