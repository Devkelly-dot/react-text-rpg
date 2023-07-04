interface TypeWriterLetterProps {
    text: {
        text: string,
        textStyle?: object;
        className?: string;
    };
}

const TypeWriterLetter: React.FC<TypeWriterLetterProps> = ({text}) => {
    return (
        <p style={text?.textStyle} className={text?.className}>{text?.text}</p>
    )
}

export default TypeWriterLetter;