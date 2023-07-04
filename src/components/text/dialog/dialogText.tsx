import { useState, useEffect } from "react";
import TypeWriter from "../../typewriter/typewriter";

interface DialogTextProps {
    script: {
        text: string;
        textStyle?: object;
        textClass?: string;
    }[][],
    onFinal?:()=>void;
}

const DialogText: React.FC<DialogTextProps> = ({script, onFinal}) => {
    const [scriptIndex, setScriptIndex] = useState(0);
    const [canNext, setCanNext] = useState(false);

    function handleSkip(){
        if(canNext && scriptIndex+1 < script.length) {
            setCanNext(false);
            setScriptIndex(scriptIndex+1);
        } else if(onFinal) {
            onFinal();
        }
    }
    return (
        <div className="flex flex-col gap-1 w-full">
            <div>
            {
                script&&
                <TypeWriter
                    text = {script[scriptIndex]}
                    typeSpeed={50}
                    className={"flex w-full flex-wrap"}
                    onFinish={()=>{setCanNext(true);}}
                />
            }
            </div>
            <button onClick={handleSkip}>Next</button>
        </div>
    )
}

export default DialogText;