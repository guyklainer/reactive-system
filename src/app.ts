import prompt from "./prompt.js";
import State from "./state.js";

const state = new State();
run();


async function run(answer?) {
    if(answer) {
        const [choice, index, newVal] = answer.action.trim().split(/\s+/);

        switch (choice) {
            case "a": {
                console.log(state.getAll());
                break;
            }
            case "b": {
                state.setValue(index, newVal);
                console.log(`Cell #${index} changed to ${newVal}\n`);
            }
        }
    }

    run(await prompt());
}