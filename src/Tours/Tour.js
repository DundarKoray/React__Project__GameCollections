import { useState } from 'react';
import styles from './tour.module.scss'

const Tour = ({id, image, info, price, name}) => {
  const [readMore, setReadMore] = useState(false)
  return (
    <article className={styles.tour} key={id}>
      <img src={image} alt={name} />
      <div className={styles.bottom}>
        <div className={styles.tourInfo}>
          <h4>{name}</h4>
          <h4 className={styles.tourPrice}>€{price}</h4>
        </div>
        <p>{readMore ? info :`${info.substring(0, 200)}...` }</p>
        <button onClick={()=> setReadMore(!readMore)}>{readMore ? "Show less" : "Read more"}</button>
        <button className='btn-primary'>Not interested</button>
      </div>

    </article>
  )
};

export default Tour;
