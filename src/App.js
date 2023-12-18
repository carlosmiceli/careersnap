import './App.css';
import Submit from './components/Submit';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App flex flex-col bg-indigo-200 text-black h-screen">
      <Submit />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;