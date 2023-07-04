import {useState} from 'react'
import DialogText from "../../../components/text/dialog/dialogText";
import introScript from "../../../dialogScripts/opening/introScript";
import afterExplosionScript from '../../../dialogScripts/opening/afterExplosionScript';

const IntroForestScene: React.FC = () => {
    const [script, setScript] = useState(
        {
            script: introScript,
            onFinal: ()=>{
                alert("PSHAHEHAHHSHSHAHAHHSHAHHSHAHSHSHAHAS");
                setScript(
                    {
                        script: afterExplosionScript,
                        onFinal: ()=>{return}
                    }
                )
            }
        }
    );

    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center sm:px-0 md:px-16'>
            <div className=' w-full '>
                {
                    <DialogText
                        script={script.script}
                        onFinal={script.onFinal}
                    />
                }
                
            </div>
        </div>
    )
}

export default IntroForestScene;