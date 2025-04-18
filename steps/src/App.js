import {useState} from "react";

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

export default function App() {
    const [step, setStep] = useState(1);

    return (
        <div className="steps">
            <div className="numbers">
                <div className={step >= 1 ? "active" : ""}>1</div>
                <div className={step >= 2 ? "active" : ""}>2</div>
                <div className={step >= 3 ? "active" : ""}>3</div>
            </div>
            <p className="message">
                Step {step}: {messages[step - 1]}
            </p>

            <div className="buttons">
                <Button bGColor="#7950f2" color="#fff"
                        handleClick={() =>
                            step > 1 ? setStep((currentStep) => currentStep - 1) : step
                        }
                >
                    Previous
                </Button>

                <Button bGColor="#7950f2" color="#fff"
                        handleClick={() =>
                            step < 3 ? setStep((currentStep) => currentStep + 1) : step
                        }
                >
                    Next
                </Button>

                <Button bGColor="#7950f2" color="#fff"
                        handleClick={() => alert(step)}
                >
                    State
                </Button>
            </div>
        </div>
    );
}

function Button({bGColor, color, handleClick, children}) {
    return (
        <button
            style={{backgroundColor: bGColor, color: color}}
            onClick={handleClick}
        >
            {children}
        </button>
    );
}
