<h1 align="center">
  Shrynk.js
</h1>

<h3 align="center">A product rather than a project.</h3>

<div align="center">
  <sub>Built with ❤︎ </sub>
</div>

<h2 align="center">
  Introduction
</h2>

Shrynk.js is a url shortening single page application, a product rather than a project similar to bit.ly, tiny.url, etc where users can create and manage multiple URLs. 

[Demo-Video](https://youtu.be/vYQKlfq_2h0)

<h2 align="center">
  How did I make it unique ? Features ?
</h2>
Added,

- OAuth Authentication
- User Onboarding
- Tiers and Quotas on Users
- Dashboard to Create, Read & Delete generated URLs
- Link Analytics Dashboard

<h2 align="center">
 What else ?
</h2>

- Implemented API security measures, rate-Limiting, validation.   
- URLs have an expiry date, if accessed after, appropriate error message is shown and URL is removed from system. 
- App features Dark Mode, Mobile UI, Toast messages.

<h2 align="center">
 How did I build it ?
</h2>

Tech Stack,

- Client: React (Router, Context-API, Hooks, Lazy & Suspense), TailwindCSS, Custom CSS
- Server: Express.js/Node.js written in Typescript.
- Database: MongoDB Atlas (Cloud DB)
- Deployment: AWS EC2 (Ubuntu Instance), Route53, NGINX (Reverse Proxy), PM2 for Node.js

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
  <img alt="TailwindCSS" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?&style=for-the-badge&logo=tailwind-css&logoColor=white"/>
  <img alt="MongoDB" src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img alt="TypeScript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white"/>
  <img alt="AWS" src="https://img.shields.io/badge/AWS-%232C5263.svg?&style=for-the-badge&logo=amazon-aws&logoColor=white"/>
  <img alt="Ubuntu" src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white" />
  <img alt="Nginx" src="https://img.shields.io/badge/nginx-%23009639.svg?&style=for-the-badge&logo=nginx&logoColor=white"/>
  <img alt="NodeJS" src="https://img.shields.io/badge/node.js-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>
  <img alt="Express.js" src="https://img.shields.io/badge/express.js-%23404d59.svg?&style=for-the-badge"/>
</p>

<h2 align="center">
 Writeups
</h2>

- [Personal Blog Post](https://blog.jagankaartik.com/posts/nodejs-aws-indepth-guide/)
- [Medium Article](https://medium.com/@kaartikjagan/an-in-depth-guide-to-deploying-your-node-js-application-to-production-using-aws-with-custom-domain-1fe3b0638a75)

<!-- <h2 align="center">
 Self-Hosting Steps
</h2>

### Installation 

#### Prerequisites

- Node.js/NPM
```
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
```
```
sudo apt-get install -y nodejs
```

- Enviornment Variables

You'll need to create two env var files `(.env)`, one in server's root `(server/)` and the other in client's root `(app/)` and populate them appropriately.

In Server,
```
PORT=""
MONGO_URL=""
COOKIE_KEY=""
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""
NODE_ENV=""
CLIENT_URL_PROD=""
CLIENT_URL_DEV=""
JWT_SECRET=""
```
In client(app),
```
REACT_APP_API_URL_PROD=""
REACT_APP_API_URL_DEV=""
REACT_APP_GA_ID=""
```
### Installation 

- `cd` into root of the repository. Run `make install`, this will install all the dependencies in client's and server's package.json

```
make install
```
- Running 'make build' will build the react-client & typescript-express server.
```
make build
```
#### Running Dev
```
make run-dev
```
#### Running Production locally
```
make run-prod
```
 -->
<h2 align="center">
 Preview
</h2>

<p align="center">
  <img src="media/home1.gif" width=75%/>
  <img src="media/home2.gif" width=75%/>
</p>

<h2 align="center">
 UI Screens
</h2>

<p>
  <img src="media/home_ui_light.png" width=100%/>
  <img src="media/home_ui_dark.png" width=100%/> 
</p>

<a href="https://storyset.com/web">Illustration by Freepik Storyset</a>

