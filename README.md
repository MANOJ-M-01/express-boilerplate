# Express TypeScript Docker Boilerplate

A production-ready Express.js boilerplate using TypeScript, ESLint, Prettier, Docker, Docker Compose, Winston logging, Morgan HTTP logging, Helmet for security, express-rate-limit, and Yarn as the package manager.

## 🛠 Features

- ⚙️ Express 5 with TypeScript
- 🧼 ESLint + Prettier for code linting and formatting
- 🐳 Docker & Docker Compose for dev and production
- 🌐 Helmet for security headers
- 🚫 Rate limiting with `express-rate-limit`
- 📜 HTTP request logging with Morgan
- 🪵 Advanced logging using Winston and Daily Rotate File
- 🔐 `.env` support with `dotenv`
- 📦 Yarn as the default package manager
- 📁 Clean and modular file structure

## Requirements

- Node v23.11.0
- Docker

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/MANOJ-M-01/Express-Boilerplate.git
cd Express-Boilerplate
```

### 2. Install Dependencies

```bash
yarn install
```

### 3. Run in Development

```bash
yarn dev
```

Or using Docker:

```bash
docker-compose -f docker-compose-dev.yaml up --build
```

---

## 🛠 Available Scripts

| Command                | Description                               |
| ---------------------- | ----------------------------------------- |
| `yarn dev`             | Start development server with ts-node-dev |
| `yarn start`           | Start server with ts-node                 |
| `yarn build`           | Compile TypeScript to JavaScript          |
| `yarn serve`           | Run compiled code from `dist/`            |
| `yarn typecheck`       | Type check without emitting output        |
| `yarn lint`            | Run ESLint                                |
| `yarn prettier:check`  | Check formatting with Prettier            |
| `yarn prettier:format` | Auto-format code with Prettier            |

---

## 🐳 Docker Usage

### Development

```bash
docker-compose -f docker-compose-dev.yaml up --build
```

### Production

```bash
docker-compose -f docker-compose-prod.yaml up --build
```

---

## 🧪 Linting & Formatting

```bash
yarn lint
yarn prettier:check
yarn prettier:format
```

---

## 📝 License

MIT License

---

## 🙌 Acknowledgements

- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Winston](https://github.com/winstonjs/winston)
- [Docker](https://www.docker.com/)
