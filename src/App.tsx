import './App.css'
import DialogText from './components/text/dialog/dialogText'
import introScript from './dialogScripts/opening/introScript'

function App() {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center sm:px-0 md:px-16'>
      <div className=' w-full'>
        <DialogText
          script={introScript}
          onFinal={()=>{alert("It's over.")}}
        />
      </div>
    </div>
    
  )
}

export default App
