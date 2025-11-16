import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Header />
      <UserProfile name="Ebenezer Adekanmi" age={25} />
      <MainContent />
      <Footer />
    </div>
  );
}
