import loadingGif from './img/loading.gif';

const LoaderContent: React.FC = () => {
  return (
    <div>
      <img src={loadingGif} alt="dog loader" />
    </div>
  );
};

export default LoaderContent;
