import { notFound } from "next/navigation";
import { getDocumentById, getBlocksByDocumentId } from "../../../lib/db";
import { NotionPage } from "../../components/renderDocuments";

export default async function DocumentViewPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const doc = await getDocumentById(id);
  if (!doc) return notFound();

  const blocks = await getBlocksByDocumentId(id);

  // Map DB blocks -> client blocks
  const initialBlocks =
    blocks.map((b) =>
      b.type === "text"
        ? { id: b.id, type: "text" as const, content: b.text ?? "" }
        : {
            id: b.id,
            type: "image" as const,
            url: b.src ?? "",
            caption: b.alt,
          }
    ) ?? [];

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-2xl font-semibold">{doc.title}</h1>
      <div className="mt-6">
        <NotionPage initialBlocks={initialBlocks} />
      </div>
    </div>
  );
}
