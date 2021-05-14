import { useState } from 'react';
import LoaderContent from './LoaderContent';

const App: React.FC = () => {
  const [dogPhoto, setDogPhoto] = useState<string>('');
  const [cocktail, setCocktail] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLoading = () => setIsLoading(!isLoading);

  return (
    <div>
      <h1>Hello Gama Academy</h1>
      <h4>Veja estas imagens</h4>
      <button onClick={handleLoading}>Clique aqui</button>

      {isLoading && <LoaderContent />}
    </div>
  );
};

export default App;
