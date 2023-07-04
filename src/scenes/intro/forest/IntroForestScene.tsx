import {useState} from 'react'
import DialogText from "../../../components/text/dialog/dialogText";
import introScript from "../../../dialogScripts/opening/introScript";
import afterExplosionScript from '../../../dialogScripts/opening/afterExplosionScript';

const IntroForestScene: React.FC = () => {
    const [step, setStep] = useState(0);

    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center sm:px-0 md:px-16'>
            <div className=' w-full '>
                {
                    step === 0 ?
                    <DialogText
                        script={introScript}
                        onFinal={()=>{alert("PSHAHEHAHHSHSHAHAHHSHAHHSHAHSHSHAHAS"); setStep(1)}}
                    />:
                    step === 1?
                    <DialogText
                        script={afterExplosionScript}
                    />:<></>
                }
                
            </div>
        </div>
    )
}

export default IntroForestScene;