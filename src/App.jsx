import { Suspense } from 'react';
import './App.css';
import Countries from './components/Countries/Countries';

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all').then(res => res.json());


function App() {
  return (
    <>
      <h1 className='text-2xl font-bold text-center my-8'>React World on the go...</h1>

      <Suspense fallback={<div><span className="loading loading-spinner loading-xl"></span></div>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>

    </>

  )
}

export default App
