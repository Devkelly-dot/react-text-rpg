import { DialogScript } from "../../interfaces/dialog";

const afterExplosionScript:DialogScript = {
    scripts: [
        [
            {
                text: "What was"
            },
            {
                text: " that",
                textClass: "italic"
            },
            {
                text: "???"
            }
        ]
    ],
    choices: [
        {
            text: "Check it out",
            textClass: "font-bold text-lg hover:text-red-500 cursor-pointer"
        },
        {
            text: "Ignore it",
            textClass: "italic text-sm hover:text-red-500 cursor-pointer"
        }
    ]
}

export default afterExplosionScript;