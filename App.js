
import { AuthProvider } from './context/AuthContext';
import Navigation from './Navigation';

const App = () => {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
};

export default App;