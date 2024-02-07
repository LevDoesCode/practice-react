const Form = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted");
    };

    const handleReset = (event) => {
        event.preventDefault();
        console.log("Form reset");
    };

    const handleInputChange = (inputID, value) => {
        console.log(inputID, value);
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input
                        onChange={(event) => handleInputChange("current-savings", event.target.value)}
                        type="number"
                        id="current-savings"
                    />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input
                        onChange={(event) => handleInputChange("yearly-contribution", event.target.value)}
                        type="number"
                        id="yearly-contribution"
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">Expected Interest (%, per year)</label>
                    <input
                        onChange={(event) => handleInputChange("expected-return", event.target.value)}
                        type="number"
                        id="expected-return"
                    />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input
                        onChange={(event) => handleInputChange("duration", event.target.value)}
                        type="number"
                        id="duration"
                    />
                </p>
            </div>
            <p className="actions">
                <button onClick={handleReset} type="reset" className="buttonAlt">
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form>
    );
};

export default Form;
