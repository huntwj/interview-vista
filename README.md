# Onto Next.js Wordle Interview

## Overview

This repository provides us with a simple playground where we can do some pair programming to solve some programming problems. These problems should mirror, albeit indirectly, the kinds of problems that a web developer might face in the course of their work. Further, since we'll be pair programming, our interactions will give both of us a feel for what it's like to work with the other. Never forget, you're interviewing us as much as we're interviewing you!

## Before the Interview

To save time, we recommend cloning this repository and getting things up and running before the interview starts. If you are comfortable with [Docker](https://www.docker.com/) and want to showcase your Docker-fu, please use the embedded [devcontainer](https://containers.dev/) to get things going.

> Note:
>
> This repository is tested with [Visual Studio Code](https://code.visualstudio.com/) and its devcontainer extensions, however any IDE that supports devcontainers should be usable. Jetbrains IDEs support devcontainers, and there is also the [@devcontainers/cli](https://github.com/devcontainers/cli) NPM package to do everything "manually."

If you are able to get things up and running, you may use the code editor of your choice for the interview. Again, VS Code is the standard, but we do not require you use it.

It is a soft-expectation that you will be able to clone this repository and get the project up and running on the main branch before the interview begins. We will have a limited time for the interview, so it will be more difficult if we lose time to setting up the coding environment.

If you are not familiar with Next.js, it would probably behoove you to review their architecture ahead of time. Here are some links that may prove useful:

- [Next.js](https://nextjs.org/)
  - [Project Structure](https://nextjs.org/docs/getting-started/project-structure)
  - [Routing](https://nextjs.org/docs/app/building-your-application/routing)
  - [Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching)
- [Tailwind CSS](https://tailwindcss.com/)
- [Wikipedia - Wordle](https://en.wikipedia.org/wiki/Wordle)

> Note:
>
> Don't miss that sneaky Wordle link at the bottom! We're going to pretend like we're creating a Wordle app, so it will be very helpful to understand as much as possible about the Wordle game.

## During the Interview

During the interview, we will work as a [pair programming](https://en.wikipedia.org/wiki/Pair_programming) team to solve some problems. The problems asked will depend on your experience and the time we have. Ideally you will spend time as both the "navigator" as well as the "driver." For most interviews, you will be offered a choice of tasks that allow you to best showcase your skills and interests.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
