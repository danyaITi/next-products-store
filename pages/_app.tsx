import { AppProps } from "next/app";
import Layout from "../components/Layout";
import '../styles/global.scss' 

const MyApp = ({ Component, pageProps }:AppProps) => (
    <Layout>
        <Component {...pageProps} />
    </Layout>
)

export default MyApp