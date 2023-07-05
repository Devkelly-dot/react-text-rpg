import { useState, useEffect } from "react";
import { DialogScript } from "../../../interfaces/dialog";
import { TextScript } from "../../../interfaces/script";
import TypeWriter from "../../typewriter/typewriter";
import DialogChoices from "./dialogChoices";

interface DialogTextProps {
    script: DialogScript;
    onFinal?:()=>void;
    onChoose?:(index: number)=>void;
}

const DialogText: React.FC<DialogTextProps> = ({script, onFinal, onChoose}) => {
    const [scriptIndex, setScriptIndex] = useState(0);
    const [canNext, setCanNext] = useState(false);
    const [startFinished, setStartFinished] = useState(false);
    const [showChoices, setShowChoices] = useState(false);

    function handleSkip(){
        if(canNext && (scriptIndex+1 < script.scripts.length)) {
            setCanNext(false);
            setScriptIndex(scriptIndex+1);
            setStartFinished(false);
        } else if(canNext) {
            setStartFinished(false);
            handleDialogEnd();
        } else {
            setStartFinished(true);
            if(scriptIndex+1 < script.scripts.length) {
                setCanNext(true);
            }
        }
    }

    function handleDialogEnd() {
        if(onFinal) {
            onFinal();
        }

        setShowChoices(true);
    }

    useEffect(()=>{
        setScriptIndex(0);
        setCanNext(false);
        setShowChoices(false);
        setStartFinished(false);
    }, [script])
    
    return (
        <div className="flex flex-col gap-1 w-full">
            <div>
            {
                script&&script.scripts[scriptIndex]&&
                <TypeWriter
                    text = {script.scripts[scriptIndex]}
                    typeSpeed={50}
                    className={"flex w-full flex-wrap"}
                    onFinish={()=>{setCanNext(true);}}
                    startFinished = {startFinished}
                />
            }
            </div>
            {
                showChoices && script.choices && script.choices.length > 0 ? 
                <DialogChoices
                    choices = {script.choices}
                    onChoose = {onChoose}
                />:
                <button onClick={handleSkip} className="w-1/2 text-left font-bold">Next</button>
            }
        </div>
    )
}

export default DialogText;