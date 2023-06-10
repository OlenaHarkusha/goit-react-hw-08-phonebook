import { useAuth } from './Hooks/Hooks';
import { AuthNavBar } from './AuthNavBar';
import { NavBar } from './NavBar';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return <>{isLoggedIn ? <AuthNavBar /> : <NavBar />}</>;
};
