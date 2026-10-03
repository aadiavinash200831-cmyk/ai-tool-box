/**
 * NEXUS AI TOOL MATRIX - DATABASE
 * High-fidelity registry of premier AI tools across modern development, creative, and reasoning sectors.
 * Each node is provisioned with high-resolution imagery for 3D perspective holographic cards.
 */
const AI_TOOLS_DATA = [
  // --- CHAT & REASONING ---
  {
    id: "chatgpt",
    name: "ChatGPT (OpenAI)",
    category: "reasoning",
    tagline: "The industry standard conversational LLM with multi-modal reasoning and Voice mode.",
    pricing: "Freemium",
    pricingDetail: "Free (GPT-4o mini / limited 4o), $20/mo Plus (GPT-4o, o1 reasoning, Canvas, Voice)",
    rating: 9.8,
    url: "https://chatgpt.com",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    tags: ["LLM", "Reasoning", "Voice", "Canvas", "Multimodal", "OpenAI"],
    summary: "State-of-the-art generalist conversational AI powerhouse capable of deep reasoning, code generation, vision, and custom GPT agents.",
    whatItIs: "ChatGPT is OpenAI's flagship conversational interface powered by GPT-4o and OpenAI o1 reasoning series. It serves as an omnipresent general intelligence assistant for brainstorming, research, writing, complex problem solving, and workflow orchestration.",
    strengths: [
      "Exceptional general knowledge and advanced multi-step reasoning with o1",
      "Native interactive Canvas for collaborative text and code editing",
      "Advanced Voice Mode with realistic emotional inflection and zero-latency audio",
      "Extensive ecosystem of Custom GPTs and web browsing integration"
    ],
    weaknesses: [
      "Rate limits on top-tier reasoning models during peak usage",
      "Knowledge retrieval occasionally hallucinates very niche citation details"
    ],
    bestFor: "Daily knowledge work, strategic analysis, coding assistance, document drafting, and rapid conceptual synthesis.",
    starterPrompt: "Analyze the following problem step by step using first principles. Highlight key vulnerabilities, trade-offs, and suggest an actionable execution plan.",
    featured: true
  },
  {
    id: "claude",
    name: "Claude 3.5 (Anthropic)",
    category: "reasoning",
    tagline: "Unrivaled nuanced coding, deep analytical writing, and live interactive Artifacts.",
    pricing: "Freemium",
    pricingDetail: "Free tier available; $20/mo Pro for 5x usage, Claude 3.5 Sonnet, and Projects",
    rating: 9.9,
    url: "https://claude.ai",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    tags: ["Coding", "Artifacts", "Long Context", "Analysis", "Anthropic"],
    summary: "Renowned as the gold-standard model for software engineering, natural prose nuance, and instant visual execution via Claude Artifacts.",
    whatItIs: "Claude 3.5 Sonnet by Anthropic is built with safety-focused Constitutional AI. It features a 200K token context window and interactive 'Artifacts' that render web apps, diagrams, SVGs, and markdown side-by-side in real time.",
    strengths: [
      "Top-tier coding proficiency and architectural refactoring accuracy",
      "Artifacts window renders React apps, SVG graphics, and interactive tools live",
      "Nuanced, non-generic writing style devoid of typical repetitive AI cliches",
      "Huge 200,000 token context window for ingesting entire codebases or books"
    ],
    weaknesses: [
      "No native voice interface",
      "Message limits can trigger quickly on the free tier during deep coding sessions"
    ],
    bestFor: "Full-stack web development, code review, architectural design, complex manuscript editing, and data synthesis.",
    starterPrompt: "Create a complete, single-file interactive React component for [insert idea]. Use Tailwind styling and modern hooks with realistic mock data.",
    featured: true
  },
  {
    id: "gemini",
    name: "Google Gemini 1.5 / 2.0",
    category: "reasoning",
    tagline: "Massive 2-million token multimodal context window deeply integrated with Google Workspace.",
    pricing: "Freemium",
    pricingDetail: "Free with Google account; $20/mo Google One AI Premium (Gemini Advanced)",
    rating: 9.7,
    url: "https://gemini.google.com",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    tags: ["2M Context", "Multimodal", "Video Analysis", "Google", "Workspace"],
    summary: "Google's next-gen multimodal intelligence capable of processing entire hours of video, massive audio files, and million-line codebases.",
    whatItIs: "Gemini is Google DeepMind's native multimodal foundation model series, featuring Gemini 1.5 Pro and Flash with an industry-record context window of up to 2 million tokens.",
    strengths: [
      "Massive 2M token context window—drop in 1-hour videos, audio recordings, or entire PDFs",
      "Seamless integration with Google Drive, Gmail, Docs, Maps, and YouTube",
      "Lightning-fast response speeds on Gemini Flash models",
      "Deep grounding with Google Search live citations"
    ],
    weaknesses: [
      "UI safety filters can sometimes be overzealous on edgy prompts",
      "System prompt adherence can occasionally drift over extremely long conversations"
    ],
    bestFor: "Analyzing hour-long video footage, processing huge repository zip files, extracting insights from multi-hundred-page reports.",
    starterPrompt: "Read this entire uploaded 200-page document. Create an executive summary, a matrix of key findings, and extract all numeric metrics into a markdown table.",
    featured: true
  },
  {
    id: "perplexity",
    name: "Perplexity AI",
    category: "research",
    tagline: "The conversational AI search engine that replaces traditional search with verified sources.",
    pricing: "Freemium",
    pricingDetail: "Free basic search; $20/mo Pro (Claude 3.5, GPT-4o, o1, unlimited Pro search, file uploads)",
    rating: 9.8,
    url: "https://www.perplexity.ai",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    tags: ["Search", "Citations", "Research", "Deep Research", "Academic"],
    summary: "Combines real-time web indexation with multi-model AI synthesis to answer queries with precise footnote citations.",
    whatItIs: "Perplexity AI is an answer engine designed to dismantle legacy search engines. Instead of ten blue links, it reads and evaluates real-time web pages, synthesizes cohesive answers, and embeds direct source citations.",
    strengths: [
      "Inline numerical source citations for every claim made",
      "Pro Search mode asks clarifying questions to narrow down deep investigations",
      "Switchable underlying model: toggle between Claude 3.5, GPT-4o, or Sonar models",
      "Pages feature generates shareable, curated research dossiers"
    ],
    weaknesses: [
      "Can struggle when web sources themselves have contradictory or paywalled data",
      "Less suited for open-ended creative storytelling compared to ChatGPT"
    ],
    bestFor: "Real-time fact checking, market research, academic literature sweeps, and replacing Google for complex queries.",
    starterPrompt: "Provide a comprehensive breakdown of the latest developments in [topic] over the past 30 days. Include conflicting viewpoints and cite reputable sources.",
    featured: true
  },
  {
    id: "deepseek",
    name: "DeepSeek (V3 & R1)",
    category: "reasoning",
    tagline: "Open-weights reasoning marvel with chain-of-thought verification rivaling frontier closed models.",
    pricing: "Free / Open Source",
    pricingDetail: "Free web chat; extremely cheap API pricing (~$0.14-$0.55 per million tokens); open weights on HuggingFace",
    rating: 9.7,
    url: "https://chat.deepseek.com",
    imageUrl: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80",
    tags: ["Open Source", "Reasoning", "Chain of Thought", "Cost Effective", "Math"],
    summary: "Breakthrough open-architecture model that stunned the AI landscape with PhD-level math, coding, and reasoning at a fraction of compute cost.",
    whatItIs: "DeepSeek R1 is an open-weights reasoning model developed by DeepSeek that uses reinforcement learning to exhibit spontaneous chain-of-thought verification, backtracking, and mathematical proofs.",
    strengths: [
      "Incredible reasoning transparency with collapsible step-by-step thinking process",
      "Near-parity with closed proprietary frontier models on SWE-bench and math benchmarks",
      "Unprecedented cost-efficiency for developers running API calls or self-hosting",
      "Completely open weights available for private on-prem deployment"
    ],
    weaknesses: [
      "High web traffic occasionally causes server busy warnings",
      "Censors certain geopolitical topics under Chinese regulatory constraints"
    ],
    bestFor: "Mathematical proofs, algorithmic coding, logic puzzles, cost-effective enterprise API workloads.",
    starterPrompt: "Solve the following algorithmic problem: [problem]. Think step by step, analyze time/space complexity, and write optimal clean Python code.",
    featured: true
  },

  // --- DEV & CODE ---
  {
    id: "cursor",
    name: "Cursor AI Code Editor",
    category: "coding",
    tagline: "The AI-native VS Code fork that rewrote how developers write and refactor software.",
    pricing: "Freemium",
    pricingDetail: "Free plan (limited completions); $20/mo Pro (unlimited fast Claude 3.5 / GPT-4o edits)",
    rating: 9.9,
    url: "https://www.cursor.com",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    tags: ["IDE", "Coding", "Composer", "Refactoring", "VS Code Fork"],
    summary: "The reigning developer choice: whole-codebase indexing, multi-file Composer edits, and predictive multi-line tab completions.",
    whatItIs: "Cursor is a full fork of VS Code with deeply integrated AI agents. Its standout feature, Composer (Ctrl+I / Cmd+I), can edit and create multiple project files simultaneously based on natural language instructions.",
    strengths: [
      "Whole-codebase indexing via vector embeddings (`@codebase` querying)",
      "Multi-file generation and synchronized diff reviews with Composer",
      "Instant 'Tab' predictive completions that predict where your cursor will go next",
      "Zero friction migration—imports all VS Code extensions, keybindings, and themes"
    ],
    weaknesses: [
      "Proprietary editor rather than a standalone plugin for JetBrains or Neovim",
      "Requires high internet bandwidth to keep remote indexing synchronized"
    ],
    bestFor: "Professional software engineers, startup founders building MVPs at 10x speed, large refactoring projects.",
    starterPrompt: "@codebase Refactor our authentication middleware to support JWT refresh rotation. List affected files and draft changes.",
    featured: true
  },
  {
    id: "v0-vercel",
    name: "v0 by Vercel",
    category: "coding",
    tagline: "Generative UI system that builds polished React, Tailwind, and shadcn/ui components from prompts.",
    pricing: "Freemium",
    pricingDetail: "Free tier with monthly credits; $20/mo Premium plan with generous generation pools",
    rating: 9.6,
    url: "https://v0.dev",
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    tags: ["Frontend", "React", "Tailwind", "shadcn/ui", "Next.js", "Vercel"],
    summary: "Turn text descriptions into copy-pasteable, production-ready React frontends with live interactive previews.",
    whatItIs: "Created by Vercel, v0 is a specialized generative web studio trained specifically on React, modern Tailwind CSS, and shadcn/ui component architectures.",
    strengths: [
      "Generates visually stunning, highly accessible modern UI components",
      "Direct code export via `npx v0 add` directly into your Next.js project",
      "Interactive sandbox allows clicking and testing states right in the browser",
      "Iterative prompt refinement: click any element on canvas to modify specifically"
    ],
    weaknesses: [
      "Specialized in frontend components; cannot build end-to-end backend databases directly",
      "Output relies heavily on the React / Tailwind ecosystem"
    ],
    bestFor: "Frontend developers, product designers, indie hackers creating landing pages and dashboards in minutes.",
    starterPrompt: "Build a sleek dark-mode analytics dashboard for an AI SaaS with charts, KPI cards, sidebar navigation, and a user profile dropdown.",
    featured: true
  },
  {
    id: "bolt-new",
    name: "Bolt.new",
    category: "coding",
    tagline: "Full-stack in-browser web development sandbox powered by WebContainers and AI.",
    pricing: "Freemium",
    pricingDetail: "Free daily tokens; $20/mo Pro for high-capacity generation tokens",
    rating: 9.5,
    url: "https://bolt.new",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    tags: ["Full Stack", "WebContainers", "Node.js", "In-Browser", "StackBlitz"],
    summary: "Prompt an idea and watch an entire full-stack Node.js, database, and frontend app build and run live inside your browser.",
    whatItIs: "Bolt.new by StackBlitz leverages WebContainers to run a complete Node.js environment directly in your browser tab, allowing the AI to install npm packages, run servers, and fix bugs autonomously.",
    strengths: [
      "Runs true npm dependencies and backend servers entirely client-side",
      "Autonomous error self-correction: catches terminal stack traces and patches them",
      "One-click deployment to Netlify or GitHub repository sync",
      "Instant live interactive preview with terminal and console logging"
    ],
    weaknesses: [
      "Browser memory limitations can slow down extremely heavy build projects",
      "Token consumption can be rapid on large full-stack iterations"
    ],
    bestFor: "Building full-stack prototypes, hackathon apps, client proof-of-concepts without touching local terminal.",
    starterPrompt: "Create a complete Kanban board app with drag and drop, local persistence, dark mode, and tag filtering.",
    featured: false
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    category: "coding",
    tagline: "The ubiquitous AI pair programmer embedded across VS Code, JetBrains, and Visual Studio.",
    pricing: "Paid / Freemium",
    pricingDetail: "Free plan with 2,000 completions/month; $10/mo Individual; $19/user/mo Business",
    rating: 9.4,
    url: "https://github.com/features/copilot",
    imageUrl: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80",
    tags: ["Autocomplete", "GitHub", "Microsoft", "Enterprise", "VS Code"],
    summary: "The most widely adopted enterprise pair programming tool with seamless GitHub PR, repository, and IDE integration.",
    whatItIs: "GitHub Copilot uses OpenAI and Anthropic models to provide contextual multi-line autocomplete, inline terminal corrections, and automated Pull Request summaries.",
    strengths: [
      "Works natively across all major IDEs (VS Code, IntelliJ, PyCharm, Xcode, Neovim)",
      "Strict enterprise security and zero-retention IP indemnification guarantees",
      "Copilot Workspace for end-to-end GitHub issue resolution and PR generation",
      "Multiple model picker: switch between Claude 3.5 Sonnet, GPT-4o, and Gemini"
    ],
    weaknesses: [
      "Autonomous whole-codebase refactoring is less aggressive than Cursor",
      "Chat latency can feel slightly slower in enterprise configurations"
    ],
    bestFor: "Enterprise engineering teams, developers working in JetBrains or Xcode environments, GitHub-centric workflows.",
    starterPrompt: "// Function to calculate exponential moving average with NaN handling and unit tests",
    featured: false
  },

  // --- IMAGE & ART ---
  {
    id: "midjourney",
    name: "Midjourney v6.1",
    category: "image",
    tagline: "The pinnacle of aesthetic quality, cinematic lighting, and photorealistic AI image synthesis.",
    pricing: "Paid",
    pricingDetail: "$10/mo Basic, $30/mo Standard (unlimited relax mode), $60/mo Pro",
    rating: 9.9,
    url: "https://www.midjourney.com",
    imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80",
    tags: ["Photorealism", "Cinematic", "Art", "Aesthetics", "Web & Discord"],
    summary: "Industry gold standard for jaw-dropping visual art, textures, commercial mockups, and cinematic concept imagery.",
    whatItIs: "Midjourney is an independent research lab whose diffusion models generate breathtaking visual assets with unmatched understanding of lighting, camera lenses, textures, and artistic styles.",
    strengths: [
      "Peerless aesthetic fidelity and photorealistic skin, glass, and atmospheric lighting",
      "Now features a sleek web interface alongside the original Discord bot",
      "Vary (Region) inpainting, pan, zoom, and character consistency reference tools",
      "Huge global community feed for prompt discovery and style inspiration"
    ],
    weaknesses: [
      "No permanent free tier; paid subscription required",
      "Accurate rendering of complex multi-word typography can still require fine-tuning"
    ],
    bestFor: "Concept artists, art directors, graphic designers, game developers, visual marketing campaigns.",
    starterPrompt: "Cinematic portrait of a cyberpunk hacker in neon-drenched Tokyo back-alley, holographic HUD reflection in sunglasses, 8k resolution, shot on 35mm lens, f/1.4, photorealistic --ar 16:9 --v 6.1 --style raw",
    featured: true
  },
  {
    id: "flux-1",
    name: "FLUX.1 (Black Forest Labs)",
    category: "image",
    tagline: "Open-weights state-of-the-art image generator with remarkable prompt adherence and text rendering.",
    pricing: "Free / Open Source / API",
    pricingDetail: "Open weights (Schnell & Dev) free on HuggingFace; Pro via API (~$0.05/image); available on Fal.ai and Replicate",
    rating: 9.8,
    url: "https://blackforestlabs.ai",
    imageUrl: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80",
    tags: ["Open Source", "Typography", "Hands & Anatomy", "Fast", "Diffusion Transformer"],
    summary: "Built by original Stable Diffusion creators, FLUX.1 dominates prompt accuracy, complex anatomy, and readable typography.",
    whatItIs: "FLUX.1 is a 12-billion parameter rectified flow transformer model developed by Black Forest Labs that sets new records in human anatomy rendering, complex hand postures, and crystal-clear text generation inside images.",
    strengths: [
      "Uncanny ability to spell complex text, signs, logos, and t-shirt typography correctly",
      "Realistic human hands, fingers, and anatomy without bizarre multi-limb artifacts",
      "Open weights (Dev & Schnell) allow local running on high-end GPUs or ComfyUI",
      "Extremely responsive prompt adherence to minute descriptive details"
    ],
    weaknesses: [
      "High VRAM requirements (~16GB-24GB) for local execution without quantization",
      "Style can lean photographic unless explicitly prompted for stylized illustration"
    ],
    bestFor: "Graphic design with embedded text, posters, local AI art workflows with ComfyUI, commercial stock replacement.",
    starterPrompt: "A futuristic neon storefront with glowing sign that reads 'NEURAL CAFE 2099', rainy street reflection, cinematic cyberpunk mood.",
    featured: true
  },
  {
    id: "recraft-ai",
    name: "Recraft.ai",
    category: "image",
    tagline: "The designer-first AI canvas generating scalable vectors, 3D icons, and brand-consistent illustrations.",
    pricing: "Freemium",
    pricingDetail: "Free daily credits; $20/mo Pro for commercial privacy and unlimited fast vector exports",
    rating: 9.7,
    url: "https://www.recraft.ai",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    tags: ["SVG", "Vectors", "Iconography", "Designers", "Brand Identity"],
    summary: "The only AI generator that outputs native clean SVG vector files and consistent brand design systems.",
    whatItIs: "Recraft is a specialized design canvas tailored for graphic designers and UI/UX pros. It generates infinitely scalable vector graphics (SVG), 3D isometric icons, and vector brand kits with strict palette locking.",
    strengths: [
      "Exports authentic vector SVGs with clean edit-ready node paths",
      "Brand style presets: lock in exact brand hex colors across 100+ generated icons",
      "Infinitely expandable infinite canvas for visual mood-boarding and asset sets",
      "Vector cleanup tools and integrated background remover directly in app"
    ],
    weaknesses: [
      "Less suited for ultra-cinematic photorealistic landscapes than Midjourney",
      "Canvas can feel overwhelming if you only need a quick one-off image"
    ],
    bestFor: "UI/UX designers needing app icons, marketing teams building SVG illustrations, brand identity development.",
    starterPrompt: "Vector icon set of cybersecurity symbols: biometric retinal scanner, encrypted cyber-shield, neon firewall. Flat vector style, cyan and magenta palette.",
    featured: false
  },

  // --- VIDEO & 3D ---
  {
    id: "runway-gen3",
    name: "Runway Gen-3 Alpha",
    category: "video",
    tagline: "Pioneering generative cinematic video with hyper-realistic physical simulation and camera motion.",
    pricing: "Freemium",
    pricingDetail: "Free starter trial; $12/mo Standard, $28/mo Pro for high-res video rendering",
    rating: 9.8,
    url: "https://runwayml.com",
    imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
    tags: ["Video Gen", "Cinematic", "Camera Control", "Motion Brush", "Hollywood"],
    summary: "Leading cinematic video model that produces Hollywood-grade visual effects, character motion, and camera sweeps.",
    whatItIs: "Runway Gen-3 Alpha is a foundational video generation model capable of turning text or initial keyframe images into hyper-detailed 5 to 10-second HD video clips with cinematic physical realism.",
    strengths: [
      "Precise camera direction controls: pan, tilt, zoom, pedestal, and roll coordinates",
      "Motion Brush allows animating specific regions of a still image selectively",
      "Gen-3 Alpha Turbo delivers rapid generation times in under 30 seconds",
      "Deep industry adoption by Hollywood directors and indie filmmakers"
    ],
    weaknesses: [
      "Credits deplete rapidly when generating long sequences",
      "Rapid human acrobatics or fast athletic movement can sometimes introduce temporal morphing"
    ],
    bestFor: "Video creators, trailer production, cinematic concept teasers, B-roll generation.",
    starterPrompt: "Fpv drone shot racing through a dense cyberpunk metropolis with towering neon skyscrapers and flying vehicles in heavy rain, cinematic lighting, 4k.",
    featured: true
  },
  {
    id: "kling-ai",
    name: "Kling AI",
    category: "video",
    tagline: "Exceptional motion physics, high-fidelity human realism, and up to 2-minute video extensions.",
    pricing: "Freemium",
    pricingDetail: "Free daily credits on login; paid tiers from $10/mo to $90/mo for high priority",
    rating: 9.6,
    url: "https://klingai.com",
    imageUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    tags: ["Video", "Realistic Physics", "Extended Duration", "Character Motion"],
    summary: "Renowned for incredible physical simulation, fluid human motions, and extended duration sequences.",
    whatItIs: "Developed by Kuaishou, Kling AI is a high-performance generative video engine that excels at simulating physical interactions, such as eating food, complex facial expressions, and continuous motion trajectories.",
    strengths: [
      "Incredible fidelity in simulating complex real-world physical dynamics",
      "Supports generating clips up to 2 minutes in length using continuous extension",
      "High consistency in human facial expressions and bodily movements",
      "Text-to-video and Image-to-video with custom camera pathing"
    ],
    weaknesses: [
      "Free queue wait times can be lengthy during global peak hours",
      "Interface language translations occasionally have minor quirks"
    ],
    bestFor: "Commercial video ads, human character movement, product animation demonstrations.",
    starterPrompt: "A cybernetic android drinking coffee in a neon diner, looking out the rain-streaked window, natural fluid movement, 1080p photorealistic.",
    featured: false
  },
  {
    id: "luma-dream-machine",
    name: "Luma Dream Machine",
    category: "video",
    tagline: "Lightning-fast high-dynamic-range video and 3D NeRF generation from text and imagery.",
    pricing: "Freemium",
    pricingDetail: "30 free generations/month; paid plans from $29.99/mo to $499/mo",
    rating: 9.5,
    url: "https://lumalabs.ai/dream-machine",
    imageUrl: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80",
    tags: ["Video", "Camera Movement", "3D Camera", "Fast", "Luma"],
    summary: "Smooth 3D camera transitions, fast rendering, and keyframe-to-keyframe video interpolations.",
    whatItIs: "Luma Dream Machine is a video foundation model built by 3D NeRF pioneers Luma AI, engineered for rapid video generation with a deep intrinsic comprehension of 3D spatial geometry and lighting.",
    strengths: [
      "Outstanding 3D camera orbital movement that feels physically grounded",
      "Keyframe start-and-end video interpolation allows morphing between two specific photos",
      "Generates initial previews rapidly",
      "Generous free monthly allotment for testing"
    ],
    weaknesses: [
      "Can occasionally blur fine background details during violent rotational motion",
      "Maximum single-clip generation length is currently 5 seconds before extensions"
    ],
    bestFor: "3D camera moves, dramatic transitions, social media video hooks, architectural flythroughs.",
    starterPrompt: "Orbital drone camera circling an ancient cyber temple glowing with cyan runes atop a misty mountain, sunset lighting.",
    featured: false
  },
  {
    id: "meshy-3d",
    name: "Meshy AI 3D",
    category: "video",
    tagline: "Transform text and 2D concept art into textured 3D meshes ready for game engines.",
    pricing: "Freemium",
    pricingDetail: "Free plan with 200 credits/mo; $16/mo Pro with unlimited downloads and commercial license",
    rating: 9.3,
    url: "https://www.meshy.ai",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
    tags: ["3D Mesh", "Game Dev", "Blender", "Unity", "Unreal Engine", "Texturing"],
    summary: "Generates textured, quad-remeshed 3D models with PBR materials from simple text or single 2D image inputs.",
    whatItIs: "Meshy is a 3D generative AI engine that empowers game designers and XR creators to produce textured 3D assets (FBX, OBJ, USDZ, GLTF) in under 2 minutes.",
    strengths: [
      "Outputs production-ready textured meshes with PBR material maps (Normal, Roughness, Metallic)",
      "High-speed image-to-3D pipeline turns concept art into 3D geometry",
      "Auto-rigging and animation support built directly into the web platform",
      "Seamless export to Blender, Unity, and Unreal Engine"
    ],
    weaknesses: [
      "Topology on organic human faces may still need manual retopology for hero characters",
      "Subtle mechanical joints can occasionally fuse in complex hard-surface models"
    ],
    bestFor: "Indie game developers, 3D printing enthusiasts, VR/AR environment prop dressing.",
    starterPrompt: "A cyberpunk sci-fi hover drone with glowing thrusters, metallic titanium armor plates, game-ready low poly asset.",
    featured: false
  },

  // --- AUDIO & VOICE ---
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    category: "audio",
    tagline: "The world's most realistic voice AI, voice cloning, sound effects, and multilingual dubbing.",
    pricing: "Freemium",
    pricingDetail: "Free 10,000 characters/mo; $5/mo Starter (voice cloning); $22/mo Creator with high quota",
    rating: 9.9,
    url: "https://elevenlabs.io",
    imageUrl: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80",
    tags: ["Voice Cloning", "Text-to-Speech", "Sound FX", "Dubbing", "Podcasts"],
    summary: "Indistinguishable human voice generation with emotional nuances, pacing, instant voice cloning, and audio SFX.",
    whatItIs: "ElevenLabs is the undisputed leader in neural speech synthesis. It produces text-to-speech with uncanny human emotional inflection, hesitation, laughter, whispers, and instant 1-minute voice cloning in 32+ languages.",
    strengths: [
      "Most realistic voice synthesis available anywhere; virtually impossible to distinguish from human",
      "Instant voice cloning from a 60-second audio snippet",
      "Text-to-Sound-Effects generator creates custom Foley and atmospheric sounds",
      "Automated multilingual video dubbing with lip-sync translation"
    ],
    weaknesses: [
      "Character usage quotas can burn quickly on long audiobook productions",
      "Requires strict voice verification to prevent unethical voice mimicry"
    ],
    bestFor: "Podcasters, game developers doing character voice acting, YouTubers, audiobook authors, accessibility.",
    starterPrompt: "Narrate this script with a dramatic, low-pitched noir detective voice. Insert subtle pauses and weary cynicism.",
    featured: true
  },
  {
    id: "suno-ai",
    name: "Suno AI v3.5 / v4",
    category: "audio",
    tagline: "Compose radio-quality, full-length songs with vocals, instruments, and mixing from a prompt.",
    pricing: "Freemium",
    pricingDetail: "50 free daily credits (10 songs/day); $10/mo Pro (500 songs/mo + commercial ownership)",
    rating: 9.8,
    url: "https://suno.com",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    tags: ["Music Generation", "Full Songs", "Vocals", "Songwriting", "Commercial Audio"],
    summary: "Creates complete songs in any genre with authentic vocals, lyrics, guitar solos, and radio production.",
    whatItIs: "Suno is a generative music platform that writes, performs, sings, and mixes complete songs in seconds. From heavy metal to synthwave, acoustic indie, and K-pop, it generates radio-ready audio with lyrics or instruments.",
    strengths: [
      "Generates full 4-minute songs with cohesive verse-chorus-bridge song structures",
      "Incredible vocal quality across multiple musical genres and languages",
      "Custom mode allows you to supply your own lyrics and structure tags like [Drop], [Solo]",
      "V4 brings studio-grade audio mastering and crisper vocal stems"
    ],
    weaknesses: [
      "Stems separation (extracting just the drum or bass) can have minor acoustic bleed",
      "Complex musical time signatures (e.g. 7/8) can sometimes default back to 4/4"
    ],
    bestFor: "Musicians brainstorming hooks, game developers creating dynamic soundtracks, marketers creating jingles.",
    starterPrompt: "A high-octane dark synthwave track with aggressive 80s analog bass, driving drum machines, and haunting female vocals about neon city rain. [Drop] [Guitar Solo]",
    featured: true
  },
  {
    id: "udio",
    name: "Udio AI Music",
    category: "audio",
    tagline: "Audiophile-grade generative music with precise musicality, stems, and multi-section arrangement.",
    pricing: "Freemium",
    pricingDetail: "Free plan with 100 monthly credits; $10/mo Standard (1200 credits), $30/mo Pro",
    rating: 9.6,
    url: "https://www.udio.com",
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
    tags: ["Music", "Vocals", "Stem Separation", "Arrangement", "High Fidelity"],
    summary: "Created by former DeepMind researchers, Udio offers granular musical control, stem exports, and rich harmonics.",
    whatItIs: "Udio is an advanced AI music creation platform known for high acoustic clarity, complex vocal harmonization, and granular section-by-section song expansion.",
    strengths: [
      "Rich vocal harmonies, choir textures, and authentic acoustic instruments",
      "Section extension tools: append intros, outros, and bridge interludes with pinpoint control",
      "Downloadable separated audio stems for remixing in DAWs like Ableton and FL Studio",
      "Fine-tuned genre blending (e.g., Jazz Fusion meets Cyberpunk Electro)"
    ],
    weaknesses: [
      "Building a full song requires incremental 30-second section expansions",
      "Learning curve for mastering prompt musical tags is steeper than Suno"
    ],
    bestFor: "Music producers, sound designers, composers who want to import stems into external audio workstations.",
    starterPrompt: "Lo-fi neo-soul with warm Rhodes piano, vinyl crackle, melodic upright bass, and smooth vocal harmonies.",
    featured: false
  },

  // --- AGENTS & AUTOMATION ---
  {
    id: "n8n-ai",
    name: "n8n AI Workflow Automation",
    category: "agents",
    tagline: "Self-hostable, fair-code workflow automation orchestrating LLMs, vector stores, and 400+ APIs.",
    pricing: "Free / Self-Hosted / Cloud",
    pricingDetail: "Free self-hosted Community edition; Cloud plans start at €20/month",
    rating: 9.8,
    url: "https://n8n.io",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    tags: ["Workflow", "Self-Hosted", "Automation", "LangChain", "Vector DB"],
    summary: "The engineer's choice for building private, enterprise-grade AI agent pipelines and multi-tool automations.",
    whatItIs: "n8n is a visual workflow platform that pairs traditional API automation with native AI nodes. You can construct autonomous agents with tools, LangChain logic, Pinecone vector memories, and webhook triggers.",
    strengths: [
      "Completely open and self-hostable on your own server or Docker container",
      "Native AI agent node: plug in custom tools, sub-workflows, and database queries",
      "Over 400 pre-built integrations with Slack, Postgres, Notion, GitHub, and Telegram",
      "No vendor lock-in; full data sovereignty for HIPAA and GDPR compliance"
    ],
    weaknesses: [
      "Self-hosting requires basic Docker and server administration knowledge",
      "Advanced custom code nodes require familiarity with JavaScript/TypeScript"
    ],
    bestFor: "DevOps engineers, data teams, privacy-conscious businesses automating back-office AI workflows.",
    starterPrompt: "Connect a Telegram webhook to an OpenAI Agent node equipped with a Postgres lookup tool, returning formatted summaries back to Telegram.",
    featured: true
  },
  {
    id: "crewai",
    name: "CrewAI Multi-Agent Framework",
    category: "agents",
    tagline: "Python framework for orchestrating collaborative teams of autonomous AI agents.",
    pricing: "Open Source / Free",
    pricingDetail: "Open source core library (100% free); CrewAI Enterprise for visual orchestrations",
    rating: 9.7,
    url: "https://www.crewai.com",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    tags: ["Agents", "Multi-Agent", "Python", "Open Source", "Autonomous Teams"],
    summary: "Assign roles to an AI 'Crew' (Researcher, Writer, QA, Fact-Checker) and let them collaborate autonomously.",
    whatItIs: "CrewAI is a Python library that structures autonomous agents into collaborative teams. Each agent has a distinct Role, Backstory, Goal, and Tool suite, delegating tasks and critiquing each other's outputs.",
    strengths: [
      "Role-based agent design feels intuitive and closely mirrors human team dynamics",
      "Built-in delegation: agents can spawn sub-tasks and review other agents' work",
      "Plugs into any model: Ollama for local offline execution, OpenAI, Anthropic, or Groq",
      "Huge active open-source community with rich repository of pre-built crew templates"
    ],
    weaknesses: [
      "Requires Python programming skills to configure and deploy",
      "Agent loops can burn through API tokens if stop conditions are poorly constrained"
    ],
    bestFor: "Software engineers building automated research teams, code review councils, and market intelligence pipelines.",
    starterPrompt: "from crewai import Agent, Crew, Task... Define a Market Researcher agent and a Senior Copywriter agent to generate a launch brief.",
    featured: true
  },
  {
    id: "browserbase",
    name: "Browserbase (Headless Browser Agents)",
    category: "agents",
    tagline: "Headless cloud browser infrastructure built specifically for autonomous AI agents.",
    pricing: "Freemium",
    pricingDetail: "Free tier with developer credits; usage-based billing per browser hour",
    rating: 9.6,
    url: "https://www.browserbase.com",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    tags: ["Browser Agents", "Web Scraping", "Stealth", "Automation", "Captcha Solving"],
    summary: "Cloud browser execution environment that lets AI agents interact with, click, and navigate the live web safely.",
    whatItIs: "Browserbase is a serverless platform that hosts, scales, and navigates headless browsers for AI agents (Playwright, Puppeteer, Stagehand). It handles residential proxies, fingerprinting, and captcha bypasses out of the box.",
    strengths: [
      "Solves captchas and bypasses sophisticated bot blockers automatically",
      "Session inspector lets you watch your AI agent browse and click pages in real time",
      "Integrates natively with Stagehand, LangChain, and CrewAI web-navigation tools",
      "Zero server configuration required to scale to thousands of concurrent browsers"
    ],
    weaknesses: [
      "Specialized infrastructure platform meant for developers writing backend agent code",
      "Requires understanding of DOM selectors and web scraping conventions"
    ],
    bestFor: "Developers building autonomous web research agents, price scraping bots, and automated web form submitters.",
    starterPrompt: "Initialize a Browserbase stealth session with Stagehand to navigate to target site, extract all pricing tables, and save as JSON.",
    featured: false
  },

  // --- RESEARCH & SYNTHESIS ---
  {
    id: "notebooklm",
    name: "Google NotebookLM",
    category: "research",
    tagline: "Personalized AI research notebook that grounds answers strictly in your uploaded notes and audio.",
    pricing: "Free",
    pricingDetail: "100% Free with Google account; unlimited notes and Audio Overviews",
    rating: 9.9,
    url: "https://notebooklm.google.com",
    imageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80",
    tags: ["Audio Overview", "Deep Research", "Zero Hallucination", "Google", "PDFs"],
    summary: "Transform PDFs, docs, and URLs into a private grounded knowledge base with mind-blowing viral Audio Overviews.",
    whatItIs: "NotebookLM by Google Labs is a virtual thinking partner powered by Gemini 1.5. Its core superpower is strict source grounding: every single answer it provides is backed up by direct clickable quotes from your uploaded files.",
    strengths: [
      "Viral 'Audio Overview' feature creates a hyper-realistic, two-host podcast deep-diving into your notes",
      "Near-zero hallucination: strictly restricted to information found within your uploaded sources",
      "Upload up to 50 sources per notebook (PDFs, Google Docs, Slides, web links, YouTube videos)",
      "Completely free to use with zero subscription fee"
    ],
    weaknesses: [
      "Cannot browse the general web outside of the sources you explicitly feed it",
      "Audio overview speakers cannot be individually interrupted or re-steered mid-sentence"
    ],
    bestFor: "Students studying textbooks, lawyers reviewing case documents, journalists synthesizing interview transcripts.",
    starterPrompt: "Generate a comprehensive study guide with key definitions, timeline of events, and 5 quiz questions based on the uploaded materials.",
    featured: true
  },
  {
    id: "consensus-ai",
    name: "Consensus AI Academic Search",
    category: "research",
    tagline: "Search engine powered by AI that extracts insights directly from 200M+ peer-reviewed papers.",
    pricing: "Freemium",
    pricingDetail: "Free plan with basic search; $8.99/mo Premium with unlimited Consensus Meter and GPT-4 synthesis",
    rating: 9.7,
    url: "https://consensus.app",
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    tags: ["Science", "Peer-Reviewed", "Medical", "Citations", "Academic"],
    summary: "Ask scientific questions and receive instant meta-analyses based on consensus across peer-reviewed clinical studies.",
    whatItIs: "Consensus is an AI research engine connected to the Semantic Scholar database of 200 million academic papers. It reads actual journal articles to aggregate scientific truth, complete with a 'Consensus Meter' indicating whether research leans yes, no, or inconclusive.",
    strengths: [
      "Consensus Meter shows percentage of peer-reviewed studies agreeing or disagreeing with a hypothesis",
      "Filters by Study Type (Randomized Controlled Trials, Systematic Reviews, Meta-Analyses)",
      "Extracts sample sizes, methodologies, and clinical conclusions automatically",
      "Guaranteed authentic citations—no made-up academic DOIs or fake author names"
    ],
    weaknesses: [
      "Tailored for scientific and medical questions; less applicable to non-academic general queries",
      "Certain cutting-edge proprietary corporate research is not indexed in public paper registries"
    ],
    bestFor: "Researchers, medical professionals, biohackers, and students looking for evidence-based scientific truth.",
    starterPrompt: "Does creatine supplementation improve cognitive performance and working memory in healthy adults?",
    featured: false
  },
  {
    id: "elicit-ai",
    name: "Elicit.org",
    category: "research",
    tagline: "The AI research assistant that automates literature reviews and data extraction across papers.",
    pricing: "Freemium",
    pricingDetail: "Free basic tier with 5,000 credits; $10/mo Plus for 12,000 monthly credits and high-speed extraction",
    rating: 9.6,
    url: "https://elicit.com",
    imageUrl: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80",
    tags: ["Literature Review", "Data Extraction", "Research Papers", "Meta-Analysis"],
    summary: "Automates literature reviews by extracting custom columns (sample size, dosage, outcomes) into a structured spreadsheet.",
    whatItIs: "Elicit is an academic research automation platform that searches 125M+ research papers, summarizes key findings, and extracts specific research variables into structured comparison tables.",
    strengths: [
      "Extracts custom structured data columns directly across dozens of PDFs in parallel",
      "Synthesizes top 8 papers into a cohesive one-paragraph executive abstract",
      "High accuracy in identifying randomized trials vs observational studies",
      "Export structured tables directly to CSV or BibTeX for Zotero integration"
    ],
    weaknesses: [
      "Credit-based pricing can deplete quickly when analyzing multi-hundred paper libraries",
      "Best performance requires clear, scientifically phrased research queries"
    ],
    bestFor: "PhD candidates, clinical researchers, scientific reviewers conducting systematic literature reviews.",
    starterPrompt: "What are the most effective non-pharmacological interventions for reducing insomnia in older adults?",
    featured: false
  },

  // --- WORKFLOW & PRODUCTIVITY ---
  {
    id: "notion-ai",
    name: "Notion AI",
    category: "workflow",
    tagline: "Connected workspace assistant that searches, writes, and summarizes across your team's knowledge base.",
    pricing: "Paid Add-on",
    pricingDetail: "$10/member/month add-on to Notion workspace",
    rating: 9.5,
    url: "https://www.notion.so/product/ai",
    imageUrl: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80",
    tags: ["Workspace", "Wiki", "Notes", "Q&A", "Team Productivity"],
    summary: "Ask questions across your entire company wiki, summarize meeting notes, and automate database updates.",
    whatItIs: "Notion AI embeds LLM capabilities directly inside Notion docs and databases. It can auto-populate database properties, draft meeting follow-ups, and answer questions by searching across thousands of private workspace pages.",
    strengths: [
      "Q&A feature answers questions with direct links to your internal team documentation",
      "Database autofill can summarize, categorize, or translate database records in bulk",
      "Lives right inside your everyday editor without needing copy-pasting into external chats",
      "Enterprise permission-aware: users can only query docs they have read permissions for"
    ],
    weaknesses: [
      "Requires an existing Notion workspace to be useful",
      "Paid add-on fee applies to all workspace members in a paid team"
    ],
    bestFor: "Teams using Notion as their primary company wiki, remote project management, executive meeting summaries.",
    starterPrompt: "Summarize this client meeting transcript into action items with assigned owners, deadlines, and key blockers.",
    featured: false
  },
  {
    id: "replit-agent",
    name: "Replit Agent",
    category: "coding",
    tagline: "End-to-end autonomous software development agent that builds, tests, and deploys full apps from prompts.",
    pricing: "Paid",
    pricingDetail: "Included in Replit Core subscription ($25/mo or $20/mo billed annually)",
    rating: 9.6,
    url: "https://replit.com/ai",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    tags: ["Autonomous Coding", "Deployment", "Full Stack", "Mobile Apps", "Database"],
    summary: "Describe an app from scratch on your phone or desktop, and Replit Agent sets up databases, backend, and deploys live.",
    whatItIs: "Replit Agent is an autonomous software engineering companion capable of scaffolding complete web applications, provisioning PostgreSQL databases, running migrations, designing the UI, and deploying a live public URL.",
    strengths: [
      "True autonomous full-cycle execution: from blank canvas to deployed cloud application",
      "Built-in managed PostgreSQL database and authentication scaffolding",
      "Can be operated entirely from a mobile phone via the Replit iOS/Android app",
      "Clear visual plan before writing code; pauses for user feedback before big changes"
    ],
    weaknesses: [
      "Can consume generation checkpoints rapidly on complex database schemas",
      "Less control over low-level infrastructure compared to local CLI tooling"
    ],
    bestFor: "Entrepreneurs building MVPs, non-technical creators shipping full products, rapid prototyping.",
    starterPrompt: "Build an inventory management web app with PostgreSQL database, barcode search simulator, and export-to-CSV function.",
    featured: false
  },
  {
    id: "lovable-dev",
    name: "Lovable.dev (GPT Engineer)",
    category: "coding",
    tagline: "The fastest way to build full-stack web applications with visual canvas and GitHub synchronization.",
    pricing: "Freemium",
    pricingDetail: "Free starter tier; $20/mo Starter plan, $50/mo Scale for high-intensity app generation",
    rating: 9.7,
    url: "https://lovable.dev",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    tags: ["Full Stack", "Supabase", "React", "Visual Builder", "GitHub Sync"],
    summary: "Build production-grade web apps with Supabase backend, Stripe payments, and live bidirectional GitHub sync.",
    whatItIs: "Lovable is a full-stack AI software engineer that designs, codes, and refines web applications in real time. It pairs modern React and Tailwind frontends with Supabase backends for user auth, databases, and edge functions.",
    strengths: [
      "Native Supabase integration for instant user auth, databases, and storage",
      "Bidirectional GitHub integration: commits code directly to your private repo",
      "Clean, human-readable code architecture that your engineering team can actually maintain",
      "Extremely polished visual design out of the box with zero generic placeholder aesthetic"
    ],
    weaknesses: [
      "Requires connecting your own Supabase account for production persistence",
      "High demand during product launches can occasionally introduce queue delays"
    ],
    bestFor: "Building production SaaS MVPs, client portals, internal operational dashboards.",
    starterPrompt: "Build a job board platform with user authentication, employer job post submission with Stripe checkout, and candidate filtering.",
    featured: true
  }
];

