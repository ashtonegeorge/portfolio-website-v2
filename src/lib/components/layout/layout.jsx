import Page from './page.jsx'
import Navbar from './navbar.jsx'

const Layout = () => {

    return (
        <div className='bg-slate-800 h-400'>
            <Navbar />
            <Page /> 
        </div>
    );

};

export default Layout;