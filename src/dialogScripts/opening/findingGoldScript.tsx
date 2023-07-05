import { DialogScript } from "../../interfaces/dialog";

const findingGoldScript:DialogScript = {
    scripts: [
        [
            {
                text: "Oh, what is that?"
            }
        ],
        [
            {
                text: "OoOoO",
                textClass:"text-yellow-500"
            },
            {
                text: " GOLD! "
            },
            {
                text: "OoOoO",
                textClass:"text-yellow-500"
            }
        ]
    ],
}

export default findingGoldScript;