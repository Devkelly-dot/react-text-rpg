import './App.css'
import DialogText from './components/text/dialog/dialogText'
import TypeWriter from './components/typewriter/typewriter'
import introScript from './dialogScripts/opening/introScript'
import testScript from './dialogScripts/opening/testScript'

function App() {
  return (
    <div className='w-full'>
      <DialogText
        script={introScript}
        onFinal={()=>{alert("It's over.")}}
      />
    </div>
  )
}

export default App
