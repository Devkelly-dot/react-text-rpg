import { useState, useEffect } from "react";
import TypeWriter from "../../typewriter/typewriter";
interface TextStyle {
    [key: string]: string;
}
interface DialogTextProps {
    script: {
        text: string;
        textStyle?: TextStyle;
        textClass?: string;
    }[][],
    onFinal?:()=>void;
}

const DialogText: React.FC<DialogTextProps> = ({script, onFinal}) => {
    const [scriptIndex, setScriptIndex] = useState(0);
    const [canNext, setCanNext] = useState(false);
    const [startFinished, setStartFinished] = useState(false);

    function handleSkip(){
        if(canNext && scriptIndex+1 < script.length) {
            setCanNext(false);
            setScriptIndex(scriptIndex+1);
            setStartFinished(false);
        } else if(canNext && onFinal) {
            setStartFinished(false);
            onFinal();
        } else {
            setStartFinished(true);
            if(scriptIndex+1 < script.length) {
                setCanNext(true);
            }
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
                    startFinished = {startFinished}
                />
            }
            </div>
            <button onClick={handleSkip}>Next</button>
        </div>
    )
}

export default DialogText;