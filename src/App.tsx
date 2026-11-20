import './App.css'
import Ball from './Ball.tsx'
import {useState} from 'react'

function App() {

    const ballCount: number = 5;
    const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

    const newNumbers = () => {
        const newArrayNum: number[] = [];

        while (newArrayNum.length < ballCount) {
            const random = Math.floor(Math.random() * 32) + 5;

            if (!newArrayNum.includes(random)) {
                newArrayNum.push(random);
            }
        }

        newArrayNum.sort((a: number, b: number): number => a - b);
        setNumbers(newArrayNum);
    };

  return (
      <div className='container'>
          <div className='balls-row'>
              {numbers.map((num) => (
                  <Ball key={num} number={num} />
              ))}
          </div>

          <button type='button' className='btn-new' onClick={newNumbers}>New numbers</button>
      </div>
  )
}

export default App
