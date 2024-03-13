export default function Tabs({ children, buttons, buttonsContainer }) {
    const ButtonContainer = buttonsContainer || "div";
    return (
        <>
            <ButtonContainer>{buttons}</ButtonContainer>
            {children}
        </>
    );
}
