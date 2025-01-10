import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'

function NewsBoard({category}) {
  const [articles, setArticles] = useState([])

  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles))
  }, [category])

  return (
    <div>
      <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
      {
        articles.map((item, index) => {
          return <NewsItem key={index} title={item.title} description={item.description} url={item.url} srcImage={item.urlToImage} />
        })
      }
    </div>
  )
}

export default NewsBoard