import React, { useState, useEffect } from 'react';
import TypeWriterLetter from './typeWriterLetter';

interface TypeWriterProps {
    text: {
        text: string;
        textStyle?: object;
        textClass?: string;
    }[];
    onFinish?:()=>void;
    typeSpeed: number;
    style?: object;
    className?: string;
}

const TypeWriter: React.FC<TypeWriterProps> = ({text, onFinish, typeSpeed, style, className}) => {
    const [currentText, setCurrentText] = useState<{
            text: string;
            textStyle?: object;
            textClass?: string;
        }[]>([]);


    const [textIndex, setTextIndex] = useState(0);
    const [textTextIndex, setTextTextIndex] = useState(0);
    useEffect(()=>{
        console.log("here")
        setCurrentText([]);
        setTextIndex(0);
        setTextTextIndex(0);
    }, [text])

    useEffect(()=>{
        if(text.length <= textIndex) {
            if(onFinish) {
                onFinish();
            }
            return;
        }

        const newCurrentText = [...currentText];
        let newTextText = 0;
        const new_text_object = {
            textStyle: text[textIndex]?.textStyle || {},
            textClass: text[textIndex]?.textClass || "",
            text: ""
        }

        if(currentText.length < textIndex+1) {
            new_text_object.text = text[textIndex].text.substring(0, 1);
            newTextText = 2;
            newCurrentText.push(new_text_object);
            setCurrentText(newCurrentText);
        } else {
            if(text[textIndex].text.length >= textTextIndex) {
                new_text_object.text = text[textIndex].text.substring(0, textTextIndex);
                newTextText = textTextIndex+1;
                newCurrentText[textIndex] = new_text_object;
            } else {
                setTextIndex(textIndex + 1);
                newTextText = 0;
            }
        }

        setCurrentText(newCurrentText);
        const timeout = setTimeout(() => {
            setTextTextIndex(newTextText);
        }, typeSpeed);
    
        return () => clearTimeout(timeout); 
    }, [textTextIndex, textIndex])

    
    return (
        <div className={className?className:'flex'} style={style}>
            {
                currentText.map((str)=>{
                    return (
                        Array.from(str.text).map((letter, index)=>{
                            if (letter === ' ') {
                                return <span key={index} style={str.textStyle} className={str.textClass}>&nbsp;</span>;
                            } else {
                                return (
                                    <div key={index}>
                                        <TypeWriterLetter 
                                            text = {
                                                {
                                                    text: letter,
                                                    textStyle: str.textStyle,
                                                    className: str.textClass
                                                }
                                            }
                                        />
                                    </div>
                                )
                            }
                        })
                    )
                })
            }
        </div>
    )
}

export default TypeWriter;