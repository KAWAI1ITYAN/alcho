import './App.css';
import { Header } from 'shared/components/header/header';
import { Router } from 'shared/router/router';
import { Footer } from 'shared/components/footer/footer';

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
