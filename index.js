#!/usr/bin/env node

const readline = require('readline');
const path = require('path');
const fs = require('fs');

class CLI {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  componentTemplate = (componentName) => `
"use client";

import type { FC } from "react";

interface ${componentName}Props {}
const ${componentName}: FC<${componentName}Props> = () => {
  return <div>Component</div>;
};
export default ${componentName};
  `;

  isExist(dir) {
    return fs.existsSync(dir);
  }

  makeDirectory(dir) {
    fs.mkdirSync(dir, { recursive: true });
  }

  createTemplate(dir, componentName) {
    fs.writeFileSync(dir, this.componentTemplate(componentName));
    const stat = fs.statSync(`${dir}`);
    console.log(`CREATE ${dir} (${stat.size} bytes)`);
  }

  updateBarrelFile(dirPath, componentName) {
    const barrelFile = path.join(process.cwd(), `${dirPath}/index.ts`);
    fs.readFile(barrelFile, 'utf8', (err, data) => {
      if (err) {
        console.log("ERROR: CAN'T READ BARREL FILE", err);
        this.rl.close();
        return false;
      }
      const addImport = `${data}\nimport { default as ${componentName} } from './${componentName}';`;
      fs.writeFile(barrelFile, addImport, 'utf8', (err) => {
        if (err) {
          console.log("ERROR: CAN'T WRITE BARREL FILE", err);
          this.rl.close();
          return false;
        }
        const stat = fs.statSync(`${dirPath}`);
        console.log(`UPDATE ${dirPath}/index.ts (${stat.size} bytes)`);
      });
    });
  }


  createComponentOption(option, hasOption, componentName, dirPath) {
    switch (option) {
      case '-a':
      case '--atom':
        hasOption.atom = true;
        dirPath = path.join(dirPath, 'atoms');
        break;
      case '-m':
      case '--molecules':
        hasOption.molecules = true;
        dirPath = path.join(dirPath, 'molecules');
        break;
      case '-o':
      case '--organisms':
        hasOption.organisms = true;
        dirPath = path.join(dirPath, 'organisms');
        return;
      case '-p':
      case '--page':
        hasOption.page = true;
        dirPath = path.join(dirPath, 'pages');
        return;
      case '-t':
      case '--template':
        hasOption.template = true;
        dirPath = path.join(dirPath, 'templates');
        return;
      default:
        return;
    }

    const pathToDir = path.join(process.cwd(), dirPath, componentName);

    if (this.isExist(pathToDir)) {
      console.log('해당 컴포넌트가 존재합니다.\nComponent already exists.');
      this.rl.close();
      return;
    }

    this.makeDirectory(pathToDir);
    this.createTemplate(path.join(pathToDir, 'index.tsx'), componentName);
    this.updateBarrelFile(dirPath, componentName);
    this.rl.close();
    
  }

  createComponent() {
    const componentName = this.rest.find(option => !option.startsWith('-'));
    const hasOption = {
      atom: false,
      molecules: false,
      organisms: false,
      page: false,
      template: false,
    };

    const dirPath = './src/components';

    this.rest.forEach(option => {
      this.createComponentOption(option, hasOption, componentName, dirPath);
    });

    if (!Object.values(hasOption).some(value => value)) {
      console.log("컴포넌트 타입을 선택하세요!\nPlease select a component type.");
    }
  }

  run() {
    console.clear();
    const [, , ...rest] = process.argv;
    this.rest = rest;

    if (this.rest.includes("-v") || this.rest.includes("--version")) {
      console.log('CURRENT VERSION: v0.1.0');
      this.rl.close();
      return;
    }

    if (this.rest.includes("-h") || this.rest.includes("--help")) {
      console.log(`-v, --version: Check version
-p, --page: Create a page
-co, --component: Create a component
-a, --atom: Create an atom component
-m, --molecules: Create a molecules component
-o, --organisms: Create an organisms component
-t, --template: Create a template component
-h, --help: Help
-g, --greeting: Greeting`);
      this.rl.close();
      return;
    }

    if (this.rest.includes('-g') || this.rest.includes('--greeting')) {
      const greeting = 'Hi there👋\n❤️Thank you for using this❤️';
      let count = 0;

      const interval = setInterval(() => {
        console.clear();
        console.log(greeting.slice(0, count + 1));

        if (count === greeting.length - 1) {
          clearInterval(interval);
          this.rl.close();
        }

        count++;
      }, 50);
      return false;
    }

    if (this.rest.includes("-co") || this.rest.includes("--component")) {
      this.createComponent();
      return false;
    }

    this.rl.close();
  }
}

const cli = new CLI();

cli.run();