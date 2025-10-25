import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-black dark:via-zinc-950 dark:to-black">
      {/* Navigation Header */}
      <nav className="border-b border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <h1 className="text-xl font-bold text-zinc-900 dark:text-white">
              Notion Clone
            </h1>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-20 sm:py-28">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-zinc-900 via-blue-600 to-zinc-900 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent">
                Welcome to Notion Clone
              </h2>
              <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                Create, organize, and manage your documents all in one place.
                Simple, elegant, and powerful.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/documents"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30 group"
              >
                <span>View Documents</span>
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>

              <Link
                href="/documents/new"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-zinc-300 dark:border-zinc-700 hover:border-blue-500 dark:hover:border-blue-500 text-zinc-900 dark:text-white font-semibold transition-all duration-200 hover:bg-blue-50 dark:hover:bg-blue-950/20"
              >
                <span>Create Document</span>
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-20">
          {[
            {
              icon: "📄",
              title: "Create Documents",
              description:
                "Start with a blank canvas and build your documents.",
            },
            {
              icon: "🖼️",
              title: "Rich Content",
              description: "Add text and images to bring your ideas to life.",
            },
            {
              icon: "💾",
              title: "Auto-save",
              description: "Your changes are automatically saved as you work.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <div className="relative space-y-3">
                <div className="text-4xl">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              © 2025 Notion Clone. All rights reserved.
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Built by{" "}
              <span className="font-semibold text-zinc-900 dark:text-white">
                luka2220
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
