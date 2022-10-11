import './Assets/Styles/tailwind.scss';
import AppRouter from './Components/App/AppRouter/AppRouter';
import { BlogSidebar } from './Components/Partials/BlogSidebar';
import { Footer } from './Components/Partials/Footer';
import Header from './Components/Partials/Header';

function App() {
  return (
    <>
      <Header />
      <main className="main grid grid-cols-1 sm:grid-rows sm:grid-cols-[3fr_1fr] py-[1rem] px-[1rem] sm:px-[5rem]">
        <AppRouter />
        <BlogSidebar />
      </main>

      <Footer />
    </>
  );
}

export default App;
