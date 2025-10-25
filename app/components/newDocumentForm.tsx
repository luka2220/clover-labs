"use client";

export function NewDocumentForm() {
  return (
    <form
      action="/api/document"
      method="POST"
      className="mx-auto max-w-md space-y-4"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-zinc-700"
        >
          Page name
        </label>
        <input
          id="name"
          name="name"
          required
          placeholder="My Page"
          className="mt-1 w-full rounded border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
        />
      </div>

      <div>
        <label
          htmlFor="createdBy"
          className="block text-sm font-medium text-zinc-700"
        >
          Created by
        </label>
        <input
          id="createdBy"
          name="createdBy"
          required
          placeholder="Your name"
          className="mt-1 w-full rounded border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center rounded bg-black px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
      >
        Create
      </button>
    </form>
  );
}
