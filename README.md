![Pluto: AI-Powered Full-Stack Web Development in the Browser](./public/social_preview_index.jpg)

# Pluto: AI-Powered Full-Stack Web Development in the Browser

Pluto is an AI-driven development agent that lets you prompt, run, edit, test, and deploy full-stack web applications directly from your browser — no local setup required. This repository contains the open-source core used to power Pluto.

**Quick Links**

- Documentation: see this `README` and the `app/` folder for runtime components
- Contributing: [CONTRIBUTING.md](./CONTRIBUTING.md)

**Core Capabilities**

- Full-stack runtime in the browser: run Node.js, install packages, and launch dev servers using WebContainers.
- Environment-aware AI: models can operate on the filesystem, run commands in the terminal, start servers, and inspect runtime output.
- Integrated workflow: scaffold, edit, test, and deploy from chat-based interactions.

## Features

- Install and run npm tools and libraries (Vite, Next.js, etc.)
- Run Node.js servers and background processes
- Interact with third-party APIs and external services
- Deploy applications from the chat interface

## Why Pluto?

Traditional AI coding assistants can generate code but lack access to a running environment. Pluto closes that gap by giving AI agents the runtime access they need to verify, iterate, and ship working applications.

## Developer Quickstart

Clone and run locally, or open in a WebContainer-capable host:

```bash
git clone https://github.com/enockstack01/pluto.git
cd pluto
pnpm install
pnpm dev
```

Open the app in your browser at the address printed by the dev server, or use StackBlitz to run entirely in-browser.

## How to Use Pluto

- Send natural-language prompts to scaffold or modify projects.
- Use the prompt `Enhance` button to refine instructions before executing them.
- Specify the stack (frameworks, UI libs, CSS systems) in your prompt for predictable scaffolding.

## Tips & Best Practices

- Start with a minimal scaffold and iterate by requesting targeted changes.
- Batch related small tasks into one prompt to reduce round trips.
- Provide environment constraints (Node version, package manager) when reproducibility matters.

## FAQ

**Is Pluto free to use?**
Pluto is free to get started. For higher usage or private projects, configure your own model keys or deployment.

**What happens when free tokens run out?**
Interactions pause until tokens reset or you add additional model access.

**Is Pluto production-ready?**
Pluto is under active development (beta). Use it for prototyping and internal tools; evaluate for production carefully.

**How do I report issues?**
Open an issue in this repository and search for existing reports first.

**Which frameworks work?**
Most frameworks that run in WebContainers can be used. If it runs on StackBlitz, it will likely run on Pluto.

## Contributing

Contributions welcome — see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## Contact

For partnership or integration discussions, contact hello@stackblitz.com.

---

Want additional docs (architecture diagram, dev guide, API reference)? Tell me which page to add next and I will scaffold it.
