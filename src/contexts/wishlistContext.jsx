import { createContext, useState } from 'react';


const WishContext = createContext(null);

function WishProvider({ children }) {
    const [wishList, setWishList] = useState([]);

   
    const addWishHandler = (product, isAdding) => {
        if (isAdding) {
            setWishList((prev) => {
                if (prev.some((item) => item.id === product.id)) return prev;
                return [...prev, product];
            });
        } else {
            setWishList((prev) => prev.filter((item) => item.id !== product.id));
        }
    };

    return (
        <WishContext.Provider value={{ wishList, setWishList, addWishHandler }}>
            {children}
        </WishContext.Provider>
    );
}

export { WishContext, WishProvider }