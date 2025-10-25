import { NewDocumentForm } from "../../components/newDocumentForm";

function NewDocumentPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-10">
      <h1 className="mb-6 text-2xl font-semibold">New Document</h1>
      <NewDocumentForm />
    </div>
  );
}

export default NewDocumentPage;
