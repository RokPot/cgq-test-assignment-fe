# CgqTestAssignmentFe

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.0.6.

## Running locally

To start a local development server do:

### Install packages via yarn

```bash
yarn
```

#### Corepack

If yarn does not work, try setting up yarn package manager

```bash
corepack enable
```

### Run server locally

```bash
yarn start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Back-end setup

Environment variables are defined in environment.development.ts and environment.ts.

To run BE mock server run:

```bash
npm install

npm run start
```

If the mock backend is not working because of the CORS error we have 2 options:

### 1. Update mock BE

The mock BE needs to be updated and CORS should be added and setup into the project.

### 2. Allow cors origin extensions

Some browser have allow cors extensions which should be able to bypass this check.
If using Chrome we can use [Allow Cors Access Control Extension](https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf)

## Additional scripts

- `yarn lint` — ESLint
- `yarn typecheck` — TypeScript (`tsc -b --noEmit`)
- `yarn format:check` / `yarn format:fix` — Prettier
