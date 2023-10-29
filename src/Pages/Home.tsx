import React, { useEffect } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import  Card  from "../Components/Cards";
import  Spinner  from "../Components/Spinner";
import { Navbar } from '../Components/Navbar';
import { Sidebar } from '../Components/Sidebar';
import { useAppDispatch, useAppSelector } from "../Store/hooks";
import { getHomePageVideos } from "../Store/reducers/getHomePageVideos";
import { HomePageVideos } from "../Types";
import { clearVideos } from '../Store';

export const Home = () => {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);

  useEffect(() => {
    return () => {
      dispatch(clearVideos());
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch]);

  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: "7.5vh" }}>
        <Navbar />
      </div>
      <div className="flex" style={{ height: "92.5vh" }}>
        <Sidebar />
        {
          videos.length ? 
          (
            <InfiniteScroll
              dataLength={videos.length}
              next={() => dispatch(getHomePageVideos(true))}
              hasMore={videos.length < 500}
              loader={<Spinner />}
              height={'100%'}
            >
              <div className="grid gap-y-14 gap-x-8 grid-cols-4 p-8">
                {videos.map((item: HomePageVideos) => {
                  return <Card data={item} key={item.videoId} />;
                })}
              </div>
            </InfiniteScroll>
          ) : ( 
            <Spinner /> 
          )
        }
      </div>
    </div>
  )
}
