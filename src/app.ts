import prompt, {Answer} from "./prompt.js";
import State from "./state.js";

const path = process.argv[2];
const state = new State(path);

async function run(answer?: Answer) {
    if(answer) {
        const [choice, index, newVal] = answer.action.trim().split(/\s+/);

        switch (choice) {
            case "a": {
                const all = state.getAll();
                if(all.length){
                    console.log.apply(console.log, all);
                } else {
                    console.log("Empty");
                }
                break;
            }
            case "b": {
                if(Number(index) >= 0 && newVal){
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