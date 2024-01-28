import prompt from "./prompt.js";
import State from "./state.js";

const state = new State();

const answer = await prompt();
switch (answer.action) {
    case "a": {
        console.log(state.getAll());
    }
}