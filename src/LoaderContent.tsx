import loadingGif from './img/loading.gif';

const LoaderContent: React.FC = () => {
  return (
    <div>
      <p>Carregando...</p>
      <img src={loadingGif} alt="dog loader" width="200" />
    </div>
  );
};

export default LoaderContent;
