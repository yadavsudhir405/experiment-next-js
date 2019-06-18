import Navbar from '../components/navbar';
import Head from 'next/head';
import Clock from '../components/Clock';

const withLayout = (Page) => {
    return () => (
        <div>
            <Head>
                <title>Next Demo App</title>
            </Head>
            <Navbar/>
            <Clock/>
            <Page/>
        </div>
    );
};

export default withLayout;
