import { AuthProvider } from './AuthProvider';
import Routes from './Routes';

// make auth provider usable throughout app
const Providers = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default Providers;