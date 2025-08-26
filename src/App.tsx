import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Competitions from './components/Competitions';
import Projects from './components/Projects';
import Team from './components/Team';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black z-0"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent z-0"></div>
      
      {/* Tech Grid Background */}
      <div className="fixed inset-0 opacity-5 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <Projects />
        <Courses />
        <Competitions />
        <Team />
        <Footer />
        
      </div>
    </div>
  );
}

export default App;
