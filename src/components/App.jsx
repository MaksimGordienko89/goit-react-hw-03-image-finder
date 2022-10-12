import Searchbar from './Searchbar/Searchbar';
import LoaderImg from './Loader/Loader';
import { ToastContainer } from 'react-toastify';
import { ImageGallery } from './ImageGallery/ImageGallery';

export const App = () => {
  return (
    <>
      <Searchbar />
      {<ImageGallery />}
      {<LoaderImg />}
      <ToastContainer autoClose={2000} />
    </>
  );
};
