import style from './Gallery.module.css'
const Gallery = (props) => {
  const images = props.images;
  let i=0;
  while(images.length%4!=0){
    images.push(images[i])
    i++;
  }
  let n=images.length
  let images1=[]
  let images2=[]
  let images3=[]
  let images4=[]
  for(let i=0;i<n;i++)
  {
    if(i<n/4)
    {
      images1.push(images[i])
    }
    else if(i<n/2)
    {
      images2.push(images[i])
    }
    else if(i<3*n/4)
    {
      images3.push(images[i])
    }
    else
    {
      images4.push(images[i])
    }
  }
  return (
    <div className={style.gallery}>
      <h1>{props.eventName}</h1>
      <p>{props.desc}</p>
      <div className={style.row}>
      <div className={style.column}>
            {
              images1.map((image, index) => {
                return(
                  <img src={`${image}`} className={style.image} key={index} alt=""/>
                )
              })}
            </div>
        <div className={style.column}>
              {
              images2.map((image, index) => {
                return(
                  <img src={`${image}`} className={style.image} key={index} alt=""/>
                )
              })}
            </div>
        <div className={style.column}>

              {
              images3.map((image, index) => {
                return(
                  <img src={`${image}`} className={style.image} key={index} alt=""/>
                )
              })}
            </div>
        <div className={style.column}>

              {
              images4.map((image, index) => {
                return(
                  <img src={`${image}`} className={style.image} key={index} alt=""/>
                )
              })}
           </div>
      </div>
</div>
    
  )
}

export default Gallery