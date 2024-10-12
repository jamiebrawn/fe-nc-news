# NC News

[Link to Deployed Version](https://ncnewsjb.netlify.app)

## General Info

NC News is a web application that allows users to read, comment, and vote on various articles across different topics. Users can browse articles, view detailed information about each article, and participate in discussions through comments. The app also provides sorting functionality to view the most recent, most discussed, or most liked articles.

### Key Features

- Browse articles by topic.
- View detailed information for each article.
- Post comments on articles.
- Vote on articles.
- Sort articles by date, comment count, or votes.

## Back End Repository

[Link to Back End Repo](https://github.com/jamiebrawn/be-nc-news)

## Minimum Node Version

To run this project locally, you will need Node.js version 22.3.0 or higher. You can check your Node version by running:

```bash
node --version
```

## Run the Project Locally

1. **Clone the repository**:

   ```bash
   git clone <repo-url>
   ```

2. **Navigate to the project directory**:

   ```bash
   cd <project-directory>
   ```

3. **Install the dependencies**:

   ```bash
   npm install
   ```

4. **Set up environment files**:

   Create two files in the root directory:

   `.env.hosted`:

   ```ini
   VITE_API_URL=https://be-nc-news-ws53.onrender.com/api
   ```

   `.env.local_repo`:

   ```ini
   VITE_API_URL=http://localhost:9090/api
   ```

5. **Start the development server**:

   To run using the hosted API:

   ```bash
   npm run dev
   ```

   To run using a local API, follow local set-up steps for [back-end app](https://github.com/jamiebrawn/be-nc-news). Then:

   ```bash
   npm run dev:local
   ```

6. **Navigate to your browser**:
   Open your browser and go to [http://localhost:5173/](http://localhost:5173/) to view the application.

## About This Project

This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/).
