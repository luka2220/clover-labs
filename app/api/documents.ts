import { NextResponse } from "next/server";
import { readDB, writeDB } from "../../lib/db";

export async function POST(req: Request) {
  const form = await req.formData();
  const name = (form.get("name") || "").toString().trim();
  const createdBy = (form.get("createdBy") || "").toString().trim();

  if (!name || !createdBy) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const db = await readDB();
  const now = new Date().toISOString();
  const id = crypto.randomUUID();

  db.documents.push({
    id,
    title: name,
    createdAt: now,
    createdBy,
    updatedAt: now,
  });

  await writeDB(db);

  return NextResponse.redirect(new URL(`/documents/${id}`, req.url));
}
