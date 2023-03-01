import { connect } from "mongoose"
import '@/styles/globals.css'


export default async function App({ Component, pageProps }) {
  console.log('MONGODB_URI', process.env.MONGODB_URI);
  await connect(process.env.MONGODB_URI);

  return <Component {...pageProps} />
}
