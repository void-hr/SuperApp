import  { useEffect, useState } from 'react'
const NewsCard = ({dateTime}) => {

  const [ news, setNews ] = useState({})

  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = process.env.REACT_APP_NEW_KEY;
      const getNews = await fetch(`https://gnews.io/api/v4/search?q=india&max=1&apikey=${apiKey}`)
      const response = await getNews.json();
      setNews(response.articles[0])
    }

    fetchNews();
  }, [])
  

  return (
    <div className="news_card">
      <div className="news_img_container">
        <img src={news.image} alt="this" />
        <div className="news_title">
          <p className='title_date'>{news.title}</p>
          <span className='news_time'>{dateTime().date + " | "+ dateTime().time}</span>
        </div>
        <div className="news_content">
          <p >
          {news.content}
          </p>
        </div>
      </div>
    </div>
  )
}

export default NewsCard