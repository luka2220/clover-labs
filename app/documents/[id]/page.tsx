import { getDocumentById } from "../../..//lib/db";
import { NotionPage } from "../../components/renderDocuments";

async function DocumentViewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const documentElements = await getDocumentById(id);
  const initialBlocks =
    documentElements.blocks?.map((b: any) =>
      b.type === "text"
        ? { id: b.id, type: "text", content: b.content || "" }
        : { id: b.id, type: "image", url: b.url || "", caption: b.caption }
    ) ?? [];

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-2xl font-semibold">{page.title}</h1>
      <div className="mt-6">
        <NotionPage initialBlocks={initialBlocks} />
      </div>
    </div>
  );
}

export default DocumentViewPage;
