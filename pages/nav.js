import Head from "next/head";

import styles from '../styles/nav.module.css'



const Navbar = () => {
    return (
        <div >
            <Head>
                <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />

            </Head>
            <div className={styles.nav_div}>
                <img src="./navbar/navbar mandala left.svg" className={styles.navbar_3} />
                <img src="./navbar/navbar mandala right.svg" className={styles.navbar_4} />
                <img src="./navbar/logo.svg" className={styles.navbar_2} />

                <img src="./navbar/nav bar1.svg" className={styles.navbar_1} />
                <h4 class={` ${styles.item_1} nav-item`}>
                    <a class="nav-link active" aria-current="page" href="/campus_ambassador">CA</a>
                </h4>
                <h4 class={` ${styles.item_2} nav-item`}>
                    <a class="nav-link active" aria-current="page" href="/multicity">Multicity</a>
                </h4>
                <h4 class={styles.item_3}>
                    <a class="nav-link active" aria-current="page" href="#">Events</a>
                </h4>
                <img className={styles.nav_image} src="https://i.redd.it/7nw9uzlp0de71.jpg" />

                <nav class={`${styles.main} navbar  fixed-top`}>
                    <div class="container-fluid">
                        <button class={ `${styles.b}  navbar-toggler`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class={` ${styles.search}bi bi-search`} viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                        <div class="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div class="offcanvas-header">
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li class={`${styles.h1} nav-item`}>
                                        <a class="nav-link active" aria-current="page" href="/campus_ambassador">CA</a>
                                    </li>
                                    <li class={`${styles.h2} nav-item`}>
                                        <a class="nav-link active" href="/multcity">Multicity</a>
                                    </li>
                                    <li class={`${styles.h3} nav-item`}>
                                        <a class="nav-link active" aria-current="page" href="#">Events</a>
                                    </li>
                                    <li class={`${styles.h4} nav-item`}>
                                        <a class="nav-link active" href="#">Login</a>
                                    </li>


                                </ul>

                            </div>
                        </div>
                    </div>

                </nav>

            </div>



            <div className={styles.headings}>
                <h1>Lorem Ipsum</h1>
                <h1>dolor sit</h1>

            </div>
            <div className={styles.headings_2}>
                <h4>Lorem ipsum dolor sit amet,</h4>
                <h4>consectetur adipiscing elit.</h4>
            </div>






        </div >
    );
}

export default Navbar;