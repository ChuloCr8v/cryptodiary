import styles from "../styles/News.module.scss";
import Heading from "./Heading";
import axios from "axios";
import { useState, useEffect } from "react";
import Loading from './Loading'
import parse from 'html-react-parser';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://min-api.cryptocompare.com/data/v2/news/?lang=EN&limit=5",
    };

    axios
      .request(options)
      .then((response) => {
        const data = response.data.Data;
        setNews(data);
        console.log(data)
        setLoading(false)
        //   console.log(news)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className={styles.news}>
      <div className={styles.container}>
        <Heading
          heading={"Top Cryptocurrency News Updates"}
          subtitle={
            "Be in the know of the latest happenings in the world of cryptocurrencies"
          }
        />
        {loading ? <Loading /> : <div className={styles.news_container}>
          {news
            .map((newsItem) => (
              <a
                href={newsItem.url}
                key={newsItem.id}
                className={styles.news_card}
              >
                
                <div className={styles.news_content}>
                  <h3 className={styles.news_title}>{newsItem.title}</h3>
                  <p className={styles.news_body}>
                    {parse(newsItem.body.slice(0, 100))}... <span>Read More...</span>
                  </p>
                </div>
                <div className={styles.news_img}>
                  <img src={newsItem.imageurl} alt={newsItem.title} />
                  <p className={styles.source}>{newsItem.source}</p>
                </div>
              </a>
            ))}
        </div>} 
      </div>
    </section>
  );
};

export default News;
