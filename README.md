# Tennis Forum

This project is a forum system designed and implemented for tennis enthusiasts. Users can create posts, add comments, and upvote/downvote the posts and comments. The forum revolves around the topic of tennis.

## Functional Requirements

### Entities (documents)

- Authentication is handled by Firebase, there is no need for auth entity
- Each user must have a first and last name, email and/or username
- Each admin must have a first and last name, email, and may have a phone number.
- Each post must have a user who created it, a title, content, comments and how many likes it has received.

### Public Part

The public part is accessible without authentication. On the home page, anonymous users are presented with the core features of the platform as well as how many people are using it and how many posts have been created so far. Anonymous users are able to register and log in. They can also see a list of the top 10 most commented posts and a list of the 10 most recently created posts.

### Private part

Accessible only if the user is authenticated. The user can log in and log out. Users can browse posts created by the other users with an option to sort and filter them. Users can view a single post including its title, content, comments, likes, etc. Users can update their profile information. Users can create a new post with at least a title and content. Each user can edit only personal posts or comments. Each user can view all their or any other user’s posts and comments. Each user can remove one or more of their own posts. Each user can comment/reply to any other forum post.

### Administrative part

Accessible to users with administrative privileges. Admin can search for a user by their username, email, or display name. Admin can block or unblock individual users. A blocked user cannot create posts or comments. Admin can delete any post. Admin can view a list of all posts with an option to filter and sort them.

## Technologies Used

- Firebase for authentication, database, and hosting
- DaisyUI for UI components

## Live Demo

You can access the live application at [Tennis Forum](https://tennis-forum-12fa0.web.app/)

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repo
    ```sh
    git clone https://github.com/ProjectX-A55/TennisForum
2. Install NPM packages
    ```sh
    npm install
3. Enter your Firebase configuration in config/firebase-config.js
   ```js
   const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRE_BASE_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATA_BASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};
    ```
4. Run the project
    ```sh
    npm run dev
5. Open your browser and go to http://localhost:3000
6. Enjoy!

### Contact
Your Name - @your_twitter - email@example.com

Project Link: https://github.com/ProjectX-A55/TennisForum

Acknowledgements
- Firebase
- DaisyUI