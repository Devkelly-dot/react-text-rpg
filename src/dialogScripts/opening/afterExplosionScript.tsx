interface TextStyle {
    [key: string]: string;
}

const afterExplosionScript: {
    text: string;
    textStyle?: TextStyle;
    textClass?: string;
}[][] = [
    [
        {
            text: "What was that? Maybe "
        },
        {
            text: "you",
            textClass: "italic"
        },
        {
            text: " should go check it out..."
        }
    ]
];

export default afterExplosionScript;