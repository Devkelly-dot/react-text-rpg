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
            text: "Check it out"
        },
        {
            text: "Ignore it"
        }
    ]
}

export default afterExplosionScript;