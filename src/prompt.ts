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

const prompt: () => Promise<Answer> = () => {
    console.log(`Menu:
  a. Print current state
  b. Change a value
    `);
    return inquirer.prompt<Answer>(questions);
};

export default prompt;
