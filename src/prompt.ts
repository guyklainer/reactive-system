import inquirer, {QuestionCollection} from 'inquirer';

type Answer = {
    action: string
}

const questions: QuestionCollection = [
    {
        type: "input",
        name: "action",
        message: "#",
    }
];

const menu = () => {
    console.log(`Menu:
  a. Print current state
  b. Change a value
    `);
}

const prompt: () => Promise<Answer> = () => {
    return inquirer.prompt<Answer>(questions);
};

export {prompt, menu};
