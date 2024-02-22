import { useState } from "react";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const handleShowCart = () => {
        setCartIsShown(true);
    };

    const handleHideCart = () => {
        setCartIsShown(false);
    };

    return (
        <>
            {cartIsShown && <Cart onClose={handleHideCart} />}
            <Header onClickCart={handleShowCart} />
            <main>
                <Meals />
            </main>
        </>
    );
}

export default App;
