import { createFileRoute } from "@tanstack/react-router";
import { DownloadIcon, GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <section className="flex flex-col items-center gap-12 py-12 text-center sm:gap-16 sm:py-16">
        <div className="flex flex-col items-center gap-6">
          <img src="/logo512.png" alt="Logo" className="h-48" />
          <div className="flex flex-col items-center gap-3">
            <h1 className="font-extrabold text-6xl">
              Meet{" "}
              <span className="text-primary-tint dark:text-primary">
                Modding
              </span>
              's new home
            </h1>
            <p className="max-w-88 font-medium text-surface-700 text-xl dark:text-surface-300">
              Welcome to the new home of Modding for any game, forever
              Open-Sourced.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <Button variant="primary" size="lg" disabled>
            <DownloadIcon />
            Download*
          </Button>
          {/*
            <Button variant="primary" size="lg" asChild>
              <a href="/download" target="_blank" rel="noopener noreferrer">
                <DownloadIcon />
                Download
              </a>
            </Button>
          */}
          <Button size="lg" asChild>
            <a
              href="https://github.com/void-modding/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
              Source Code
            </a>
          </Button>
        </div>
        <p className="text-surface-600 dark:text-surface-400">
          *No release has been made available yet, the project is still in early
          development.
        </p>
      </section>
    </main>
  );
}
