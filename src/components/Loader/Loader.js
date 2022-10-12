import { Grid } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled.jsx';

const LoaderImg = () => {
  return (
    <Wrapper>
      <Grid heigth="200" width="200" color="blue" ariaLabel="loading" />
    </Wrapper>
  );
};

export default LoaderImg;
