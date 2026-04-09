# 🚀 Day 3: The AI Developer Stack & Prompt Engineering

**Date:** [Insert Date]
**Daily Focus:** Mastering AI tools for coding, asset generation, and learning the exact vocabulary needed to command AI like a senior engineer.

---

## 🧠 Discoveries: AI for Coding
* **Context is King:** AI coding assistants fail when they don't understand the full picture. Giving the AI the entire project structure or a PRD yields 10x better results than asking it to write a single function in isolation.
* **Iterative Prompting:** The first output is rarely perfect. The secret is to treat the AI like a junior developer—give it feedback, point out the exact errors, and ask it to refactor.
* **Design to Code:** Using tools that convert UI images directly into Tailwind/React code is a massive time saver, but I still need to know CSS Grid/Flexbox to fix the layouts when the AI makes a mistake.

---

## 🛠️ Tools & My Opinions

### 1. Cursor IDE
* **What it does:** An AI-first code editor built on VS Code.
* **My Opinion:** [Dummy Opinion] Absolute game-changer. The `Cmd+L` chat feature and inline code generation make writing boilerplate code instant. However, I need to be careful not to let it write logic I don't understand.

### 2. v0.dev / Claude 3.5 Sonnet
* **What it does:** Generates UI components and full pages from text prompts.
* **My Opinion:** [Dummy Opinion] Incredible for prototyping. I can ask for a "SaaS dashboard sidebar" and get a fully styled Tailwind component in seconds. Sometimes the colors need manual adjusting.

### 3. Midjourney / DALL-E 3
* **What it does:** Generates images, vectors, and UI assets.
* **My Opinion:** [Dummy Opinion] Great for creating placeholder avatars, logos, and background patterns so I don't have to hire a designer or search for stock photos.

---

## 📖 Terminology Dictionary
*To get the best code and design from AI, I must use the exact industry terms.*

### Architecture & Planning Terms
* **PRD (Product Requirements Document):** A document detailing the features, tech stack, and user flow of an app. *Rule: Always generate a PRD with AI before writing code.*
* **Tech Stack:** The combination of languages and tools used (e.g., MERN stack, React + Vite + Tailwind).
* **CRUD:** Create, Read, Update, Delete. The four basic operations of any database-driven app.

### UI / UX Design Terms
* **Hero Section:** The large, prominent section at the top of a landing page containing the main headline and Call to Action (CTA).
* **Call to Action (CTA):** The primary button you want the user to click (e.g., "Sign Up Now").
* **Box Shadow / Drop Shadow:** The visual effect that gives an element depth, making it look like it's hovering over the page.
* **Padding vs. Margin:** Padding is the space *inside* an element's border. Margin is the space *outside* the border.
* **Favicon:** The small icon displayed on the browser tab.
* **SVGs:** Scalable Vector Graphics. The best format for icons and logos because they never lose quality when zoomed in.

---

## 💬 The Prompt Vault
*My library of tested, high-yield prompts.*

### 1. The PRD Generator Prompt
> "Act as a Senior Product Manager. I want to build a [Insert App Idea, e.g., Student Dashboard]. Write a highly detailed PRD (Product Requirements Document) for this app. Include the target audience, core features, nice-to-have features, and a recommended modern Tech Stack (preferring React, Vite, and Tailwind). Format it in clean Markdown."

### 2. The UI Component Prompt
> "Act as an expert Frontend Developer. Write the code for a modern, responsive [Insert Component, e.g., Pricing Card]. Use React, Tailwind CSS, and Lucide Icons. The design should have a clean white background, a subtle box shadow, and a prominent primary CTA button. Do not use external CSS files, rely entirely on Tailwind utility classes."

### 3. The Debugging Prompt
> "I am getting the following error in my React application: [Paste Error]. Here is the relevant code block: [Paste Code]. Explain why this error is happening in one simple sentence, and then provide the corrected code."