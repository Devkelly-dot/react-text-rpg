import './App.css'
import TypeWriter from './components/typewriter/typewriter'

function App() {
  return (
    <>
      <h1 className='text-red-500'>Hello</h1>
      <TypeWriter
        text = {[
          {
            text: "Make the word 'cat' always be red. Get ready I'm about to say ",
          },
          {
            text: "cat",
            textClass: "text-red-500 bg-blue-500"
          },
          {
            text: " ... wow good job"
          }
        ]}
        typeSpeed={50}
        onFinish={()=>alert("Finished!")}
      />
    </>
  )
}

export default App
