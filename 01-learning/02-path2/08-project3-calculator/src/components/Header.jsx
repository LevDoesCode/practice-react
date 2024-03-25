import logo from "../assets/investment-calculator-logo.png";

export default function Header({ title }) {
    return (
        <header id="header">
            <img src={logo} alt="Money bag" />
            <h1>{title}</h1>
        </header>
    );
}
