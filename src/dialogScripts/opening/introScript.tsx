const introScript: {
    text: string;
    textStyle?: object;
    textClass?: string;
}[][] = [
    [
        {
            text: "Hello, welcome to this brand new text based RPG. ",
            textStyle: {color:"red"}
        },
        {
            text: "I put a "
        },
        {
            text: "ton",
            textClass: "font-bold"
        },
        {
            text: " of work into it so I really hope you like it!"
        }
    ],
    [
        {
            text: "You wake up in a daze, surrounded by shrub. It appears you've found yourself cold and alone in the "
        },
        {
            text: "Ancient Dark Forest of Death.",
            textClass: "font-bold text-red-500"
        }
    ]
];

export default introScript;