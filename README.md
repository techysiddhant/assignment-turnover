# Next.js TypeScript Prisma Project

This is a Next.js project built with TypeScript and Prisma ORM for PostgreSQL database.

## Overview

This project serves as a starting point for building web applications using Next.js with TypeScript and integrating Prisma ORM for PostgreSQL database operations.

## Features

- **Next.js**: The React framework for building modern web applications.
- **TypeScript**: A statically typed superset of JavaScript that helps in writing scalable and maintainable code.
- **Prisma ORM**: A modern database toolkit for TypeScript and Node.js, used here for PostgreSQL database operations.
- **PostgreSQL**: A powerful, open-source relational database system.
- **Tailwind CSS**: A utility-first CSS framework for building custom designs quickly.

## Installation

### Prerequisites

**Node version 18.x.x**

### Cloning the repository

```shell
git clone https://github.com/techysiddhant/assignment-turnover.git
```

### Install packages

```shell
npm install
```

### Setup .env file

```js
DATABASE_URL =
TOKEN_SECRET =
```

### Setup Prisma

Add PostgreSQL Database (I used neon)

```shell
npx prisma generate
npx prisma db push

```

Populate Category Data

```shell
node scripts/seed.ts
```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`
