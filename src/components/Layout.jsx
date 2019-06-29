import  Head from 'next/head'

import { Clock, Navbar } from "./index";

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
