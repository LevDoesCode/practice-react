export default function TabButton({ onClick, children: label }) {
    return (
        <li>
            <button onClick={onClick}>{label}</button>
        </li>
    );
}
