import Navbar from '../components/navbar';

const Layout = (props) => (
    <div>
        <div>
            <Navbar/>
            {props.children}
        </div>
    </div>
);

export default Layout;
