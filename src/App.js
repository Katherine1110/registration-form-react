import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import RegistrationForm from './components/RegistrationForm/RegistrationForm';

function App() {
  return (
    <div className="container">
      <Header />
      <RegistrationForm />
      <Footer />
    </div>
  );
}

export default App;
