import React, { Suspense, useState, useEffect } from "react";
import Header from "./components/Header/Header";
import "./App.css";
const Photos = React.lazy(() => import("./components/Photos/Photos.js"));
function App() {
  const [photos, setPhotos] = useState([]);
  const [renderPhotos, setRenderPhotos] = useState([]);
  const [page, setPage] = useState(1);

  const getPhotos = async () => {
    const response = await fetch(
      "https://api.unsplash.com/photos/random?count=30;client_id=eiXfETbguR3VWY1oM_xx2R8anSb3DS60CKv3IzvdtsA"
    );
    const data = await response.json();
    setPhotos(data);
    console.log(data);
  };

  const getData = (e) => {
    if (window.innerHeight + window.pageYOffset >= document.body.scrollHeight) {
      console.log(
        window.innerHeight + window.pageYOffset,
        document.body.scrollHeight
      );
      setPage((page) => page + 1);
    }
  };
  useEffect(() => {
    if (photos.length !== 0) {
      const allPhotos = photos.slice(0, page * 5);
      setRenderPhotos(allPhotos);
    }
  }, [page, photos]);

  useEffect(() => {
    getPhotos();
    window.addEventListener("scroll", getData);
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <Suspense fallback={<h1>Loading</h1>}>
          <Photos photos={renderPhotos} />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
