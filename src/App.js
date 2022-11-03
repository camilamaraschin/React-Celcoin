import {useState, useEffect} from 'react'
import axios from 'axios';
import GifLoader from 'react-gif-loader';

function App() {
  function buildImage() {
    const [image, setImage] = useState (null);
    const site = 'https://dog.ceo/api/breeds/image/random'
    
  }
  useEffect(() => {
    const promise = axios.get(`${process.env.REACT_APP_BACKEND_URL}/products`);
    promise.then((response) => {
      setProductsList(response.data);
    });
    promise.catch(e => console.log("deu ruim! 😢", e));
  }, []);

  


  const image = buildImage();{
  return (
    <div className="view">
      <div className="image">
        {image}
      </div>
    </div>
  );
}

export default App
