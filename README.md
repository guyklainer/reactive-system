# Basic Reactive System

### Installation
```npm install```

### Run the app
```npm start -- <path-to-initial-state>```

note: example initial file is located at `./state.json`

### assumptions:
- reference to a cell must be inside a formula
- input is valid (didn't implement safety checks and validations)

### Next Steps:
- Move cache update to the setter (improve get performance)
- Validations and safety checks
- Add unit tests

### Built and run on:
- Node v20.10.0
- NPM v9.2.0

![image](https://github.com/guyklainer/reactive-system/assets/2866607/1a346691-220c-48a5-9876-f11ab21469e8)
