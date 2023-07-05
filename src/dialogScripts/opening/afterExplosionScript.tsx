import { TextScript } from "../../interfaces/script";

const afterExplosionScript:TextScript = {
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
            text: "Check it out"
        },
        {
            text: "Ignore it"
        }
    ]
}

export default afterExplosionScript;