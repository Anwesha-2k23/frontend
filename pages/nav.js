import Head from "next/head";
import styles from '../styles/nav.module.css'



const Navbar = () => {
    return (<div >
        <Head>
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>

        </Head>
        <nav className="navbar bg-light fixed-top" >
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* <form className="d-inline mt-3 " role="search"> */}
                <svg className={styles.search} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>





                {/* </form> */}
                <div className={styles.menu}>
                    <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-start flex-grow-2 pe-3 ">
                                <li className="nav-item">
                                    <h4 className={styles.h4} >  <a className="nav-link active" aria-current="page" href="#">CA</a></h4 >
                                </li>
                                <li className="nav-item">
                                    <h4 className={styles.h4}><a className="nav-link active" href="#">Multicity</a></h4 >
                                </li>
                                <li className="nav-item dropdown">

                                    <h4 className={styles.h4}><a className="nav-link active" href="#" >Gallery</a></h4 >
                                </li>
                                <li className="nav-item dropdown">

                                    <h4 className={styles.h4}><a className="nav-link active" href="#">Login</a></h4 >
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div>
            <img className={styles.main} src="https://st3.depositphotos.com/1025323/17873/i/450/depositphotos_178738356-stock-photo-conceptual-liquid-color.jpg" />

        </div>
        <div>
            <h1 className={styles.heading_1}>Lorem ipsum </h1>
            <h1 className={styles.heading_2}>dolor sit</h1>
            <h3 className={styles.heading_3}>Lorem ipsum dolor sit amet,</h3>
            <h3 className={styles.heading_4}>consectetur adipisicing elit</h3>

        </div>

    </div>);
}

export default Navbar;