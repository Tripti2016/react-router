import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

export default function FetchImage (){
  const imageUrl = useLoaderData();

  return (
    <div className="fetch_img m-4"> 
      <h1 className='text-3xl text-gray-800'>Random Image</h1>
      <img src={imageUrl} alt="Random Unsplash" />
    </div>
  );
};
export async function loader() {
  const response = await fetch('https://picsum.photos/200');
  return response.url;
}
