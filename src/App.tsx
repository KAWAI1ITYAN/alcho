import './App.css';
import { Header } from 'shared/components/header/header';
import { Footer } from 'shared/components/footer/footer';
import { Router } from 'shared/router/router';

function App() {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
