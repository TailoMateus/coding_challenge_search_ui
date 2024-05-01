# Summary

- [About](#🔖-About)
- [Technologies used](#🛠-Technologies-used)
- [Folder structure](#🗂-Folder-structure)
- [Architecture](#🏢-Architecture)
- [Installation for development](#🗂-Installation-for-development)
- [UI](#🚀-UI)
- [General information](#❗-General-information)

---

## 🔖 About

Search UI coding challenge. Small application demonstrating my abilities in React and TypeScript. This challenge is targeted towards mid to senior level engineers.

Challenge repository is on [GitHub](https://github.com/MoneyLion/coding-challenge-search-ui)

---

## 🛠 Technologies used

The project was developed using the following technologies

- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Styled Components](https://www.styled-components.com/)
- [Storybook](https://storybook.js.org/)
- [Axios](https://github.com/axios/axios)

---

## 🗂 Folder structure

```bash
src
  components/*
  constants/*
  helpers/*
  hooks/*
  screens/*
  services/*
  styles/*
  types/*
```

---

## 🏢 Architecture

[Click here for more information about the flowchart](https://whimsical.com/architecture-react-u32KJvp38uRD5grDgJpDM)

![Architecture](https://cdn-images-1.medium.com/v2/resize:fit:1600/1*sk5RWB-WLkGFWkoRDgJJKQ.png)

---

## 🗂 Installation for development

- Install `package.json` dependencies using npm:
    `npm install`

- Run server at url: http://localhost:3000
    `npm start`

- Run project tests:
    `npm test`

- Run storybook documentation:
    `npm storybook`

---

## 🚀 UI

![UI](https://cdn-images-1.medium.com/v2/resize:fit:1600/1*wMxhLobGzIvu6rzwc9OMEA.png)

---


## ❗ General information

- No 'Access-Control-Allow-Origin' header is present on the requested resource error to access the API locally

Solved it adding headers in the server file:

`app.use(function(_, res, next) {`
  `res.header('Access-Control-Allow-Origin', '*');`
  `res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');`
  `next();`
`});`