import Navbar from '../components/navbar';
import Head from 'next/head';
import Clock from '../components/Clock';

const Layout = (props) => (
    <div>
        <Head>
            <title>Next Demo</title>
        </Head>
        <div>
            <Navbar/>
            <Clock/>
            {props.children}
        </div>
    </div>
);

export default Layout;
