import React, { useEffect, useState } from "react";
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroller';
import Spiner from "./Spiner";
import { v4 as uuidv4 } from 'uuid';
const APIKey=process.env.REACT_APP_APIKEY;
const News = (props) => {

  const {pagesize,category,country}=props
  const [totalResults,settotalResult]=useState(1)
  const [page,setpage]=useState(1)
  const [articles,setarticles]=useState([])

  const fetchData = async() => {
    const response= await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${APIKey}&page=${page}&pageSize=${pagesize}`)
         const data= await response.json()
         settotalResult(data.totalResults)
        
        }
      
      
const loadFunc=async()=>{

  const response= await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${APIKey}&page=${page}&pageSize=${pagesize}`)
         const data= await response.json()
         setpage(page+1)
     
         setarticles(articles.concat(data.articles))
        
}
  useEffect(() => {
    fetchData();
    document.title=`News-${category}`
     // eslint-disable-next-line
  },[])
 


  return (
    <>
     <InfiniteScroll
      
        pageStart={pagesize}
        loadMore={loadFunc}
        hasMore={articles.length!==totalResults}
        loader={<Spiner key={uuidv4()}/>}
      >
      <div className='container' > 
        <div className="row row-cols-3  mx-auto" style={{width:'100%'}}>{
          articles.map((e)=>{
           return( <NewsItem key={uuidv4()} title={e.title} description={e.description} Imurl={e.urlToImage} contenturl={e.url}/>)
          })
        }
        </div>

      </div>
      </InfiniteScroll>
    </>
  )
}

export default News
