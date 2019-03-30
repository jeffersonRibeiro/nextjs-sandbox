import Head from 'next/head';

import Navbar from '../Navbar';

const Layout = props => (
  <>
    <Head>
      <title>{props.title}</title>
    </Head>
    <Navbar />
    <div className="main">{props.children}</div>
  </>
);

export default Layout;
