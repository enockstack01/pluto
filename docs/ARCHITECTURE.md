# Pluto Architecture

This document provides a high-level architecture diagram and component descriptions for the Pluto platform.

```mermaid
flowchart LR
  Browser[Browser UI / Chat Client]
  subgraph Frontend
    Browser --> ChatClient[Chat Component]
    ChatClient --> Messages[Message Stream / UI]
  end
  ChatClient --> API[API Routes (api.chat, api.enhancer)]
  API --> AIBackend[LLM / Prompt Enhancer Service]
  API --> Runtime[WebContainer Runtime]
  Runtime --> WebContainer[WebContainers (Node.js runtime in-browser)]
  WebContainer --> ActionRunner[Action Runner / Executor]
  WebContainer --> FileSystem[Virtual Filesystem]
  Runtime --> Persistence[IndexedDB / Client DB]
  API --> GitHub[GitHub Integration (deploy, repo)]
  AIBackend --> Models[AI Models & Providers]
  Models --> |instructions| ActionRunner
  subgraph Services
    MessageParser[Message Parser]
    Enhancer[Prompt Enhancer]
  end
  Messages --> MessageParser
  API --> Services
  Deployment[Deployment Pipeline] --> GitHub
  ActionRunner --> Deployment

  classDef infra fill:#f8f9fa,stroke:#333,stroke-width:1px;
  class Runtime,WebContainer,GitHub,Deployment infra;
```

## Component Overview

- **Browser UI / Chat Client**: The user-facing interface where prompts are entered, messages are streamed, and results are previewed.
- **Chat Component**: Manages message streaming, assistants' artifacts, code edit interactions, and save/persist operations.
- **API Routes**: Server-side endpoints (`api.chat`, `api.enhancer`) that proxy chat messages to AI backends, perform prompt enhancement, and stream responses back to the UI.
- **AI Backend**: Responsible for model orchestration and prompt enhancement. It interacts with AI model providers and formats instructions for the runtime.
- **WebContainer Runtime**: In-browser Node.js runtime powered by WebContainers, enabling package installs, servers, and shell access inside the browser.
- **Action Runner**: Executes filesystem and shell actions inside the WebContainer (run tests, apply patches, start servers).
- **Message Parser**: Extracts structured tags (artifacts, actions) from assistant messages and converts them into actionable tasks.
- **Persistence**: Local storage layer (IndexedDB or other client DB) used to store chat history, artifacts, and settings.
- **GitHub Integration**: Optional integration for pushing repos, creating deployments, and managing remote history.

## Flow Summary

1. The user submits a prompt in the Browser UI.
2. The UI sends the prompt to `api.chat` / `api.enhancer`.
3. The AI Backend returns a streaming response; the Message Parser identifies actionable artifacts and actions.
4. The Action Runner executes requested operations in the WebContainer runtime (install, run, edit, test).
5. Runtime output is streamed back to the UI for user review. Artifacts can be persisted locally or pushed to GitHub for deployment.

---

File: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)

If you'd like a PNG/SVG export of the diagram or a more detailed component glossary, I can add it next.
