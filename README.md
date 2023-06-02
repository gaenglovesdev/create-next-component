<div align="center">
  <h1 style="text-align:center">⚙️Create Next.js Component 0.1.0</h1>
</div>

<div align="center">
  <p style="text-align:center">
  Typescript 기반의 Next.js에서 Atomic design으로 컴포넌트를 관리하는 프로젝트를 위한
  Component 생성 CLI 입니다.
</p>
</div>

---

<!-- ##### ❗️ 해당 프로젝트는 Next.js >= 13 이상의 app router를 target으로 작성되었습니다. -->

## ⚠️ CAUTION(before using CLI)

##### - 해당 프로젝트는 typescript >= 5 이상의 프로젝트를 target으로 작성되었습니다.

##### - `components`폴더는 `src` 아래 위치해야합니다.

---

## INSTALL

1.Cloning CLI project

```
git clone https://github.com/gaenglovesdev/create-next-component.git
```

2.Move to directory

```
cd create-next-component
```

3.Add package globally

```
npm i -g
```

## 📃 USAGE

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

- flag에 따라 `src/component/{target}` 폴더 생성 및 `src/component/{target}/index.tsx` 파일이 생성됩니다.
- 해당 target 폴더의 barrel파일에 추가된 컴포넌트의 export 구문을 추가합니다.

### 📌 TODO

- [ ] npm 배포
- [ ] global hook 및 component hook 생성
- [ ] user의 styling 라이브러리에 따른 style 작성파일 생성(module.css, scss, styled-component... and so on)
- [ ] app router 생성

#### Copyright 2023 . gaenglovesdev All rights reserved
