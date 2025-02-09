import React, { useState } from "react";
import CategorieCard from "./categorieCards";
import mainArray from "../array/mainArray"
import entertainment from "../array/entertainment";
import generalknowledge from "../array/generalknowledge";
import geography from "../array/geography";
import history from "../array/history";
import scienceAndNature from "../array/scienceAndNature";
import Quiz from "./Quiz";
const Quizzes = () => {
    function answerQuiz(index, obj) {

        if (index === 9) {

            setDone(true);

        }
        if (obj.isCorrect) {
            setTotalCorrect(totalCorrect + 1)
        }
        setQuixIndex(index + 1);
        if (selectedAnswers.length < 1) {
            setSelectedAnswers([obj]);
        } else {
            setSelectedAnswers([...selectedAnswers, obj]);
        }
    }
    function getRandomUniqueNumbers(min, max, count) {
        if (count > (max - min + 1)) {
            throw new Error("Cannot generate more unique numbers than the range allows.");
        }

        const numbers = new Set();  // Use a Set to ensure uniqueness

        while (numbers.size < count) {
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            numbers.add(randomNumber - 1);
        }

        return Array.from(numbers); // Convert the Set to an array
    }

    // Get 10 unique random numbers between 1 and 100 (inclusive)



    const [quizCategory, setQuizCategory] = useState("");
    const [tenQuiz, setTenQuiz] = useState([]);
    const [quizIndex, setQuixIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [done, setDone] = useState(false);
    const [totalCorrect, setTotalCorrect] = useState(0)
    const handelClick = (text) => {
        // console.log(randomNumbers);
        var randomQuiz = [];


        const randomNumbers = getRandomUniqueNumbers(1, 30, 10);

        if (text === "General Knowledge") {
            for (let index = 0; index < randomNumbers.length; index++) {
                randomQuiz.push({
                    ...generalknowledge[randomNumbers[index]],
                    status: null,
                    num: index,
                })

            }
            // randomQuiz.push(generalknowledge[Math.floor(Math.random() * 30) + 1])
            setQuizCategory(text);
        } else if (text === "Science and Nature") {
            for (let index = 0; index < randomNumbers.length; index++) {
                randomQuiz.push({
                    ...scienceAndNature[randomNumbers[index]],
                    status: null,
                    num: index,
                })
            }
            setQuizCategory(text);
        } else if (text === "History") {
            for (let index = 0; index < randomNumbers.length; index++) {
                randomQuiz.push({
                    ...history[randomNumbers[index]],
                    status: null,
                    num: index,
                })

            }
            setQuizCategory(text);
        } else if (text === "Entertainment (Movies, Music, TV)") {
            for (let index = 0; index < randomNumbers.length; index++) {
                randomQuiz.push({
                    ...entertainment[randomNumbers[index]],
                    status: null,
                    num: index,
                })
            }
            setQuizCategory(text);
        } else if (text === "Geography") {
            for (let index = 0; index < randomNumbers.length; index++) {
                randomQuiz.push({
                    ...geography[randomNumbers[index]],
                    status: null,
                    num: index,
                })
            }
            setQuizCategory(text);
        } else {
            randomQuiz = [];
            setDone(false);
            setQuixIndex(0);
            setTenQuiz([]);
            setSelectedAnswers([]);
            setTotalCorrect(0);
            setQuizCategory("");

        };
        setTenQuiz(randomQuiz);
    };

    return (
        <div className={`${quizCategory === "" ? 'quizzes' : 'category'}`}>

            {quizCategory === "" && (
                mainArray.map((category, id) => {
                    return (
                        <CategorieCard key={id} id={category.id} category={category.category} description={category.description} imgSrc={category.imgSrc} btnClick={handelClick}></CategorieCard>
                    )
                }))
            }
            {(quizCategory !== "" && done === false) && (
                tenQuiz.map((item, id) => {
                    return (
                        quizIndex === id ? <Quiz  {...item} btnClick={answerQuiz} key={id} type="notAnswer" /> : null
                    )
                })
            )}
            {(done === true) && (
                <div className="answeredDiv">
                    <h2 className="title">{totalCorrect} out of 10 Quizes</h2>
                    {selectedAnswers.map((item, id) => {
                        return (
                            <Quiz  {...item} key={id} type="Answered" />
                        )
                    })}
                    <button type="button" className="btn btn-success btns" onClick={() => {
                        handelClick("done");
                    }}>Done</button>
                </div>
            )}

        </div>
    )
}
export default Quizzes;