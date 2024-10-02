# Cohort Manager UI

User interface for the Screening - Cohort Manager service (Service planning team).

Built with [Next.js](https://nextjs.org/).

## Setup

Install the required dependencies using `pnpm install`

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Prerequisites

- [pnpm](https://pnpm.io/) package manager

### Environment variables

Create a `.env` file which should override environment variables required to run locally:

```
To be completed
```

## Testing

### Unit tests

Unit tests are written using [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

#### Running Unit tests

To run unit tests, use the following command:

```
pnpm run test:unit
```

This will execute all unit tests and provide a summary of the tests results.

#### Running Unit tests in watch mode

To run the unit tests in watch mode, use the following command:

```
pnpm run test:unit:watch
```

This will run the tests and re-run them whenever a file changes.

#### Coverage report

To generate a code coverage report, use the following command:

```
npm run test:unit:coverage
```

This will generate a coverage report in the `coverage` directory.

## Licence

Unless stated otherwise, the codebase is released under the MIT License. This covers both the codebase and any sample code in the documentation.

Any HTML or Markdown documentation is [© Crown Copyright](https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/) and available under the terms of the [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).
