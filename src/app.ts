import prompt from "./prompt.js";
import State from "./state.js";

const state = new State();
console.log(state.getValue(0));
const answer = await prompt();