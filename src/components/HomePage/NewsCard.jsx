import React, { useEffect, useState } from 'react'


export const  dummyData = {
  "content": "Tensions have been brewing in I.N.D.I.A bloc after Congress’ dismal performance in the just-concluded assembly elections. While West Bengal chief minister Mamata Banerjee indicated she might not be able to attend the next meeting of the alliance on W... [2054 chars]",
  "description": "Parliament Updates News: The government has listed 19 bills and two financial agenda items for the Winter Session of Parliament.",
  "image": "https://images.news18.com/ibnlive/uploads/2023/11/new-parliament-2023-11-e17610ffc30aee27b77cb274b32417b5-16x9.png?impolicy=website&width=1200&height=675",
  "publishedAt": "2023-12-05T03:04:43Z",
  "source": {
    "name": "News18",
    "url": "https://www.news18.com"
  },
  "title": "Parliament Updates News Election Results INDIA Bloc PM Modi Mahua Moitra Cong",
  "url": "https://www.news18.com/politics/parliament-updates-news-election-results-india-bloc-pm-modi-mahua-moitra-cong-8691284.html"
}


const NewsCard = ({dateTime}) => {


  //  if i save this response.articles in state it will store api data in this format response.articles[0]


  const [ news, setNews ] = useState({})
  useEffect(()=> {

    setNews({"title": dummyData["title"], "image": dummyData["url"], "content": dummyData["content"]})
  },[setNews])
  // const [ news, setNews ] = useState({})
  // useEffect(() => {
  //   const fetchNews = async () => {
  //     const getNews = await fetch("https://gnews.io/api/v4/search?q=india&max=1&apikey=${API_KEY}")
  //     const response = await getNews.json();
  //     // console.log(response)
  //     setNews(response.articles[0])
  //   }

  //   fetchNews();
  // }, [])
  

  return (
    <div className="news_card">
      <div className="news_img_container">
        <img src={dummyData.image} alt="this" />
        <div className="news_title">
          <p className='title_date'>{dummyData.title}</p>
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