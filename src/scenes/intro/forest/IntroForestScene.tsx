import {useState} from 'react'
import DialogText from "../../../components/text/dialog/dialogText";
import introScript from "../../../dialogScripts/opening/introScript";
import afterExplosionScript from '../../../dialogScripts/opening/afterExplosionScript';
import findingGoldScript from '../../../dialogScripts/opening/findingGoldScript';

const IntroForestScene: React.FC = () => {
    const [step, setStep] = useState(0);

    function handleChoices(index:number) {
        switch(index) {
            case 0:
                setStep(2);
                break;
            case 1: 
                alert("You went home but you didn't find gold, sorry :(");
                window.location.reload();
                break;
        }
    }
    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center sm:px-2 md:px-16'>
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
                        onChoose = {handleChoices}
                    />:
                    step === 2?
                    <DialogText
                        script={findingGoldScript}
                        onFinal={()=>{alert("You win!"); setStep(3)}}
                    />:<div>Enjoy your riches!</div>
                }
                
            </div>
        </div>
    )
}

export default IntroForestScene;