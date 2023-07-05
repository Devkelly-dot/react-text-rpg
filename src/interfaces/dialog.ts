import { TypeWriterSubString } from "./script";

export interface DialogScript {
    scripts: TypeWriterSubString[][];
    choices?: TypeWriterSubString[];
}