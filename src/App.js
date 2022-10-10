import './Assets/Styles/tailwind.scss';
import AppRouter from './Components/App/AppRouter/AppRouter';
import { BlogSidebar } from './Components/Partials/BlogSidebar';
import { Footer } from './Components/Partials/Footer';
import Header from './Components/Partials/Header';

function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <BlogSidebar />
      <Footer />
    </>
  );
}

export default App;
