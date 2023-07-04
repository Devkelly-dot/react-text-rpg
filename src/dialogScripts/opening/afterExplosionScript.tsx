interface TextStyle {
    [key: string]: string;
}

const afterExplosionScript: {
    script: {
        text: string;
        textStyle?: TextStyle;
        textClass?: string;
    }[];
    choices?: {
        text: string;
        textStyle?: TextStyle;
        textClass?: string;
    }[];
}[] = [
    {
        script: [
            {
                text: "What was that??? I think"
            },
            {
                text: " you ",
                textClass: "italic"
            },
            {
                text: "should go check it out..."
            }
        ]
    }
];

export default afterExplosionScript;