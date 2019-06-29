import  Head from 'next/head'

import { Clock, Navbar } from "./index";

const withLayout = WrappedComponent => props => (
    <div>
        <Head>
            <title>Next Demo App</title>
        </Head>
        <Navbar/>
        <Clock/>
        <WrappedComponent {...props} />
    </div>
);

export default withLayout;
