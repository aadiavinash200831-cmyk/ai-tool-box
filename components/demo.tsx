"use client";

import * as React from "react";
import { InteractiveProductCard } from "@/components/ui/card-7";
import { Sparkles, Terminal, Code2, Cpu, Eye, Film, Music } from "lucide-react";

export default function InteractiveAINodesDemo() {
  const [selectedNode, setSelectedNode] = React.useState<string | null>(null);

  const handleLaunch = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleExplain = (name: string) => {
    alert(`NEXUS-7 AI Tactical Briefing summoned for: ${name}`);
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-10 bg-zinc-950 p-6 md:p-12">
      {/* Header telemetry & instructions */}
      <div className="text-center space-y-3 max-w-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>HOLOGRAPHIC 3D AI NODES // TOUCH & MOUSE ENABLED</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-mono">
          AI NODE <span className="text-cyan-400">NAVIGATOR</span>
        </h2>
        <p className="text-sm text-zinc-400 leading-relaxed">
          Hover on desktop or <strong>swipe / drag with your finger on touchscreens</strong> to experience real-time 3D spatial tilt, parallax depth, and tactile HUD feedback.
        </p>
      </div>

      {/* Grid of 3D AI Node Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl justify-items-center">
        {/* Node 1: Claude 3.5 Sonnet */}
        <InteractiveProductCard
          title="Claude 3.5 Sonnet"
          category="Reasoning & Code"
          description="Frontier coding precision, nuanced writing, and live interactive Artifacts."
          pricing="Freemium / $20"
          rating={9.9}
          imageUrl="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
          icon={<Code2 className="h-5 w-5 text-cyan-400" />}
          tags={["Coding", "Artifacts", "Long Context"]}
          onLaunch={() => handleLaunch("https://claude.ai")}
          onDossier={() => setSelectedNode("Claude 3.5 Sonnet")}
          onAiExplain={() => handleExplain("Claude 3.5 Sonnet")}
        />

        {/* Node 2: Cursor AI Code Editor */}
        <InteractiveProductCard
          title="Cursor Code Editor"
          category="Dev & IDE"
          description="The AI-native VS Code fork with Composer multi-file refactoring and predictive tab."
          pricing="Freemium / $20"
          rating={9.9}
          imageUrl="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
          icon={<Terminal className="h-5 w-5 text-emerald-400" />}
          tags={["IDE", "Composer", "Refactoring"]}
          onLaunch={() => handleLaunch("https://www.cursor.com")}
          onDossier={() => setSelectedNode("Cursor AI Code Editor")}
          onAiExplain={() => handleExplain("Cursor AI Code Editor")}
        />

        {/* Node 3: Midjourney v6.1 */}
        <InteractiveProductCard
          title="Midjourney v6.1"
          category="Visual Art"
          description="Peerless aesthetic fidelity, cinematic lighting, and photorealistic concept imagery."
          pricing="Paid / $10+"
          rating={9.9}
          imageUrl="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80"
          icon={<Eye className="h-5 w-5 text-pink-400" />}
          tags={["Photorealism", "Cinematic", "Art"]}
          onLaunch={() => handleLaunch("https://www.midjourney.com")}
          onDossier={() => setSelectedNode("Midjourney v6.1")}
          onAiExplain={() => handleExplain("Midjourney v6.1")}
        />

        {/* Node 4: Runway Gen-3 Alpha */}
        <InteractiveProductCard
          title="Runway Gen-3"
          category="Video & Cinema"
          description="Hollywood-grade generative video with cinematic camera controls and motion brush."
          pricing="Freemium / $12"
          rating={9.8}
          imageUrl="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
          icon={<Film className="h-5 w-5 text-amber-400" />}
          tags={["Video Gen", "Camera Control", "FX"]}
          onLaunch={() => handleLaunch("https://runwayml.com")}
          onDossier={() => setSelectedNode("Runway Gen-3 Alpha")}
          onAiExplain={() => handleExplain("Runway Gen-3 Alpha")}
        />

        {/* Node 5: ElevenLabs Voice */}
        <InteractiveProductCard
          title="ElevenLabs Voice"
          category="Audio & Voice"
          description="Indistinguishable neural speech synthesis, 1-min voice cloning, and audio SFX."
          pricing="Freemium / $5"
          rating={9.9}
          imageUrl="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80"
          icon={<Music className="h-5 w-5 text-purple-400" />}
          tags={["Voice Cloning", "Text-to-Speech", "SFX"]}
          onLaunch={() => handleLaunch("https://elevenlabs.io")}
          onDossier={() => setSelectedNode("ElevenLabs Voice")}
          onAiExplain={() => handleExplain("ElevenLabs Voice")}
        />

        {/* Node 6: DeepSeek R1 */}
        <InteractiveProductCard
          title="DeepSeek R1"
          category="Reasoning & Math"
          description="Open-weights reasoning marvel with chain-of-thought verification rivaling frontier closed models."
          pricing="Free / Open"
          rating={9.7}
          imageUrl="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80"
          icon={<Cpu className="h-5 w-5 text-lime-400" />}
          tags={["Open Source", "Math", "Reasoning"]}
          onLaunch={() => handleLaunch("https://chat.deepseek.com")}
          onDossier={() => setSelectedNode("DeepSeek R1")}
          onAiExplain={() => handleExplain("DeepSeek R1")}
        />
      </div>

      {selectedNode && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-cyan-500/50 p-6 rounded-2xl max-w-md w-full space-y-4">
            <h3 className="text-xl font-bold text-white font-mono">Dossier: {selectedNode}</h3>
            <p className="text-sm text-zinc-300">
              Operational specs loaded. All telemetry nominal.
            </p>
            <button
              onClick={() => setSelectedNode(null)}
              className="w-full py-2 bg-cyan-500 text-black font-bold font-mono rounded-lg hover:bg-cyan-400"
            >
              DISMISS DOSSIER
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
