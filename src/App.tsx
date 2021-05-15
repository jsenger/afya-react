import { useCallback, useEffect, useState } from 'react';

import LoaderContent from './LoaderContent';
import { cocktailApi, dogApi } from './services/api';

interface Cocktail {
  strDrinkThumb: string;
  strDrink: string;
  strInstructions: string;
}

const App: React.FC = () => {
  const [dogPhoto, setDogPhoto] = useState<string>('');
  const [cocktail, setCocktail] = useState<Cocktail>({
    strDrinkThumb: '',
    strDrink: '',
    strInstructions: ''
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => handleSortingImage(), []);

  const handleSortingImage: any = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      dogApi.get('').then(response => {
        setDogPhoto(response.data.message);
        cocktailApi.get('random.php').then(response => {
          setIsLoading(false);
          setCocktail(response.data.drinks[0]);
        });
      });
    }, 1000);
  }, []);

  return (
    <div>
      <div>
        <h1>Hello Gama Academy</h1>
        <button onClick={handleSortingImage}>Sextou!</button>
      </div>

      {isLoading ? (
        <LoaderContent />
      ) : (
        <div>
          <h2>Como:</h2>
          <img src={cocktail.strDrinkThumb} alt="cocktail" width="200" />
          <h3>{cocktail.strDrink}</h3>
          <strong>Modo de preparo:</strong>
          <p>{cocktail.strInstructions}</p>

          <h2>Com quem:</h2>
          <img src={dogPhoto} alt="dog" width="200" />
        </div>
      )}
    </div>
  );
};

export default App;
