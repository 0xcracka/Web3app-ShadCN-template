import { ConnectButton } from "thirdweb/react";
import { client } from "./client";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/darkMode";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container max-w-screen-xl mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-bold">Example App</h1>
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <ConnectButton
              client={client}
              appMetadata={{
                name: "Example App",
                url: "https://example.com",
              }}
            />
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ArticleCard
            title="Getting Started"
            href="#"
            description="Learn how to use our platform effectively."
          />
          <ArticleCard
            title="Advanced Features"
            href="#"
            description="Explore powerful tools and capabilities."
          />
          <ArticleCard
            title="API Documentation"
            href="#"
            description="Integrate our services into your applications."
          />
        </section>

        <footer className="mt-16 text-center">
          <Button>Get Started</Button>
        </footer>
      </div>
    </main>
  );
}

function ArticleCard(props: {
  title: string;
  href: string;
  description: string;
}) {
  return (
    <a
      href={props.href + "?utm_source=next-template"}
      target="_blank"
      className="flex flex-col border border-zinc-800 p-4 rounded-lg hover:bg-zinc-900 transition-colors hover:border-zinc-700"
    >
      <article>
        <h2 className="text-lg font-semibold mb-2">{props.title}</h2>
        <p className="text-sm text-zinc-400">{props.description}</p>
      </article>
    </a>
  );
}
