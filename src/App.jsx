import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/components'

function App() {
  const [count, setCount] = useState(0)

  //const [firstCard, setidk] = useState(0)
  
  const arr = ["Hello", "Bye", "I am", "Good Night", "Happy", "Sad", "Good Morning", "How are you?", "Greetings", "Fun"]
  
  const dict = {"Hello": "Hola", "Bye": "Adiós", "I am": "Soy", "Good Night": "Buenas noches", "Happy": "Feliz", 
  "Sad": "Triste", "Good Morning": "Buen día", "How are you?": "¿Cómo estás?", "Greetings": "Saludos", "Fun": "Divertida", 
  'Hola': 'Hello', 'Adiós': 'Bye', 'Soy': 'I am', 'Buenas noches': 'Good Night', 'Feliz': 'Happy', 'Triste': 'Sad',
  'Buen día': 'Good Morning', '¿Cómo estás?': 'How are you?', 'Saludos': 'Greetings', 'Divertida': 'Fun'}

  const [firstCard, setFirstCard] = useState(arr[0])
  /*const [secondCard, setSecondCard] = useState("Bye")
  const [thirdCard, setThirdCard] = useState("I am")
  const [fourthCard, setFourthCard] = useState("Good Night")
  const [fifthCard, setFifthCard] = useState("Happy")
  const [sixthCard, setSixthCard] = useState("Sad")
  const [seventhCard, setSeventhCard] = useState("Good Night")
  const [eightCard, setEightCard] = useState("How are you?")
  const [ninthCard, setNinthCard] = useState("Greetings")
  const [tenthCard, setTenthCard] = useState("Pizza")*/

  //The title of the card set and some information about it, such as a short description and the total number of cards are displayed

  useEffect(() => {
    setFirstCard(arr[count]);
  }, [count]);

  function RightButton() {
    if(count >= 0 && count < 9) {
      setCount(count + 1)
    }
  }

  function LeftButton() {
    if(count > 0 && count <= 9) {
      setCount(count - 1)
    }  
  }

  function flip() {
    setFirstCard(dict[firstCard])
  }

  return (

    <div className='full'>
      <div className="title">English to Spanish Studying Flashcards</div>
      <div className="description">This is a set of english to spanish flashcards used to help people understand certain spanish words</div>
      <div className="word_count">Card Count: 10</div>
      <div className="funny">
        <Card data={firstCard} ready={flip}/>
      </div>
      <div className="fun-buttons">
        <button onClick={LeftButton} className="leftbutton">Back</button>
        <button onClick={RightButton} className="rightbutton">Next</button>
      </div>
    </div>
  )
}

export default App