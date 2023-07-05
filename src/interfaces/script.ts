export interface TextStyle {
    [key: string]: string;
}

export interface TypeWriterSubString {
    text: string;
    textStyle?: TextStyle;
    textClass?: string;
}

export interface TextScript {
    scripts: TypeWriterSubString[][];
}