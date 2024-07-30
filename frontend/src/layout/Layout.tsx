import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

//typescript object here any object of this 
interface Props{
    children: React.ReactNode;
}


const Layout = ({children}:Props) => {
    return(
        <div className="flex flex-col min-h-screen">
            <Header />
            <Hero />
            {/* for dyynamic content fromone template */}
            <div className="container mx-auto py-10 flex-1">
                {children}
            </div>
            <Footer />
        </div>

    );
};

export default Layout;