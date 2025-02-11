import React, { useEffect, useState } from 'react';
import Question from './Question';
import Congratulations from './Congratulations';

// import axios from 'axios';

const Main = () => {

    const [country, setCountry] = useState([]);

    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [score , setScore] = useState(0);

    useEffect(() => {
        // Fetch quiz questions from the API
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json())
            .then((data) => {
                setCountry(data);
                generateQuestions(data);
            })
            .catch(error => console.error('error fetching data', error));
    }, []);


    //* generate 10 questions
    const generateQuestions = (data) => {
        let selectedQuestions = [];
        let usedIndexes = new Set();

        while (selectedQuestions.length < 10){
            let randomIndex = Math.floor(Math.random() * data.length);
            if (!usedIndexes.has(randomIndex)){
                usedIndexes.add(randomIndex);
                let country = data[randomIndex];

                let options = [country.name.common];
                while (options.length <4){
                    let optionIndex = Math.floor(Math.random() * data.length);
                    let option = data[optionIndex].name.common;

                    if(!options.includes(option)){
                        options.push(option);
                    }
                }

                options = options.sort(() => Math.random() - 0.5);

                selectedQuestions.push({
                    question: `Which country does this flag belongs to?`,
                    flag: country.flags.png,
                    options: options,
                    answer: country.name.common
                });
            }
        }

        setQuestions(selectedQuestions);
    }



    const handleAnswer = (questionIndex, answerIndex) => {
        // Update user's answer for the current question

    };

    const handleNextQuestion = () => {
        // Move to the next question
    };

    const handlePrevQuestion = () => {
        // Move to the previous question
    };

    const handleFinishQuiz = () => {
        // Calculate the quiz result and show the result page
    };



    return (
        <>
            {/* {
                country.map(e => (
                    <div  >
                        {e.name.common}
                        <img src={e.flags.png} alt={`${e.name.common} flag`} />
                        </div>
                ))
            } */}
            <div className='text-white flex flex-col justify-center mx-auto h-[100vh] w-[60vw] '>
                <div className='flex justify-between items-center pb-7'>
                    <p className='font-semibold text-[20px]'>Country Quiz</p>
                    <button className='font-medium text-[15px] px-5 py-[6px] rounded-full bg-gradient-to-r from-[#E65895] to-[#BC6BE8]'>🏆 <span>{score}</span>/10 Points</button>
                </div>
                <div className='bg-[#343963] py-10 rounded-md flex flex-col items-center justify-center'>
                    {/* btns */}
                    <div className='flex items-center justify-center gap-2'>
                        <button className='bg-gradient-to-r from-[#E65895] to-[#BC6BE8] rounded-full w-[3vw] h-[6vh] '>1</button>
                        <button className='bg-gradient-to-r from-[#E65895] to-[#BC6BE8] rounded-full w-[3vw] h-[6vh] '>2</button>
                        <button className='bg-gradient-to-r from-[#E65895] to-[#BC6BE8] rounded-full w-[3vw] h-[6vh] '>3</button>
                        <button className='bg-gradient-to-r from-[#E65895] to-[#BC6BE8] rounded-full w-[3vw] h-[6vh] '>4</button>
                        <button className='bg-gradient-to-r from-[#E65895] to-[#BC6BE8] rounded-full w-[3vw] h-[6vh] '>5</button>
                        <button className='bg-gradient-to-r from-[#E65895] to-[#BC6BE8] rounded-full w-[3vw] h-[6vh] '>6</button>
                        <button className='bg-gradient-to-r from-[#E65895] to-[#BC6BE8] rounded-full w-[3vw] h-[6vh] '>7</button>
                        <button className='bg-gradient-to-r from-[#E65895] to-[#BC6BE8] rounded-full w-[3vw] h-[6vh] '>8</button>
                        <button className='bg-gradient-to-r from-[#E65895] to-[#BC6BE8] rounded-full w-[3vw] h-[6vh] '>9</button>
                        <button className='bg-[#393f6f] rounded-full w-[3vw] h-[6vh] '>10</button>
                    </div>
                    {!showResult ? (
                        <Question
                            question={questions[currentQuestion]}
                        />
                    ):(
                        <Congratulations/>
                    )

                    }

                </div>
            </div>
        </>
    );
};

export default Main;