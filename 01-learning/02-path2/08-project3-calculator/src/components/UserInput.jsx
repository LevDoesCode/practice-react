export default function UserInput() {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="">Initial Investment</label>
                    <input type="number" required />
                </p>
                <p>
                    <label htmlFor="">Annual Investment</label>
                    <input type="number" required />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="">Expected Return</label>
                    <input type="number" required />
                </p>
                <p>
                    <label htmlFor="">Duration</label>
                    <input type="number" required={true} />
                </p>
            </div>
        </section>
    );
}

// export default function UserInput({
//     initialInvestment,
//     setInitialInvestment,
//     annualInvestment,
//     setAnnualInvestment,
//     expectedReturn,
//     setExpectedReturn,
//     duration,
//     setDuration,
// }) {
//     return (
//         <div id="user-input">
//             <label htmlFor="initial-investment">Initial Investment:</label>
//             <input
//                 type="number"
//                 id="initial-investment"
//                 value={initialInvestment}
//                 onChange={(e) => setInitialInvestment(e.target.value)}
//             />
//             <label htmlFor="annual-investment">Annual Investment:</label>
//             <input
//                 type="number"
//                 id="annual-investment"
//                 value={annualInvestment}
//                 onChange={(e) => setAnnualInvestment(e.target.value)}
//             />
//             <label htmlFor="expected-return">Expected Return:</label>
//             <input
//                 type="number"
//                 id="expected-return"
//                 value={expectedReturn}
//                 onChange={(e) => setExpectedReturn(e.target.value)}
//             />
//             <label htmlFor="duration">Duration (Years):</label>
//             <input type="number" id="duration" value={duration} onChange={(e) => setDuration(e.target.value)} />
//         </div>
//     );
// }
