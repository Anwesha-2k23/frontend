import React from 'react'
import styles from '../styles/merchandise.module.css'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import MerchModal from '../components/MerchModal'

function merchandise() {
  const [deluxe, setDeluxe] = useState(false)
  const [superDeluxe, setSuperDeluxe] = useState(false)
  const [oneTShirt, setOneTShirt] = useState(false)
  const [twoTShirt, setTwoTShirt] = useState(false)
  const [threeTShirt, setThreeTShirt] = useState(false)
  const [tshirtLink, setTshirtLink] = useState('')
  const [modal, setModal] = useState(false)

    const close = () => {
        setModal(false)
    }

  useEffect(() => {
    const deluxe = document.getElementById('deluxe')
    const superDeluxe = document.getElementById('superDeluxe')
    const oneTShirt = document.getElementById('singleTShirt')
    const twoTShirt = document.getElementById('2TShirt')
    const threeTShirt = document.getElementById('3TShirt')
    deluxe.addEventListener('click', handleRadioClick)
    superDeluxe.addEventListener('click', handleRadioClick)
    oneTShirt.addEventListener('click', handleRadioClick)
    twoTShirt.addEventListener('click', handleRadioClick)
    threeTShirt.addEventListener('click', handleRadioClick)
    
    return () => {
      deluxe.addEventListener('click', handleRadioClick)
      superDeluxe.addEventListener('click', handleRadioClick)
      oneTShirt.addEventListener('click', handleRadioClick)
      twoTShirt.addEventListener('click', handleRadioClick)
      threeTShirt.addEventListener('click', handleRadioClick)
    }

  }, [deluxe, superDeluxe, oneTShirt, twoTShirt, threeTShirt])

  const handleRadioClick = (e) => {
    const deluxeId = document.getElementById('deluxe')
    const superDeluxeId = document.getElementById('superDeluxe')
    const oneTshirtId = document.getElementById('singleTShirt')
    const twoTshirtId = document.getElementById('2TShirt')
    const threeTshirtId = document.getElementById('3TShirt')

    if (e) {

      if (e.target.id === 'deluxe' && deluxe === false) {
        setDeluxe(true)
        setSuperDeluxe(false)
        deluxeId.style.backgroundColor = '#FFC960'
        superDeluxeId.style.backgroundColor = 'transparent'
      }
      else if (e.target.id === 'deluxe' && deluxe === true) {
        setDeluxe(false)
        deluxeId.style.backgroundColor = 'transparent'
      }
      else if (e.target.id === 'superDeluxe' && superDeluxe === false) {
        setSuperDeluxe(true)
        setDeluxe(false)
        superDeluxeId.style.backgroundColor = '#FFC960'
        deluxeId.style.backgroundColor = 'transparent'
      }
      else if (e.target.id === 'superDeluxe' && superDeluxe === true) {
        setSuperDeluxe(false)
        superDeluxeId.style.backgroundColor = 'transparent'
      }
      else if (e.target.id === 'singleTShirt' && oneTShirt === false) {
        setOneTShirt(true)
        setTshirtLink('https://pmny.in/YJ78Zv4cSA0l')
        setTwoTShirt(false)
        setThreeTShirt(false)
        oneTshirtId.style.backgroundColor = '#FFC960'
        twoTshirtId.style.backgroundColor = 'transparent'
        threeTshirtId.style.backgroundColor = 'transparent'
      }
      else if (e.target.id === 'singleTShirt' && oneTShirt === true) {
        setOneTShirt(false)
        setTshirtLink('')
        oneTshirtId.style.backgroundColor = 'transparent'
      }
      else if (e.target.id === '2TShirt' && twoTShirt === false) {
        setTwoTShirt(true)
        setTshirtLink('https://pmny.in/MIIjccwJBC3K')
        setOneTShirt(false)
        setThreeTShirt(false)
        twoTshirtId.style.backgroundColor = '#FFC960'
        oneTshirtId.style.backgroundColor = 'transparent'
        threeTshirtId.style.backgroundColor = 'transparent'
      }
      else if (e.target.id === '2TShirt' && twoTShirt === true) {
        setTwoTShirt(false)
        setTshirtLink('')
        twoTshirtId.style.backgroundColor = 'transparent'
      }
      else if (e.target.id === '3TShirt' && threeTShirt === false) {
        setThreeTShirt(true)
        setTshirtLink('https://pmny.in/erg5mzOjA6Oc')
        setOneTShirt(false)
        setTwoTShirt(false)
        threeTshirtId.style.backgroundColor = '#FFC960'
        oneTshirtId.style.backgroundColor = 'transparent'
        twoTshirtId.style.backgroundColor = 'transparent'
      }
      else if (e.target.id === '3TShirt' && threeTShirt === true) {
        setThreeTShirt(false)
        setTshirtLink('')
        threeTshirtId.style.backgroundColor = 'transparent'
      }

    }

  }
  return (
    <>
    <div className={styles.container}>
      <div className={styles.themeSection}>
        <div className={styles.merchContainer}>
          <div className={styles.merchDetails}>
          </div>
          <div className={styles.merchBooking}>
            {/* <img
                            src="/home/grab_merc_text.png"
                            alt="Grab the merch"
                        /> */}
            <span className={styles.grabMerchText}>
              Exclusive Offers!
            </span>
            {/* TODO : Add the link for the payment of the TShirts */}
            <div className={styles.priceRadioContainer}>
              <div className={styles.priceRadio}>
                <div className={styles.priceBlob}>Rs. 399</div>
                <div className={styles.itemDetails}>
                  <span><strong>Deluxe Pack</strong></span>
                  <span>1 TShirt + Cap</span>
                </div>
                <div className={styles.radioContainer}>
                  <div
                    id="deluxe"
                    className={styles.priceRadioBtn}
                    onClick={() => handleRadioClick()}
                  />
                </div>
              </div>
              <div className={styles.priceRadio}>
                <div className={styles.priceBlob}>Rs. 599</div>
                <div className={styles.itemDetails}>
                  <span><strong>Super Deluxe Pack</strong></span>
                  <span>1 TShirt + Cap + Others</span>
                </div>
                <div className={styles.radioContainer}>
                  <div
                    id="superDeluxe"
                    className={styles.priceRadioBtn}
                    onClick={() => handleRadioClick()}
                  />
                </div>
              </div>
              <div className={[styles.upperShopNowBtn]}>
                <a href="#">
                  <button
                    href="#"
                    className={styles.merchBookBtn}
                  >
                    Shop Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>






        <div className={styles.merchContainer2}>
          <div className={styles.merchDetails2}>
            <img
              src="/merch/t_shirt.svg"
              alt="Grab the merch"
            />
            <div className={styles.shopNowBtn}>
                <a onClick={() => setModal(true)}>
                  <button
                    href="#"
                    className={styles.sizeChartBtn}
                  >
                   View Size Chart
                  </button>
                </a>
              </div>

          </div>
          <div className={styles.merchBooking}>
            <span className={styles.grabMerchText}>
              TShirt Offers!
            </span>
            {/* TODO : Add the link for the payment of the TShirts */}
            <div className={styles.priceRadioContainer}>
              <div className={styles.priceRadio}>
                <div className={styles.priceBlob}>Rs. 399</div>
                <div className={styles.itemDetails}>
                  <span><strong>Single</strong></span>
                  {/* <span>1 TShirt + Cap</span> */}
                </div>
                <div className={styles.radioContainer}>
                  <div
                    id="singleTShirt"
                    className={styles.priceRadioBtn}
                    onClick={() => handleRadioClick()}
                  />
                </div>
              </div>
              <div className={styles.priceRadio}>
                <div className={styles.priceBlob}>Rs. 749</div>
                <div className={styles.itemDetails}>
                  <span><strong>Combo of 2</strong></span>
                  {/* <span>1 TShirt + Cap + Others</span> */}
                </div>
                <div className={styles.radioContainer}>
                  <div
                    id="2TShirt"
                    className={styles.priceRadioBtn}
                    onClick={() => handleRadioClick()}
                  />
                </div>
              </div>
              <div className={styles.priceRadio}>
                <div className={styles.priceBlob}>Rs. 1099</div>
                <div className={styles.itemDetails}>
                  <span><strong>Combo of 3</strong></span>
                  {/* <span>1 TShirt + Cap + Others</span> */}
                </div>
                <div className={styles.radioContainer}>
                  <div
                    id="3TShirt"
                    className={styles.priceRadioBtn}
                    onClick={() => handleRadioClick()}
                  />
                </div>
              </div>
              <div className={styles.shopNowBtn}>
                <a href={tshirtLink}>
                  <button
                    href={tshirtLink}
                    className={styles.merchBookBtn}
                  >
                    Shop Now
                  </button>
                </a>
              </div>
              <div style={{ textAlign: 'center', margin: 'auto', color: 'white', marginTop: '10px', fontSize: '18px' }}>*Additional delivery charges apply</div>
            </div>
          </div>
          {/* TODO : Add the link for the payment of the TShirts */}
          {/* <a
            href="https://pmny.in/YJ78Zv4cSA0l"
            className={styles.mobileBuyNow}
          >
            <button
              href="https://pmny.in/YJ78Zv4cSA0l"
              className={styles.merchBookBtn2}
            >
              Buy 1
            </button>
          </a>
          <a
            href="https://pmny.in/MIIjccwJBC3K"
            className={styles.mobileBuyNow}
          >
            <button
              href="https://pmny.in/MIIjccwJBC3K"
              className={styles.merchBookBtn2}
            >
              Buy 2
            </button>
          </a>
          <a
            href="https://pmny.in/erg5mzOjA6Oc"
            className={styles.mobileBuyNow}
          >
            <button
              href="https://pmny.in/erg5mzOjA6Oc"
              className={styles.merchBookBtn2}
            >
              Buy 3
            </button>
          </a> */}
        </div>
      </div>
    </div >
    {modal && (
      <>
          <MerchModal
              closeHandler={close}
          />
      </>
  )}
  </>
  )
}

export default merchandise