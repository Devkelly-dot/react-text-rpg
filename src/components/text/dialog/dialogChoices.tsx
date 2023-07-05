import { TypeWriterSubString } from "../../../interfaces/script";

interface DialogChoicesProps {
    choices: TypeWriterSubString[];
    onChoose?: (choice_index:number)=>void;
}

const DialogChoices: React.FC<DialogChoicesProps> = ({choices, onChoose}) => {

    return ( 
        <>
            {
                choices.map((choice:TypeWriterSubString, index)=>{
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