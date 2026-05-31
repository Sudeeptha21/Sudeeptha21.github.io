# Sudeeptha Sivarajan Portfolio

A one-page portfolio built with Next.js and Tailwind CSS for presenting business analysis, product analytics, and decision-focused project work.

## Overview

This site is designed as a recruiter-friendly portfolio with:

- a strong hero section and personal introduction
- featured case-study style project cards
- skills, experience, and education sections
- a privacy-first contact form powered by Formspree

## Tech Stack

- Next.js
- React
- Tailwind CSS

## Project Structure

```text
app/
  globals.css        Global styling and theme tokens
  layout.js          App layout and metadata
  page.js            Main page composition

components/
  sections.js        Reusable page sections and contact form logic

data/
  portfolio.js       Main portfolio content, links, projects, skills, and experience

public/
  projects/          Project visuals used by the portfolio cards
```

## Run Locally

```bash
npm.cmd install
npm.cmd run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Build for Production

```bash
npm.cmd run build
npm.cmd run start
```

## Customize Content

The main content lives in:

- `data/portfolio.js`

Update this file to change:

- hero text
- project summaries and links
- skills
- experience
- education
- social links

## Customize Design

The main UI and styles live in:

- `components/sections.js`
- `app/globals.css`

Use these files to adjust:

- hero layout
- section structure
- button labels
- form behavior
- colors, spacing, and overall visual style

## Contact Form

The contact form is configured to submit asynchronously through Formspree.

Current endpoint:

- `https://formspree.io/f/meeddlaa`

The async submission logic is implemented in:

- `components/sections.js`

## Deployment

This project can be deployed to Vercel. If the GitHub repository is connected to Vercel, pushing changes to the connected branch should trigger an automatic deployment.

Live site:

- [sudeeptha21-github-io.vercel.app](https://sudeeptha21-github-io.vercel.app/)

## Notes

- The portfolio is built as a single-page site with anchor navigation.
- Project visuals in `public/projects/` can be replaced anytime with improved screenshots or charts.
- If local build or dev commands fail on Windows, check for path-permission issues in the local Node environment.
