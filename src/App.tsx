import { useEffect, useState } from 'react';

import LoaderContent from './LoaderContent';
import { dogApi } from './services/api';

const App: React.FC = () => {
  const [dogPhoto, setDogPhoto] = useState<string>('');
  const [cocktail, setCocktail] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => handleSortingImage(), []);

  function handleSortingImage() {
    setIsLoading(true);
    setTimeout(() => {
      dogApi.get('').then(response => {
        setIsLoading(false);
        setDogPhoto(response.data.message);
      });
    }, 1000);
  }

  return (
    <div>
      <div>
        <h1>Hello Gama Academy</h1>
        <h4>Veja estas imagens</h4>
        <button onClick={handleSortingImage}>Clique aqui</button>
      </div>

      {isLoading ? <LoaderContent /> : <img src={dogPhoto} alt="dog" />}
    </div>
  );
};

export default App;
