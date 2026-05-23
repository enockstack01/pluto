[![Pluto: AI-Powered Full-Stack Web Development in the Browser](./public/social_preview_index.jpg)](.)

# Pluto: AI-Powered Full-Stack Web Development in the Browser

Pluto is an AI-powered web development agent that allows you to prompt, run, edit, and deploy full-stack applications directly from your browser—no local setup required. If you're here to build your own AI-powered web dev agent using the Pluto open-source codebase, [click here to get started!](./CONTRIBUTING.md)

## What Makes Pluto Different

Claude, v0, etc are incredible — but you can't install packages, run backends or edit code. That’s where Pluto stands out:

- **Full-Stack in the Browser**: Pluto integrates cutting-edge AI models with an in-browser development environment powered by **StackBlitz’s WebContainers**. This allows you to:
  - Install and run npm tools and libraries (like Vite, Next.js, and more)
  - Run Node.js servers
  - Interact with third-party APIs
  - Deploy to production from chat
  - Share your work via a URL

- **AI with Environment Control**: Unlike traditional dev environments where the AI can only assist in code generation, Pluto gives AI models **complete control** over the entire environment including the filesystem, node server, package manager, terminal, and browser console. This empowers AI agents to handle the entire app lifecycle—from creation to deployment.

Whether you’re an experienced developer, a PM or designer, Pluto allows you to build production-grade full-stack applications with ease.

For developers interested in building their own AI-powered development tools with WebContainers, check out the open-source Pluto codebase in this repo!

## Tips and Tricks

Here are some tips to get the most out of Pluto:

- **Be specific about your stack**: If you want to use specific frameworks or libraries (like Astro, Tailwind, ShadCN, or any other popular JavaScript framework), mention them in your initial prompt to ensure Pluto scaffolds the project accordingly.

- **Use the enhance prompt icon**: Before sending your prompt, try clicking the 'enhance' icon to have the AI model help you refine your prompt, then edit the results before submitting.

- **Scaffold the basics first, then add features**: Make sure the basic structure of your application is in place before diving into more advanced functionality. This helps Pluto understand the foundation of your project and ensure everything is wired up right before building out more advanced functionality.

- **Batch simple instructions**: Save time by combining simple instructions into one message. For example, you can ask Pluto to change the color scheme, add mobile responsiveness, and restart the dev server, all in one go saving you time and reducing API credit consumption significantly.

## FAQs

**Where do I sign up for a paid plan?**  
Pluto is free to get started. If you need more AI tokens or want private projects, configure your own deployment and API access using the tools and keys you control.

**What happens if I hit the free usage limit?**  
Once your free daily token limit is reached, AI interactions are paused until the next day or until you add another model key or change your plan.

**Is Pluto in beta?**  
Yes, Pluto is in beta, and we are actively improving it based on feedback.

**How can I report Pluto issues?**  
Open an issue in this repository to report a bug or request a feature. Please use the search feature to check if someone else has already submitted the same issue/request.

**What frameworks/libraries currently work with Pluto?**  
Pluto supports most popular JavaScript frameworks and libraries. If it runs on StackBlitz, it will run on Pluto as well.

**How can I make sure my framework/project works well in Pluto?**  
We are excited to work with the JavaScript ecosystem to improve functionality in Pluto. Reach out to us via [hello@stackblitz.com](mailto:hello@stackblitz.com) to discuss how we can partner!
