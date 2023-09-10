import React from 'react'

const NewsItem = (props) => {
  const {title,description,Imurl,contenturl}=props
  return (
    <div className="card m-2 col my-3" style={{width:"400px",height:'100%'}} >

            <img   src={`${Imurl?Imurl:'https://media.istockphoto.com/id/1182477852/photo/breaking-news-world-news-with-map-backgorund.jpg?b=1&s=170667a&w=0&k=20&c=sY8G6CS65VlmrW1FKwOgOSMpc8AjxCIPVkiIX62Fq8c='}`} className="card-img-top" alt="..." />
            <div   className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={`${contenturl}`} className="btn btn-primary">Read More</a>
            </div>
          </div>
  )
}

export default NewsItem