// Helper to retrieve category metadata
const CATEGORIES = [
  { id: "all", name: "ALL NODES", icon: "🌐", count: AI_TOOLS_DATA.length },
  { id: "reasoning", name: "LLM & CHAT", icon: "⚡", count: AI_TOOLS_DATA.filter(t => t.category === "reasoning").length },
  { id: "coding", name: "DEV & CODE", icon: "💻", count: AI_TOOLS_DATA.filter(t => t.category === "coding").length },
  { id: "image", name: "IMAGE & ART", icon: "🎨", count: AI_TOOLS_DATA.filter(t => t.category === "image").length },
  { id: "video", name: "VIDEO & 3D", icon: "🎬", count: AI_TOOLS_DATA.filter(t => t.category === "video").length },
  { id: "audio", name: "AUDIO & VOICE", icon: "🎙️", count: AI_TOOLS_DATA.filter(t => t.category === "audio").length },
  { id: "agents", name: "AGENTS & AUTO", icon: "🤖", count: AI_TOOLS_DATA.filter(t => t.category === "agents").length },
  { id: "research", name: "RESEARCH & DATA", icon: "🔬", count: AI_TOOLS_DATA.filter(t => t.category === "research").length },
  { id: "workflow", name: "WORKFLOW & WIKI", icon: "📑", count: AI_TOOLS_DATA.filter(t => t.category === "workflow").length }
];
