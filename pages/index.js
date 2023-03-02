import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="center">
      <Head>
        <title>Chayapol Page</title>
      </Head>
      <h1>Chayapol Page</h1>
      <p>This is a sample page for Chayapol.</p>

      <Link href="/about">About</Link> |
      <Link href="/blogs">Blogs</Link>
    </div>
  );
}
