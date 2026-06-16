import { createContext, useState, useContext } from "react";
import NewsletterBanner from "../components/NewsletterBanner";

// Creazione contesto
const NewsletterContext = createContext(null);

function NewsletterProvider({children}) {

    const [isVisible, setIsVisible] = useState (() => {
        return localStorage.getItem('is_banner_hidden') !== 'true';
    });

    const hideBanner = () => {
        setIsVisible(false);
        localStorage.setItem('is_banner_hidden', 'true')
    };

    const showBanner = () => {
        setIsVisible(true);
        localStorage.removeItem('is_banner_hidden'); // reset
    };

    const value = {
        isVisible,
        hideBanner,
        showBanner
    }

    return (
        <NewsletterContext value={value}>
            {children}
            {isVisible && <NewsletterBanner/>}
        </NewsletterContext>
    )
};

export {NewsletterContext, NewsletterProvider};