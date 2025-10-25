async function DocumentViewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <div>Document View Page for document ID: {id}</div>;
}

export default DocumentViewPage;
