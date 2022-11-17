import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/campusamb.module.css";
// import Anwesha_text from "../images/Anwesha_text.png";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
export default function campusAmbassador() {
  return (
    <div className={styles.campusamb_body}>
      <Head>
        <title>Anwesha 2023 - Campus Ambassador</title>
        <meta name="description" content="Anwesha 2023" />
        <link rel="icon" href="./AnwehsaIcon.png" />
      </Head>
      {/* <Navbar /> */}
      <div className={styles.anwesha_bg_img}>
        {/* <img className={styles.anwesha_text} src="./Anwesha_text.png" alt="./anwesha_bg" /> */}
        <svg  className={styles.anwesha_text} width="284" height="71" viewBox="0 0 284 71" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="path-1-outside-1_466_100" maskUnits="userSpaceOnUse" x="0" y="0" width="284" height="71" fill="black">
            <rect fill="white" width="284" height="71" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M255.866 1.18395C253.639 1.37641 251.441 1.70057 250.982 1.90477C249.872 2.39841 249.929 3.96205 251.132 6.04895L252.117 7.75501L251.129 11.4694C250.586 13.5123 249.388 18.7883 248.466 23.1933C247.545 27.5989 246.452 32.1933 246.038 33.4032C245.624 34.6136 244.904 37.3263 244.437 39.4321C242.68 47.359 239.189 61.8274 238.692 63.2369C238.409 64.0424 237.503 65.4504 236.679 66.3652C235.255 67.9467 235.222 68.0733 236.011 68.9176C236.722 69.6803 237.816 69.8064 243.709 69.8064C251.158 69.8064 252.339 69.4435 251.209 67.5036C249.898 65.2549 250.791 62.8612 254.281 59.2719C257.619 55.8373 260.339 54.195 263.215 53.877C265.134 53.6646 265.869 53.7943 266.484 54.4533C267.767 55.8271 268.46 59.2673 268.478 64.3411C268.497 70.03 268.056 69.7411 276.327 69.4777C282.633 69.2765 284.102 68.6803 282.264 67.0692C280.632 65.6387 280.296 64.5325 278.742 55.4743C277.927 50.7221 277.033 45.9154 276.754 44.7923C276.476 43.6692 275.867 40.3382 275.401 37.3901C274.936 34.442 274.115 29.9625 273.577 27.4355C273.038 24.9086 272.056 18.8797 271.394 14.0382C270.186 5.21531 269.439 2.59138 267.894 1.73988C266.675 1.06807 260.508 0.783213 255.866 1.18395ZM18.3258 1.44532C17.8016 1.58264 16.8901 1.80573 16.3006 1.9405C14.9812 2.2422 14.9583 2.91452 16.1815 5.48434C17.3342 7.90663 17.3666 9.05575 16.3707 12.1983C15.9504 13.5241 14.8844 18.1839 14.001 22.5537C13.118 26.9235 11.6199 33.4849 10.6726 37.1349C9.72478 40.7849 7.82493 48.3085 6.4502 53.8535C4.39548 62.1449 3.68358 64.2931 2.44227 65.9481C0.712533 68.254 0.604365 68.7895 1.76705 69.2908C3.1456 69.8855 10.1441 70.2219 13.0484 69.8335C16.0252 69.4348 16.6776 68.691 15.7241 66.7817C15.2352 65.8031 15.2947 65.2885 16.0895 63.6254C18.0866 59.4465 23.7942 54.655 27.9675 53.6544C30.1933 53.121 30.5788 53.1562 31.4179 53.9699C33.5408 56.0282 34.9455 63.0378 34.2332 68.0197L34.0507 69.2959L39.7092 69.4404C44.2742 69.5568 45.5946 69.4256 46.54 68.7625C47.6388 67.9906 47.6627 67.8819 46.9236 67.0069C45.6723 65.5259 44.9666 62.3517 41.4194 42.2602C34.3823 2.39943 34.5281 3.04367 32.3524 2.23148C30.8113 1.65565 19.8621 1.04203 18.3258 1.44532ZM180.339 11.5597C173.32 13.4113 169.177 17.9281 169.152 23.7549C169.129 29.0839 172.172 32.4087 182.156 37.9655C185.864 40.0289 189.081 42.1673 189.494 42.8437C191.139 45.532 189.329 49.9539 185.954 51.4945C183.398 52.661 182.067 52.3782 180.076 50.2459C177.832 47.8414 177.278 45.9051 178.44 44.5294C179.242 43.5793 179.225 43.5222 177.989 43.0183C177.282 42.7304 175.357 42.4951 173.711 42.4951C170.168 42.4951 169.141 43.3415 169.141 46.2615C169.141 50.1688 172.884 55.0904 177.167 56.8159C182.713 59.0503 190.315 57.9221 194.473 54.2476C198.343 50.8273 199.398 44.6728 196.843 40.4255C194.753 36.9511 193.221 35.7004 186.867 32.2832C180.968 29.111 177.242 26.0597 177.242 24.4012C177.242 22.5164 178.844 19.9685 180.801 18.7398C183.716 16.9092 185.385 17.0797 187.705 19.4438C189.711 21.4878 190.065 22.8717 189.036 24.6503C188.116 26.241 189.283 26.6938 193.92 26.5447L197.97 26.4145L197.957 23.3516C197.946 20.8542 197.695 19.8935 196.6 18.1476C194.922 15.4706 191.143 12.691 187.758 11.645C184.75 10.7143 183.594 10.7011 180.339 11.5597ZM49.371 11.7037C47.7408 11.9079 47.5721 12.0574 47.8576 13.0478C48.9759 16.9326 49.1013 19.7281 48.9068 36.4437C48.791 46.3702 48.6176 55.0644 48.5213 55.7643C48.3517 56.9966 48.4604 57.0502 51.9198 57.4341C58.0635 58.1166 57.5774 59.1861 57.2796 45.6382C57.0814 36.6366 57.1586 33.879 57.616 33.5757C58.3689 33.0775 62.6747 37.5662 67.4293 43.806C71.6898 49.3979 72.6137 51.5103 72.1739 54.6529C71.767 57.5592 72.1124 57.792 76.849 57.8022C81.4101 57.8114 82.6934 57.2498 81.8371 55.6188C80.9122 53.8571 80.9755 16.099 81.9066 14.2321C83.015 12.0089 82.1463 11.6021 76.4239 11.6649C73.6797 11.695 71.3009 11.8624 71.1384 12.0365C70.976 12.2106 71.1942 13.5639 71.6231 15.0443C73.0016 19.8001 73.2794 36.8796 71.9785 36.8796C71.4725 36.8796 60.7491 24.2414 59.2495 21.8768C57.2091 18.6602 56.9251 17.1884 57.8976 14.8769C58.4118 13.6558 58.5767 12.6716 58.3132 12.3964C57.7819 11.842 51.905 11.3867 49.371 11.7037ZM84.3225 12.5521C84.3225 12.9477 84.6399 13.5542 85.0273 13.8988C86.7142 15.3981 96.7118 52.0933 96.7118 56.7848C96.7118 57.8006 96.9234 57.8384 101.834 57.6996L106.957 57.5546L107.087 55.5126C107.257 52.8346 109.082 43.3542 109.599 42.4583C109.821 42.0734 110.134 41.8993 110.294 42.0713C110.943 42.7666 112.498 52.6304 112.353 55.1364C112.235 57.1906 112.367 57.8731 112.913 58.0344C114.246 58.428 122.874 57.5525 123.419 56.9685C123.808 56.552 123.819 56.1022 123.456 55.3773C123.107 54.678 123.102 53.8356 123.439 52.6426C123.708 51.6941 124.649 48.0467 125.531 44.537C129.031 30.6118 133.335 16.294 134.686 14.0851C135.867 12.1534 135.037 11.8124 129.55 11.9742L124.588 12.1207L124.287 15.6942C123.783 21.6578 119.71 36.8796 118.616 36.8796C117.54 36.8796 114.674 22.5521 114.94 18.5019L115.057 16.7152L110.652 16.5687C105.447 16.3951 104.107 16.8949 104.884 18.7199C105.261 19.6081 105.249 20.8828 104.838 23.4128C103.844 29.5255 102.386 35.728 101.715 36.701C101.105 37.5836 101.016 37.5269 100.352 35.8387C99.1101 32.6793 95.7278 18.7628 95.3795 15.3787L95.044 12.1207L89.6833 11.9763C85.3237 11.8589 84.3225 11.9666 84.3225 12.5521ZM139.002 12.2371C137.038 12.4577 136.896 12.7844 137.88 14.8264C138.245 15.5844 138.685 17.9276 138.857 20.0334C139.306 25.5023 138.368 53.0801 137.662 55.1844C137.191 56.5867 137.206 56.9798 137.747 57.3463C138.11 57.5929 144.645 57.7976 152.271 57.8022C165.286 57.8093 166.185 57.7506 166.953 56.8409C167.527 56.162 167.727 55.2073 167.622 53.6503L167.474 51.4287L159.111 51.6222C152.019 51.786 150.516 51.687 149.223 50.9708C147.725 50.1412 147.227 48.5796 148.063 47.333C149.826 44.7034 159.016 42.1949 162.014 43.5247C163.992 44.4028 164.504 43.7493 164.755 40.0263C164.913 37.6837 164.8 36.9674 164.237 36.7357C163.84 36.5728 161.512 36.656 159.062 36.921C147.808 38.1385 148.326 38.1349 147.758 36.9976C146.387 34.2537 146.582 20.7925 148.014 19.2574C148.872 18.3391 158.556 18.2017 163.377 19.04C165.386 19.3891 166.589 19.3983 166.899 19.066C167.158 18.7888 167.471 17.4314 167.595 16.049C167.97 11.8772 167.873 11.8497 153.191 11.9513C146.37 11.9987 139.985 12.1274 139.002 12.2371ZM223.821 12.1825C223.363 12.33 222.987 12.6716 222.987 12.9421C222.987 13.2122 223.363 14.0463 223.821 14.7962C224.54 15.9704 224.655 17.4697 224.655 25.6258C224.655 30.8328 224.482 35.972 224.269 37.0461C223.799 39.428 222.565 40.0901 216.967 40.9672C212.604 41.6507 211.347 41.2862 210.575 39.1125C209.903 37.2196 209.989 16.1628 210.673 14.9892C210.977 14.4685 211.091 13.6675 210.926 13.2091C210.675 12.5082 209.793 12.376 205.356 12.376C199.45 12.376 199.007 12.6501 200.365 15.4634C201.078 16.9408 201.14 19.1324 200.965 36.5677C200.857 47.2682 200.676 56.3677 200.561 56.7888C200.387 57.4305 201.197 57.5781 205.554 57.7006C210.809 57.8476 212.341 57.4316 211.17 56.1763C210.454 55.41 210.432 53.1434 211.123 51.517C212.151 49.1013 219.374 46.1032 221.793 47.0885C224.337 48.1243 225.388 51.9657 223.953 54.9786C223.424 56.0884 223.169 57.1875 223.386 57.4203C223.603 57.6531 226.337 57.7787 229.46 57.6991C235.881 57.5357 235.345 58.0702 234.462 52.7049C234.208 51.1607 233.847 42.5415 233.661 33.5517C233.347 18.4279 233.385 17.0618 234.178 15.272C234.734 14.0177 234.872 13.1627 234.571 12.8405C234.063 12.2958 225.161 11.7506 223.821 12.1825ZM26.8901 22.203C27.5191 25.17 28.6151 31.4776 29.2941 36.0414C29.9722 40.5996 29.9727 41.1882 29.2998 42.2878C28.2282 44.0403 26.792 44.875 23.6932 45.5458C20.5406 46.2288 19.9922 46.0174 19.9979 44.124C20.0069 41.2428 24.3246 23.5568 25.5283 21.4704C25.9771 20.6914 26.6462 21.0513 26.8901 22.203ZM263.246 31.0233C263.905 34.8433 264.444 39.1146 264.444 40.5159C264.444 43.05 264.433 43.0683 262.264 44.096C261.065 44.6641 258.92 45.2578 257.499 45.4151L254.913 45.7009V43.9433C254.913 42.977 255.656 38.9824 256.563 35.0659C257.973 28.9803 258.701 26.4651 260.47 21.5649C260.958 20.2105 261.985 23.7079 263.246 31.0233Z" />
          </mask>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M255.866 1.18395C253.639 1.37641 251.441 1.70057 250.982 1.90477C249.872 2.39841 249.929 3.96205 251.132 6.04895L252.117 7.75501L251.129 11.4694C250.586 13.5123 249.388 18.7883 248.466 23.1933C247.545 27.5989 246.452 32.1933 246.038 33.4032C245.624 34.6136 244.904 37.3263 244.437 39.4321C242.68 47.359 239.189 61.8274 238.692 63.2369C238.409 64.0424 237.503 65.4504 236.679 66.3652C235.255 67.9467 235.222 68.0733 236.011 68.9176C236.722 69.6803 237.816 69.8064 243.709 69.8064C251.158 69.8064 252.339 69.4435 251.209 67.5036C249.898 65.2549 250.791 62.8612 254.281 59.2719C257.619 55.8373 260.339 54.195 263.215 53.877C265.134 53.6646 265.869 53.7943 266.484 54.4533C267.767 55.8271 268.46 59.2673 268.478 64.3411C268.497 70.03 268.056 69.7411 276.327 69.4777C282.633 69.2765 284.102 68.6803 282.264 67.0692C280.632 65.6387 280.296 64.5325 278.742 55.4743C277.927 50.7221 277.033 45.9154 276.754 44.7923C276.476 43.6692 275.867 40.3382 275.401 37.3901C274.936 34.442 274.115 29.9625 273.577 27.4355C273.038 24.9086 272.056 18.8797 271.394 14.0382C270.186 5.21531 269.439 2.59138 267.894 1.73988C266.675 1.06807 260.508 0.783213 255.866 1.18395ZM18.3258 1.44532C17.8016 1.58264 16.8901 1.80573 16.3006 1.9405C14.9812 2.2422 14.9583 2.91452 16.1815 5.48434C17.3342 7.90663 17.3666 9.05575 16.3707 12.1983C15.9504 13.5241 14.8844 18.1839 14.001 22.5537C13.118 26.9235 11.6199 33.4849 10.6726 37.1349C9.72478 40.7849 7.82493 48.3085 6.4502 53.8535C4.39548 62.1449 3.68358 64.2931 2.44227 65.9481C0.712533 68.254 0.604365 68.7895 1.76705 69.2908C3.1456 69.8855 10.1441 70.2219 13.0484 69.8335C16.0252 69.4348 16.6776 68.691 15.7241 66.7817C15.2352 65.8031 15.2947 65.2885 16.0895 63.6254C18.0866 59.4465 23.7942 54.655 27.9675 53.6544C30.1933 53.121 30.5788 53.1562 31.4179 53.9699C33.5408 56.0282 34.9455 63.0378 34.2332 68.0197L34.0507 69.2959L39.7092 69.4404C44.2742 69.5568 45.5946 69.4256 46.54 68.7625C47.6388 67.9906 47.6627 67.8819 46.9236 67.0069C45.6723 65.5259 44.9666 62.3517 41.4194 42.2602C34.3823 2.39943 34.5281 3.04367 32.3524 2.23148C30.8113 1.65565 19.8621 1.04203 18.3258 1.44532ZM180.339 11.5597C173.32 13.4113 169.177 17.9281 169.152 23.7549C169.129 29.0839 172.172 32.4087 182.156 37.9655C185.864 40.0289 189.081 42.1673 189.494 42.8437C191.139 45.532 189.329 49.9539 185.954 51.4945C183.398 52.661 182.067 52.3782 180.076 50.2459C177.832 47.8414 177.278 45.9051 178.44 44.5294C179.242 43.5793 179.225 43.5222 177.989 43.0183C177.282 42.7304 175.357 42.4951 173.711 42.4951C170.168 42.4951 169.141 43.3415 169.141 46.2615C169.141 50.1688 172.884 55.0904 177.167 56.8159C182.713 59.0503 190.315 57.9221 194.473 54.2476C198.343 50.8273 199.398 44.6728 196.843 40.4255C194.753 36.9511 193.221 35.7004 186.867 32.2832C180.968 29.111 177.242 26.0597 177.242 24.4012C177.242 22.5164 178.844 19.9685 180.801 18.7398C183.716 16.9092 185.385 17.0797 187.705 19.4438C189.711 21.4878 190.065 22.8717 189.036 24.6503C188.116 26.241 189.283 26.6938 193.92 26.5447L197.97 26.4145L197.957 23.3516C197.946 20.8542 197.695 19.8935 196.6 18.1476C194.922 15.4706 191.143 12.691 187.758 11.645C184.75 10.7143 183.594 10.7011 180.339 11.5597ZM49.371 11.7037C47.7408 11.9079 47.5721 12.0574 47.8576 13.0478C48.9759 16.9326 49.1013 19.7281 48.9068 36.4437C48.791 46.3702 48.6176 55.0644 48.5213 55.7643C48.3517 56.9966 48.4604 57.0502 51.9198 57.4341C58.0635 58.1166 57.5774 59.1861 57.2796 45.6382C57.0814 36.6366 57.1586 33.879 57.616 33.5757C58.3689 33.0775 62.6747 37.5662 67.4293 43.806C71.6898 49.3979 72.6137 51.5103 72.1739 54.6529C71.767 57.5592 72.1124 57.792 76.849 57.8022C81.4101 57.8114 82.6934 57.2498 81.8371 55.6188C80.9122 53.8571 80.9755 16.099 81.9066 14.2321C83.015 12.0089 82.1463 11.6021 76.4239 11.6649C73.6797 11.695 71.3009 11.8624 71.1384 12.0365C70.976 12.2106 71.1942 13.5639 71.6231 15.0443C73.0016 19.8001 73.2794 36.8796 71.9785 36.8796C71.4725 36.8796 60.7491 24.2414 59.2495 21.8768C57.2091 18.6602 56.9251 17.1884 57.8976 14.8769C58.4118 13.6558 58.5767 12.6716 58.3132 12.3964C57.7819 11.842 51.905 11.3867 49.371 11.7037ZM84.3225 12.5521C84.3225 12.9477 84.6399 13.5542 85.0273 13.8988C86.7142 15.3981 96.7118 52.0933 96.7118 56.7848C96.7118 57.8006 96.9234 57.8384 101.834 57.6996L106.957 57.5546L107.087 55.5126C107.257 52.8346 109.082 43.3542 109.599 42.4583C109.821 42.0734 110.134 41.8993 110.294 42.0713C110.943 42.7666 112.498 52.6304 112.353 55.1364C112.235 57.1906 112.367 57.8731 112.913 58.0344C114.246 58.428 122.874 57.5525 123.419 56.9685C123.808 56.552 123.819 56.1022 123.456 55.3773C123.107 54.678 123.102 53.8356 123.439 52.6426C123.708 51.6941 124.649 48.0467 125.531 44.537C129.031 30.6118 133.335 16.294 134.686 14.0851C135.867 12.1534 135.037 11.8124 129.55 11.9742L124.588 12.1207L124.287 15.6942C123.783 21.6578 119.71 36.8796 118.616 36.8796C117.54 36.8796 114.674 22.5521 114.94 18.5019L115.057 16.7152L110.652 16.5687C105.447 16.3951 104.107 16.8949 104.884 18.7199C105.261 19.6081 105.249 20.8828 104.838 23.4128C103.844 29.5255 102.386 35.728 101.715 36.701C101.105 37.5836 101.016 37.5269 100.352 35.8387C99.1101 32.6793 95.7278 18.7628 95.3795 15.3787L95.044 12.1207L89.6833 11.9763C85.3237 11.8589 84.3225 11.9666 84.3225 12.5521ZM139.002 12.2371C137.038 12.4577 136.896 12.7844 137.88 14.8264C138.245 15.5844 138.685 17.9276 138.857 20.0334C139.306 25.5023 138.368 53.0801 137.662 55.1844C137.191 56.5867 137.206 56.9798 137.747 57.3463C138.11 57.5929 144.645 57.7976 152.271 57.8022C165.286 57.8093 166.185 57.7506 166.953 56.8409C167.527 56.162 167.727 55.2073 167.622 53.6503L167.474 51.4287L159.111 51.6222C152.019 51.786 150.516 51.687 149.223 50.9708C147.725 50.1412 147.227 48.5796 148.063 47.333C149.826 44.7034 159.016 42.1949 162.014 43.5247C163.992 44.4028 164.504 43.7493 164.755 40.0263C164.913 37.6837 164.8 36.9674 164.237 36.7357C163.84 36.5728 161.512 36.656 159.062 36.921C147.808 38.1385 148.326 38.1349 147.758 36.9976C146.387 34.2537 146.582 20.7925 148.014 19.2574C148.872 18.3391 158.556 18.2017 163.377 19.04C165.386 19.3891 166.589 19.3983 166.899 19.066C167.158 18.7888 167.471 17.4314 167.595 16.049C167.97 11.8772 167.873 11.8497 153.191 11.9513C146.37 11.9987 139.985 12.1274 139.002 12.2371ZM223.821 12.1825C223.363 12.33 222.987 12.6716 222.987 12.9421C222.987 13.2122 223.363 14.0463 223.821 14.7962C224.54 15.9704 224.655 17.4697 224.655 25.6258C224.655 30.8328 224.482 35.972 224.269 37.0461C223.799 39.428 222.565 40.0901 216.967 40.9672C212.604 41.6507 211.347 41.2862 210.575 39.1125C209.903 37.2196 209.989 16.1628 210.673 14.9892C210.977 14.4685 211.091 13.6675 210.926 13.2091C210.675 12.5082 209.793 12.376 205.356 12.376C199.45 12.376 199.007 12.6501 200.365 15.4634C201.078 16.9408 201.14 19.1324 200.965 36.5677C200.857 47.2682 200.676 56.3677 200.561 56.7888C200.387 57.4305 201.197 57.5781 205.554 57.7006C210.809 57.8476 212.341 57.4316 211.17 56.1763C210.454 55.41 210.432 53.1434 211.123 51.517C212.151 49.1013 219.374 46.1032 221.793 47.0885C224.337 48.1243 225.388 51.9657 223.953 54.9786C223.424 56.0884 223.169 57.1875 223.386 57.4203C223.603 57.6531 226.337 57.7787 229.46 57.6991C235.881 57.5357 235.345 58.0702 234.462 52.7049C234.208 51.1607 233.847 42.5415 233.661 33.5517C233.347 18.4279 233.385 17.0618 234.178 15.272C234.734 14.0177 234.872 13.1627 234.571 12.8405C234.063 12.2958 225.161 11.7506 223.821 12.1825ZM26.8901 22.203C27.5191 25.17 28.6151 31.4776 29.2941 36.0414C29.9722 40.5996 29.9727 41.1882 29.2998 42.2878C28.2282 44.0403 26.792 44.875 23.6932 45.5458C20.5406 46.2288 19.9922 46.0174 19.9979 44.124C20.0069 41.2428 24.3246 23.5568 25.5283 21.4704C25.9771 20.6914 26.6462 21.0513 26.8901 22.203ZM263.246 31.0233C263.905 34.8433 264.444 39.1146 264.444 40.5159C264.444 43.05 264.433 43.0683 262.264 44.096C261.065 44.6641 258.92 45.2578 257.499 45.4151L254.913 45.7009V43.9433C254.913 42.977 255.656 38.9824 256.563 35.0659C257.973 28.9803 258.701 26.4651 260.47 21.5649C260.958 20.2105 261.985 23.7079 263.246 31.0233Z" fill="#37226A" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M255.866 1.18395C253.639 1.37641 251.441 1.70057 250.982 1.90477C249.872 2.39841 249.929 3.96205 251.132 6.04895L252.117 7.75501L251.129 11.4694C250.586 13.5123 249.388 18.7883 248.466 23.1933C247.545 27.5989 246.452 32.1933 246.038 33.4032C245.624 34.6136 244.904 37.3263 244.437 39.4321C242.68 47.359 239.189 61.8274 238.692 63.2369C238.409 64.0424 237.503 65.4504 236.679 66.3652C235.255 67.9467 235.222 68.0733 236.011 68.9176C236.722 69.6803 237.816 69.8064 243.709 69.8064C251.158 69.8064 252.339 69.4435 251.209 67.5036C249.898 65.2549 250.791 62.8612 254.281 59.2719C257.619 55.8373 260.339 54.195 263.215 53.877C265.134 53.6646 265.869 53.7943 266.484 54.4533C267.767 55.8271 268.46 59.2673 268.478 64.3411C268.497 70.03 268.056 69.7411 276.327 69.4777C282.633 69.2765 284.102 68.6803 282.264 67.0692C280.632 65.6387 280.296 64.5325 278.742 55.4743C277.927 50.7221 277.033 45.9154 276.754 44.7923C276.476 43.6692 275.867 40.3382 275.401 37.3901C274.936 34.442 274.115 29.9625 273.577 27.4355C273.038 24.9086 272.056 18.8797 271.394 14.0382C270.186 5.21531 269.439 2.59138 267.894 1.73988C266.675 1.06807 260.508 0.783213 255.866 1.18395ZM18.3258 1.44532C17.8016 1.58264 16.8901 1.80573 16.3006 1.9405C14.9812 2.2422 14.9583 2.91452 16.1815 5.48434C17.3342 7.90663 17.3666 9.05575 16.3707 12.1983C15.9504 13.5241 14.8844 18.1839 14.001 22.5537C13.118 26.9235 11.6199 33.4849 10.6726 37.1349C9.72478 40.7849 7.82493 48.3085 6.4502 53.8535C4.39548 62.1449 3.68358 64.2931 2.44227 65.9481C0.712533 68.254 0.604365 68.7895 1.76705 69.2908C3.1456 69.8855 10.1441 70.2219 13.0484 69.8335C16.0252 69.4348 16.6776 68.691 15.7241 66.7817C15.2352 65.8031 15.2947 65.2885 16.0895 63.6254C18.0866 59.4465 23.7942 54.655 27.9675 53.6544C30.1933 53.121 30.5788 53.1562 31.4179 53.9699C33.5408 56.0282 34.9455 63.0378 34.2332 68.0197L34.0507 69.2959L39.7092 69.4404C44.2742 69.5568 45.5946 69.4256 46.54 68.7625C47.6388 67.9906 47.6627 67.8819 46.9236 67.0069C45.6723 65.5259 44.9666 62.3517 41.4194 42.2602C34.3823 2.39943 34.5281 3.04367 32.3524 2.23148C30.8113 1.65565 19.8621 1.04203 18.3258 1.44532ZM180.339 11.5597C173.32 13.4113 169.177 17.9281 169.152 23.7549C169.129 29.0839 172.172 32.4087 182.156 37.9655C185.864 40.0289 189.081 42.1673 189.494 42.8437C191.139 45.532 189.329 49.9539 185.954 51.4945C183.398 52.661 182.067 52.3782 180.076 50.2459C177.832 47.8414 177.278 45.9051 178.44 44.5294C179.242 43.5793 179.225 43.5222 177.989 43.0183C177.282 42.7304 175.357 42.4951 173.711 42.4951C170.168 42.4951 169.141 43.3415 169.141 46.2615C169.141 50.1688 172.884 55.0904 177.167 56.8159C182.713 59.0503 190.315 57.9221 194.473 54.2476C198.343 50.8273 199.398 44.6728 196.843 40.4255C194.753 36.9511 193.221 35.7004 186.867 32.2832C180.968 29.111 177.242 26.0597 177.242 24.4012C177.242 22.5164 178.844 19.9685 180.801 18.7398C183.716 16.9092 185.385 17.0797 187.705 19.4438C189.711 21.4878 190.065 22.8717 189.036 24.6503C188.116 26.241 189.283 26.6938 193.92 26.5447L197.97 26.4145L197.957 23.3516C197.946 20.8542 197.695 19.8935 196.6 18.1476C194.922 15.4706 191.143 12.691 187.758 11.645C184.75 10.7143 183.594 10.7011 180.339 11.5597ZM49.371 11.7037C47.7408 11.9079 47.5721 12.0574 47.8576 13.0478C48.9759 16.9326 49.1013 19.7281 48.9068 36.4437C48.791 46.3702 48.6176 55.0644 48.5213 55.7643C48.3517 56.9966 48.4604 57.0502 51.9198 57.4341C58.0635 58.1166 57.5774 59.1861 57.2796 45.6382C57.0814 36.6366 57.1586 33.879 57.616 33.5757C58.3689 33.0775 62.6747 37.5662 67.4293 43.806C71.6898 49.3979 72.6137 51.5103 72.1739 54.6529C71.767 57.5592 72.1124 57.792 76.849 57.8022C81.4101 57.8114 82.6934 57.2498 81.8371 55.6188C80.9122 53.8571 80.9755 16.099 81.9066 14.2321C83.015 12.0089 82.1463 11.6021 76.4239 11.6649C73.6797 11.695 71.3009 11.8624 71.1384 12.0365C70.976 12.2106 71.1942 13.5639 71.6231 15.0443C73.0016 19.8001 73.2794 36.8796 71.9785 36.8796C71.4725 36.8796 60.7491 24.2414 59.2495 21.8768C57.2091 18.6602 56.9251 17.1884 57.8976 14.8769C58.4118 13.6558 58.5767 12.6716 58.3132 12.3964C57.7819 11.842 51.905 11.3867 49.371 11.7037ZM84.3225 12.5521C84.3225 12.9477 84.6399 13.5542 85.0273 13.8988C86.7142 15.3981 96.7118 52.0933 96.7118 56.7848C96.7118 57.8006 96.9234 57.8384 101.834 57.6996L106.957 57.5546L107.087 55.5126C107.257 52.8346 109.082 43.3542 109.599 42.4583C109.821 42.0734 110.134 41.8993 110.294 42.0713C110.943 42.7666 112.498 52.6304 112.353 55.1364C112.235 57.1906 112.367 57.8731 112.913 58.0344C114.246 58.428 122.874 57.5525 123.419 56.9685C123.808 56.552 123.819 56.1022 123.456 55.3773C123.107 54.678 123.102 53.8356 123.439 52.6426C123.708 51.6941 124.649 48.0467 125.531 44.537C129.031 30.6118 133.335 16.294 134.686 14.0851C135.867 12.1534 135.037 11.8124 129.55 11.9742L124.588 12.1207L124.287 15.6942C123.783 21.6578 119.71 36.8796 118.616 36.8796C117.54 36.8796 114.674 22.5521 114.94 18.5019L115.057 16.7152L110.652 16.5687C105.447 16.3951 104.107 16.8949 104.884 18.7199C105.261 19.6081 105.249 20.8828 104.838 23.4128C103.844 29.5255 102.386 35.728 101.715 36.701C101.105 37.5836 101.016 37.5269 100.352 35.8387C99.1101 32.6793 95.7278 18.7628 95.3795 15.3787L95.044 12.1207L89.6833 11.9763C85.3237 11.8589 84.3225 11.9666 84.3225 12.5521ZM139.002 12.2371C137.038 12.4577 136.896 12.7844 137.88 14.8264C138.245 15.5844 138.685 17.9276 138.857 20.0334C139.306 25.5023 138.368 53.0801 137.662 55.1844C137.191 56.5867 137.206 56.9798 137.747 57.3463C138.11 57.5929 144.645 57.7976 152.271 57.8022C165.286 57.8093 166.185 57.7506 166.953 56.8409C167.527 56.162 167.727 55.2073 167.622 53.6503L167.474 51.4287L159.111 51.6222C152.019 51.786 150.516 51.687 149.223 50.9708C147.725 50.1412 147.227 48.5796 148.063 47.333C149.826 44.7034 159.016 42.1949 162.014 43.5247C163.992 44.4028 164.504 43.7493 164.755 40.0263C164.913 37.6837 164.8 36.9674 164.237 36.7357C163.84 36.5728 161.512 36.656 159.062 36.921C147.808 38.1385 148.326 38.1349 147.758 36.9976C146.387 34.2537 146.582 20.7925 148.014 19.2574C148.872 18.3391 158.556 18.2017 163.377 19.04C165.386 19.3891 166.589 19.3983 166.899 19.066C167.158 18.7888 167.471 17.4314 167.595 16.049C167.97 11.8772 167.873 11.8497 153.191 11.9513C146.37 11.9987 139.985 12.1274 139.002 12.2371ZM223.821 12.1825C223.363 12.33 222.987 12.6716 222.987 12.9421C222.987 13.2122 223.363 14.0463 223.821 14.7962C224.54 15.9704 224.655 17.4697 224.655 25.6258C224.655 30.8328 224.482 35.972 224.269 37.0461C223.799 39.428 222.565 40.0901 216.967 40.9672C212.604 41.6507 211.347 41.2862 210.575 39.1125C209.903 37.2196 209.989 16.1628 210.673 14.9892C210.977 14.4685 211.091 13.6675 210.926 13.2091C210.675 12.5082 209.793 12.376 205.356 12.376C199.45 12.376 199.007 12.6501 200.365 15.4634C201.078 16.9408 201.14 19.1324 200.965 36.5677C200.857 47.2682 200.676 56.3677 200.561 56.7888C200.387 57.4305 201.197 57.5781 205.554 57.7006C210.809 57.8476 212.341 57.4316 211.17 56.1763C210.454 55.41 210.432 53.1434 211.123 51.517C212.151 49.1013 219.374 46.1032 221.793 47.0885C224.337 48.1243 225.388 51.9657 223.953 54.9786C223.424 56.0884 223.169 57.1875 223.386 57.4203C223.603 57.6531 226.337 57.7787 229.46 57.6991C235.881 57.5357 235.345 58.0702 234.462 52.7049C234.208 51.1607 233.847 42.5415 233.661 33.5517C233.347 18.4279 233.385 17.0618 234.178 15.272C234.734 14.0177 234.872 13.1627 234.571 12.8405C234.063 12.2958 225.161 11.7506 223.821 12.1825ZM26.8901 22.203C27.5191 25.17 28.6151 31.4776 29.2941 36.0414C29.9722 40.5996 29.9727 41.1882 29.2998 42.2878C28.2282 44.0403 26.792 44.875 23.6932 45.5458C20.5406 46.2288 19.9922 46.0174 19.9979 44.124C20.0069 41.2428 24.3246 23.5568 25.5283 21.4704C25.9771 20.6914 26.6462 21.0513 26.8901 22.203ZM263.246 31.0233C263.905 34.8433 264.444 39.1146 264.444 40.5159C264.444 43.05 264.433 43.0683 262.264 44.096C261.065 44.6641 258.92 45.2578 257.499 45.4151L254.913 45.7009V43.9433C254.913 42.977 255.656 38.9824 256.563 35.0659C257.973 28.9803 258.701 26.4651 260.47 21.5649C260.958 20.2105 261.985 23.7079 263.246 31.0233Z" stroke="white" stroke-width="2" mask="url(#path-1-outside-1_466_100)" />
        </svg>

        <div className={styles.hero_text}>
          <span className={styles.bgText}>CAMPUS AMBASSADOR</span>
          <span className={styles.bgText_small}>PROGRAM</span>
        <div className={styles.btn_register}>         
          <span className={styles.btn_text}>Register</span>
        </div>
      </div>
        </div>

      {/* <Footer/> */}
    </div>
  );
}
