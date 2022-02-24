import styles from '../styles/News.module.scss'
import Heading from './Heading'
import axios from 'axios'
import {
  useState,
  useEffect
} from 'react'
const News = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
  const options = {
    method: 'GET',
    url: 'https://min-api.cryptocompare.com/data/v2/news/?lang=EN&limit=5'
  }

    axios.request(options).then((response) => {
      const data = response.data.Data
      setNews(data)
   //   console.log(news)
    }).catch((error) => {
      console.log(error)
    })
  }, [])


  return(
    <div className={styles.news}>
    <div className={styles.container}>
       <Heading
          heading={"Top Cryptocurrency News Updates"}
          subtitle={
            "Be in the know of the latest happenings in the world of cryptocurrencies"
          }
        />
    <div className={styles.news_container}>
    {news.map((newsItem) => (
        <a href={newsItem.url} className={styles.news_card}>
          <img src={newsItem.imageurl} alt={newsItem.title} />
          <div className={styles.news_content}>
            <h3 className={styles.news_title}>{newsItem.title}</h3>
            <p className={styles.news_body}>{newsItem.body.slice(0, 200)}... <span>Read More...</span></p>
          </div>
        </a>
      ) 
    ).slice(0, 10)}
    </div>
    </div>
    </div>
  )
}

export default News