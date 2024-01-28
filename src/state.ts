import {readFileSync, existsSync} from "fs";

class State {
    private data: string[];

    constructor(path: string) {
        try {
            if(existsSync(path)) {
                const string_output = readFileSync(path, 'utf8');
                this.data = JSON.parse(string_output);
            }
        } catch (e) {
            this.data = [];
        }
    }

    getValue(index: number): number {
        const value = this.data[index];
        if(value) {
           const number = Number(value);
           if(!isNaN(number)){ //simple number
               return number;

           } else if(typeof value === "string" && value[0] === '='){
               return this.calculate(value);
           }
        }
    }

    setValue(index, newVal) {
        this.data[index] = newVal;
    }

    getAll() {
        return this.data.map((value, index) => `[${index}: ${this.getValue(index)}]`)
    }

    private calculate(exp: string): number {
        const decoded = this.decodeMacro(exp);
        return this.eval(decoded);
    }

    private decodeMacro(exp: string): string {
        let decodedExp = exp;
        const macro = /({[0-9]+})/g;
        const result = macro[Symbol.matchAll](exp);

        for (const match of result) {
            const cell = match[1].slice(1, -1);
            decodedExp = exp.replace(match[1], this.getValue(Number(cell)).toString())
        }

        return decodedExp;
    }

    private eval(exp: string): number {
        let currentValue = null;
        let currentOp = null;

        const macro = /([0-9]+)([+\-*\/]{0,1})/g;
        const result = macro[Symbol.matchAll](exp);

        for (const match of result) {
            const operand = Number(match[1]);
            const operator = match[2];

            if(currentValue === null){
                currentValue = operand;
                currentOp = operator;
            } else {
                currentValue = this.arithmeticOp(currentValue, currentOp, operand);
                currentOp = operator;
            }
        }
        return currentValue;
    }

    private arithmeticOp(left, op, right) {
        let res;

        switch (op) {
            case "+": {
                res = left + right;
                break;
            }
            case "-": {
                res = left - right;
                break;
            }
            case "/": {
                res = left / right;
                break;
            }
            case "*": {
                res = left * right;
                break;
            }
        }

        return res;
    }
}

export default State;