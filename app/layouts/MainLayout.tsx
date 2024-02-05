'use client'
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainPage from '../components/MainPage';

const MainLayout: React.FC = ({ children }) => {
    return (
        <>
        <div id="MainLayout" className="min-w-[1050px] max-w-[1300px] mx-auto">
            <div>
                <Header />
                <MainPage />
                <Footer />
            </div>
        </div>
        </>
    );
  };
  
  export default MainLayout;