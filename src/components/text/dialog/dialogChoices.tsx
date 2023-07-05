import { DialogChoice } from "../../../interfaces/dialog";

interface DialogChoicesProps {
    choices: DialogChoice[];
    onChoose?: (choice_index:number)=>void;
}

const DialogChoices: React.FC<DialogChoicesProps> = ({choices, onChoose}) => {

    return ( 
        <>
            {
                choices.map((choice:DialogChoice, index)=>{
                    return (
                        <div
                            style={choice.textStyle?choice.textStyle:{}} 
                            className={choice.textClass?choice.textClass:""} 
                            key={index} 
                            onClick={()=>{onChoose&&onChoose(index)}}>
                        {
                            choice?.text
                        }
                        </div>
                    )
                })
            }
        </>
    )
}

export default DialogChoices;