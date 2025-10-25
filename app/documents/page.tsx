import { notFound } from "next/navigation";
import { readDB } from "../../lib/db";

type Props = { params: { documentId: string } };

export default async function DocumentPage({ params }: Props) {
  const db = await readDB();
  const doc = db.documents.find((d) => d.id === params.documentId);
  if (!doc) return notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-2xl font-semibold">{doc.title}</h1>
      <p className="mt-2 text-sm text-zinc-500">Created by {doc.createdBy}</p>
      {/* Render and manage blocks here */}
    </div>
  );
}
