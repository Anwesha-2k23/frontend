import Head from "next/head";
import styles from '../styles/nav.module.css'



const Navbar = () => {
    return (
        <div >
            <Head>
                <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />

            </Head>
            <nav className={`${styles.whole} navbar fixed-top`} >
                <div className={`${styles.whole_2} container-fluid`}>

                    <button className={`${styles.toggle_button} navbar-toggler`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* <form className="d-inline mt-3 " role="search"> */}

                    <svg className={styles.search} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>

                    <h4 className={styles.h5}>CA</h4>
                    <h4 className={styles.h6}>Events</h4>
                    <h4 className={styles.h7}>Multicity</h4>
                    <h4 className={styles.h8}>Login</h4>


                    <img src="./navbar/navbar mandala left.svg" className={styles.navbar_3} />
                    <img src="./navbar/navbar mandala right.svg" className={styles.navbar_4} />
                    <img src="./navbar/logo.svg" className={styles.navbar_2} />

                    <img src="./navbar/nav bar.svg" className={styles.navbar_1} />

                </div>




            </nav>


            <div>
            </div>


            {/* </form> */}
            <div className={styles.menu}>
                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
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

            <div>
                <img className={styles.main} src="https://st3.depositphotos.com/1025323/17873/i/450/depositphotos_178738356-stock-photo-conceptual-liquid-color.jpg" />

            </div>
            <div className={styles.heading_container}>
                <h1 className={styles.heading_1}>Lorem ipsum </h1>
                <h1 className={styles.heading_2}>dolor sit</h1>
                <h3 className={styles.heading_3}>Lorem ipsum dolor sit amet,</h3>
                <h3 className={styles.heading_4}>consectetur adipisicing elit</h3>

            </div>

        </div >
    );
}

export default Navbar;