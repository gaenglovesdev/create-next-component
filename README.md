<div align="center">
  <h1 style="text-align:center">⚙️ Create Next.js Component CLI 0.1.0</h1>
</div>

<div align="center">
  <p style="text-align:center">
    Component Generation CLI for managing Next.js components with TypeScript-based Atomic design.
  </p>
</div>

---

## ⚠️ CAUTION (before using CLI)

- This project is designed to target TypeScript version 5 or higher.

- The `components` folder should be located under the `src` directory.

---

## INSTALL

1. Clone the CLI project:

```
git clone https://github.com/gaenglovesdev/create-next-component-cli.git
```

2.Move to directory

```
cd create-next-component-cli
```

3.Add package globally

```
npm i -g
```

## 📃 USAGE

Execute the command at the root of the project.

```
cnc -co -a Button

OR

cnc --component --atom Button
```

## ⭐️ OPTIONS

| COMMEND              | DESCRIPTION                |
| -------------------- | -------------------------- |
| `-v`, `--version`    | version check              |
| `-h`, `--help`       | Help                       |
| `-co`, `--component` | Create component           |
| `-a`, `--atom`       | Create Atom Component      |
| `-m`, `--molecules`  | Create Molecules Component |
| `-o`, `--organisms`  | Create Organisms Component |
| `-t`, `--template`   | Create Template Component  |
| `-g`, `--greeting`   | Say Hello!                 |

## RESULT

- Depending on the chosen flag, a `src/component/{target_directory}/{component_directory}` folder will be created, along with an `src/component/{target}/{component_directory}/index.tsx` file.
- The export statement of the generated component will be added to the barrel file in the respective target folder.

### 📌 TODO

- [ ] NPM distribution
- [ ] Creating a Component Directory based on Atomic Design(with barrel file)
- [ ] Create global hooks and component hooks
- [ ] Generate styling files based on the user's preferred styling library (module.css, scss, styled-components, etc.)
- [ ] Create app router

#### Copyright 2023. All rights reserved by gaenglovesdev.
