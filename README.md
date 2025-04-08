# Deploying Your Website to Firebase Hosting

This guide explains how to deploy your website using Firebase Hosting.

## Prerequisites
- Node.js installed
- Firebase CLI installed globally (`npm install -g firebase-tools`)
- A Firebase project set up in the [Firebase Console](https://console.firebase.google.com/)

## Steps to Deploy

### 1. Install Firebase CLI
```
npm install -g firebase-tools
```

### 2. Login to Firebase
```
firebase login
```
This will open a browser to authenticate your Google account.

### 3. Initialize Firebase in Your Project
Run the following command in your project's root directory:
```
firebase init
```
Follow the setup prompts:
- Select **Hosting** using spacebar and press Enter.
- Select your Firebase project.
- When asked **"What do you want to use as your public directory?"**, type `dist` (or your build folder).
- Choose `No` for setting up automatic builds and deploys.

### 4. Build Your Project
If you are using a framework (e.g., React, Next.js, Vue), build your project:
```
npm run build
```
Ensure your build output is in the correct folder (`dist` or `build`).

### 5. Deploy to Firebase Hosting
```
firebase deploy
```
Once deployed, Firebase will provide a hosting URL where your site is live.

## Updating Your Website
Whenever you make changes, repeat:
```
npm run build
firebase deploy
```

## Additional Commands
- **Check deployed sites:**
  ```
  firebase hosting:list
  ```
- **View deployment history:**
  ```
  firebase hosting:channel:list
  ```
- **Delete a site from Firebase Hosting:**
  ```
  firebase hosting:disable
  ```


  Want to read more?
  See this [Firebase Hosting Setup Complete Issue](https://dev.to/chayti/firebase-hosting-setup-complete-issue-43cg)

Happy Deploying! 🚀

