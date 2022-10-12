import Searchbar from './Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  return (
    <>
      <Searchbar />
      <ToastContainer autoClose={2000} />
    </>
  );
};
