import logo from "../assets/logo.png";
import classes from "./Header.module.css";

export default function Header() {
    return (
        <header>
            <img src={logo} alt="A canvas" />
            <h1>ReactArt</h1>
            <p className={classes.paragraph}>A community of artists and art-lovers.</p>
            <p className={1 === 1 ? classes.paragraph : undefined}>A community of artists and art-lovers.</p>
            <p className={`${classes.paragraph}`}>A community of artists and art-lovers.</p>
        </header>
    );
}
