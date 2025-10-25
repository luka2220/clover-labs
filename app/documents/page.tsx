import Link from "next/link";
import { readDB } from "../../lib/db";

export default async function DocumentsPage() {
  const db = await readDB();
  const docs = [...db.documents].sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );

  console.info("DOCUMENTS:", docs);

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Documents</h1>
        <Link
          href="/documents/new"
          className="inline-flex items-center rounded bg-black px-3 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          New Document
        </Link>
      </div>

      {docs.length === 0 ? (
        <div className="rounded border border-dashed border-zinc-300 p-8 text-center dark:border-zinc-700">
          <p className="text-zinc-600 dark:text-zinc-400">No documents yet.</p>
          <div className="mt-4">
            <Link
              href="/documents/new"
              className="inline-flex items-center rounded bg-black px-3 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              Create your first document
            </Link>
          </div>
        </div>
      ) : (
        <ul className="space-y-3">
          {docs.map((doc) => (
            <li key={doc.id}>
              <Link
                href={`/documents/${doc.id}`}
                className="block rounded-lg border border-zinc-200 p-4 hover:border-blue-500 hover:shadow-sm dark:border-zinc-800 dark:hover:border-blue-500"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium">{doc.title}</h2>
                  <span className="text-xs text-zinc-500">
                    {new Date(doc.updatedAt).toLocaleDateString()}
                  </span>
                </div>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Created by {doc.createdBy}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
