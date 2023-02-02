import { AppProps } from "next/app";
import '../styles/global.scss' 

const MyApp = ({ Component, pageProps }:AppProps) => (
    <Component {...pageProps} />
)

export default MyApp