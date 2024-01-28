import prompt from "./prompt.js";
import State from "./state.js";

const path = process.argv[2];
const state = new State(path);

async function run(answer?) {
    if(answer) {
        const [choice, index, newVal] = answer.action.trim().split(/\s+/);

        switch (choice) {
            case "a": {
                if(state.getAll().length){
                    console.log.apply(console.log, state.getAll());
                } else {
                    console.log("Empty");
                }
                break;
            }
            case "b": {
                if(index >= 0 && newVal){
                    state.setValue(index, newVal);
                    console.log(`Cell #${index} changed to ${newVal}`);
                } else {
                    console.log("Please specify index and value");
                }
            }
        }

        console.log('\n');
    }

    run(await prompt());
}

run();