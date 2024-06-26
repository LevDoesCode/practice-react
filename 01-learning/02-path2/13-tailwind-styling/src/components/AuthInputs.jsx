import { useState } from "react";
import { styled } from "styled-components";
import AuthInput from "./Input";
import Button from "./Button";
import AuthInput2 from "./Input2";

const ControlsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #6b7280;
`;

const Label2 = styled.label`
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${(props) => (props.$invalid ? "#f87171" : "#6b7280")};
    color: ${({ $invalid }) => ($invalid ? "#f87171" : "#6b7280")};
`;

const Input = styled.input`
    width: 100%;
    padding: 0.75rem 1rem;
    line-height: 1.5;
    background-color: #d1d5db;
    color: #374151;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

const Input2 = styled.input`
    width: 100%;
    padding: 0.75rem 1rem;
    line-height: 1.5;
    background-color: ${({ $invalid }) => ($invalid ? "blue" : "#d1d5db")};
    color: ${({ $invalid }) => ($invalid ? "#ef4444" : "#374151")};
    border: 1px solid transparent;
    border-color: ${({ $invalid }) => ($invalid ? "white" : "transparent")};
    border: 1px solid ${({ $invalid }) => ($invalid ? "white" : "transparent")};
    border-radius: 0.25rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

const Buttonx = styled.button`
    padding: 1rem 2rem;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 0.25rem;
    color: #1f2937;
    background-color: #f0b322;
    border-radius: 6px;
    border: none;

    &:hover {
        background-color: #f0920e;
    }
`;

export default function AuthInputs() {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);

    function handleInputChange(identifier, value) {
        if (identifier === "email") {
            setEnteredEmail(value);
        } else {
            setEnteredPassword(value);
        }
    }

    function handleLogin() {
        setSubmitted(true);
    }

    const emailNotValid = submitted && !enteredEmail.includes("@");
    const passwordNotValid = submitted && enteredPassword.trim().length < 6;

    return (
        <div
            id="auth-inputs"
            className="w-full max-w-sm p-8 mx-auto rounded shadow-md bg-gradient-to-b from-stone-500 to-stone-800"
        >
            <ControlsContainer>
                <p>
                    <Label2 $invalid={emailNotValid}>Email</Label2>
                    {/* <Label className={`label${emailNotValid ? " invalid" : ""}`}>Email</Label> */}
                    <Input2
                        $invalid={emailNotValid}
                        type="email"
                        // className={emailNotValid ? "invalid" : undefined}
                        style={{
                            backgroundColor: emailNotValid ? "fed2d2" : "d1d5db",
                        }}
                        onChange={(event) => handleInputChange("email", event.target.value)}
                    />
                </p>
                <p>
                    <Label className={`label${emailNotValid ? " invalid" : ""}`}>Password</Label>
                    <Input
                        type="password"
                        className={passwordNotValid ? "invalid" : undefined}
                        onChange={(event) => handleInputChange("password", event.target.value)}
                    />
                </p>
                <AuthInput
                    invalid={emailNotValid}
                    label="Email2"
                    type="email"
                    onChange={(event) => handleInputChange("email", event.target.value)}
                />
                <AuthInput2
                    invalid={emailNotValid}
                    label="Email3"
                    type="email"
                    onChange={(event) => handleInputChange("email", event.target.value)}
                />
            </ControlsContainer>

            <div className="actions">
                <button type="button" className="text-button">
                    Create a new account
                </button>
                <Buttonx onClick={handleLogin}>Sign In</Buttonx>
            </div>

            {/* Tailwind below */}
            <p style={{ color: "white", fontSize: "2rem" }}>Tailwind Below</p>
            <div className="flex flex-col gap-2 mb-6">
                <AuthInput2
                    invalid={emailNotValid}
                    label="Email"
                    type="email"
                    onChange={(event) => handleInputChange("email", event.target.value)}
                />
                <AuthInput2
                    invalid={emailNotValid}
                    label="Password"
                    type="password"
                    onChange={(event) => handleInputChange("password", event.target.value)}
                />
            </div>
            <div className="flex justify-end gap-8">
                <button type="button" className="text-amber-400 hover:text-amber-200">
                    Create a new account
                </button>
                <Button onClick={handleLogin}>Login</Button>
            </div>
        </div>
    );
}
