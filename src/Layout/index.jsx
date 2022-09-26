import React, { Fragment} from 'react';
import Headers from './Header'
import Footer from './Footer'
import { Container } from 'reactstrap';


const Layout = ({children})=>{
    return (
        <Fragment>
            {/* <Headers/> */}
            <div className='head'><h1>JNV - BEGUSARAI ALUMNI MEET - 2022</h1></div>
                <Container>
                    {children}
                </Container>
            {/* <Footer/> */}
        </Fragment>

    )
}
export default Layout