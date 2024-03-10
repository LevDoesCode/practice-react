export default function TabButton({ onClick, children: label, isSelected }) {
    return (
        <li>
            {/* <button className={isSelected ? "active" : ""} onClick={onClick}> */}
            <button className={isSelected ? "active" : undefined} onClick={onClick}>
                {label}
            </button>
        </li>
    );
}
