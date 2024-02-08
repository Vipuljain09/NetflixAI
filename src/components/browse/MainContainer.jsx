import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {

  const firstVideoDetails = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );

  if(firstVideoDetails==null)return;
  const {title,id,overview} = firstVideoDetails[0];
    
  return (
    <div className=''>
      <VideoTitle title={title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
