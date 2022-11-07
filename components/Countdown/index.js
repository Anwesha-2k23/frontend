import React from 'react';
import style from './style.module.css';

const index = (props) => {
    const targetDate = new Date(props.dateTo);
    const currentDate = props.dateFrom ? new Date(props.dateFrom) : new Date();
    const diff = targetDate - currentDate;
    let year = Math.floor(diff / 31104000000); // time diff in years
    let month = Math.floor((diff / 2592000000) % 12); // time diff in months (modulated to 12)
    let day = Math.floor((diff / 86400000) % 30); // time diff in days (modulated to 30)
    let hour = Math.floor((diff / 3600000) % 24); // time diff's hours (modulated to 24)
    let min = Math.floor((diff / 60000) % 60); // time diff's minutes (modulated to 60)
    let sec = Math.floor((diff / 1000) % 60); // time diff's seconds (modulated to 60)
  const [time, setTime] = React.useState({
    year,
    month,
    day,
    hour,
    min,
    sec,
  });

  React.useEffect(() => {
    setTime({
      year,
      month,
      day,
      hour,
      min,
      sec,
    });
    tick();
  }, [time]);

  const tick = () => {

    if (time.sec - 1 < 0) {
      if (time.min - 1 < 0) {
        if (time.hour - 1 < 0) {
          if (time.day - 1 < 0) {
            if (time.month - 1 < 0) {
              if (time.year - 1 < 0) {
                props.callback();
              } else {
                setTime({
                  year: time.year - 1,
                  month: 11,
                  day: 29,
                  hour: 23,
                  min: 59,
                  sec: 59,
                });
              }
            } else {
              setTime({
                year: time.year,
                month: time.month - 1,
                day: 29,
                hour: 23,
                min: 59,
                sec: 59,
              });
            }
          } else {
            setTime({
              year: time.year,
              month: time.month,
              day: time.day - 1,
              hour: 23,
              min: 59,
              sec: 59,
            });
          }
        } else {
          setTime({
            year: time.year,
            month: time.month,
            day: time.day,
            hour: time.hour - 1,
            min: 59,
            sec: 59,
          });
        }
      } else {
        setTime({
          year: time.year,
          month: time.month,
          day: time.day,
          hour: time.hour,
          min: time.min - 1,
          sec: 59,
        });
      }
    }
  };

  return (
    <>
      <div className={style.countdown}>
        <div className={style.countdown_item}>
          <div className={style.countdown_item_number}>{time.month}</div>
          <div className={style.countdown_item_text}>Months</div>
        </div>
        <div className={style.countdown_item}>
          <div className={style.countdown_item_number}>{time.day}</div>
          <div className={style.countdown_item_text}>Days</div>
        </div>
        <div className={style.countdown_item}>
          <div className={style.countdown_item_number}>{time.hour}</div>
          <div className={style.countdown_item_text}>Hours</div>
        </div>
        <div className={style.countdown_item}>
          <div className={style.countdown_item_number}>{time.min}</div>
          <div className={style.countdown_item_text}>Minutes</div>
        </div>
        <div className={style.countdown_item}>
          <div className={style.countdown_item_number}>{time.sec}</div>
          <div className={style.countdown_item_text}>Seconds</div>
        </div>
      </div>
    </>
  );
};

export default index;
