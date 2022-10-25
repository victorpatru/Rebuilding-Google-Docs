# Rebuilding Google Docs
Recreating Google Docs: one of the most popular application for collaborating and creating online documents

**Link to project:** https://docs-navy-two.vercel.app/

<img width="1238" alt="image" src="https://user-images.githubusercontent.com/102596893/197799188-68e0b43c-4185-4101-a13d-164c3463317a.png">
<img width="1655" alt="CleanShot 2022-10-25 at 18 07 09@2x" src="https://user-images.githubusercontent.com/102596893/197811243-04de1527-de41-45a4-a4d2-1919a4839f55.png">

## How It's Made:

**Tech used:** ReactJS, Typescript, NextJS, TailwindCSS, Material Tailwind UI, Next-Auth, Firebase (Firestore), Google Cloud Platform, DraftJS, React Hot Toastify, Various Hooks (Firebase, Next-Auth, React)

## Lessons Learned:


* Setting up a modern project using React, Next and Tailwind
* Building a fully responsive application using Tailwind (mobile, tablet, monitor and 4k+)
* Ensuring consistency with Google Docs UI thanks to the Material UI plug-in for TailwindCSS
* Ensuring production-level code thanks to Typescript's type-checking ability
* Using Firebase Firestore as the application backend (handling document creation)
* Using DraftJS to enable the rich text editor for the individual document page
* Using Next-Auth to handle authentification (SessionProviders plus useSession hooks)
* Using server-side rendering to store the user session (with the help of the getSession hook provided by Next-Auth)
* Using React Hot Toast to handle notifications on the page
* Using Firebase React Hooks to fetch data from our Firestore database
* Using NextJS's routing features
* Working with environment variables




## Optimizations: 

* Ability to update and delete documents information
* Ability to export your document in various formats (eg. PDF) 
* Ability to share over email and social media
* Ability to concurrently collaborate on a document with another user 
