import inquirer, {QuestionCollection} from 'inquirer';

const questions: QuestionCollection = [
    {
        type: "input",
        name: "action",
        message: "#",
    }
];

const prompt = () => {
    console.log(`Menu:
  a. Print current state
  b. Change a value
    `);
    return inquirer.prompt(questions);
};

export default prompt;
