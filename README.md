<h1 align="center">
  Shrynk.js
</h1>

<h4 align="center">Not your average URL Shortening Single Page Application.</h4>

<div align="center">
  <sub>Built with ❤︎ </sub>
</div>

<h2 align="center">
  Introduction
</h2>

Shrynk.js is a url shortening single page application, a product rather than a project similar to bit.ly, tiny.url, etc where users can create and manage multiple URLs. 

<h2 align="center">
  How did I make it unique ? Features ?
</h2>
Added,

- OAuth Authentication
- User Onboarding
- Tiers and Quotas on Users
- Dashboard to Create, Read & Delete generated URLs
- Analytics Dashboard (On roadmap. Will be added in a short while). 

<h2 align="center">
 What else ?
</h2>

- Implemented API security measures, Rate-Limiting, Handled edge cases. 
- URLs have an expiry date, if accessed after, appropriate error message is shown and URL is removed from system. 
- App features Dark Mode, Mobile UI, Toast messages.

<h2 align="center">
 How did I build it ?
</h2>

Tech Stack,

- Client: React (Router, Context-API, Hooks), TailwindCSS, Custom CSS
- Server: Typescript, Express.js/Node.js
- Database: MongoDB Atlas (Cloud DB)
- Deployment: Ubuntu SSD Droplet (Digital Ocean), NGINX (Reverse Proxy), PM2 for Node.js
- A/B Tests (Removed Instance): AWS EC2, Route53


### Preview 
<p align="center">
  <img src="media/Shrynk.gif" width=50%/>
</p>

### UI Screenshots
<p>
  <img src="media/home_ui_light.png" width=70%/>
  <img src="media/home_ui_dark.png" width=70%/> 
</p>

<p align="center">
  <a href="https://www.digitalocean.com/?refcode=4b84b7294b31&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge">
  <img src="https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%201.svg"/>
  </a>
</p>
