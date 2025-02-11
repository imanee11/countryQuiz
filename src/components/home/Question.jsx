import React from "react";

const Question = ({ question, userAnswer, handleAnswer }) => {
    if (!question) return null;

    return (
        <div className="flex flex-col items-center text-center">
            <h2 className="text-[18px] flex items-center gap-2 pt-5 pb-6">
                Which country does this flag 
                <img src={question.flag} alt="Country flag" className="w-10 h-7 rounded-md" /> 
                belong to?
            </h2>
            
            <div className="pt-5 grid grid-cols-2 gap-3 w-full max-w-[400px]">
                {question.options.map((option, index) => (
                    <button
                        key={index}
                        className={`px-[3vw] py-[2vh] rounded-md ${
                            userAnswer === option
                                ? "bg-[#393f6f] text-white"
                                : "bg-gradient-to-r from-[#E65895] to-[#BC6BE8]"
                        }`}
                        onClick={() => handleAnswer(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Question;
