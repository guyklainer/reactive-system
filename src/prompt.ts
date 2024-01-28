import inquirer, {QuestionCollection} from 'inquirer';

export type Answer = {
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
    menu();
    return inquirer.prompt<Answer>(questions);
};

export default prompt;
