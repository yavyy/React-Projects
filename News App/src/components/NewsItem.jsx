import React from 'react'
import newsImage from '../assets/News.jpg'

function NewsItem({ title, description, url, srcImage }) {
  if (title === "[Removed]" && description === "[Removed]") return null
  return (
    <div className="card d-inline-block bg-dark text-light my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
      <img src={srcImage ? srcImage : newsImage} className="card-img-top" style={{ height: "200px", width: "330px" }} />
      <div className="card-body">
        <h5 className="card-title">{title ? title.slice(0, 40) : "Breaking news"}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : "Updates: What is going on today, Check out here."}</p>
        <a href={url} className="btn btn-primary">Read more </a>
      </div>
    </div>
  )
}

export default NewsItem