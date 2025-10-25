import "server-only";
import fs from "node:fs/promises";
import path from "node:path";

const DB_PATH = path.join(process.cwd(), "data", "db.json");

type DB = {
  documents: {
    id: string;
    title: string;
    createdAt: string;
    updatedAt: string;
    createdBy: string;
  }[];
  blocks: {
    id: string;
    documentId: string;
    type: "text" | "image";
    order: number;
    // text
    text?: string;
    style?: "h1" | "h2" | "h3" | "p";
    // image
    src?: string;
    width?: number;
    height?: number;
    alt?: string;
  }[];
};

export async function readDB(): Promise<DB> {
  try {
    const json = await fs.readFile(DB_PATH, "utf8");
    return json ? (JSON.parse(json) as DB) : { documents: [], blocks: [] };
  } catch (err: any) {
    if (err.code === "ENOENT") {
      await fs.mkdir(path.dirname(DB_PATH), { recursive: true });
      const empty: DB = { documents: [], blocks: [] };
      await fs.writeFile(DB_PATH, JSON.stringify(empty, null, 2));
      return empty;
    }
    throw err;
  }
}

export async function writeDB(data: DB): Promise<void> {
  await fs.mkdir(path.dirname(DB_PATH), { recursive: true });
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2));
}

export async function getDocumentById(id: string) {
  const db = await readDB();
  return db.documents.find((doc) => doc.id === id) || null;
}

export async function getBlocksByDocumentId(documentId: string) {
  const db = await readDB();
  return db.blocks
    .filter((b) => b.documentId === documentId)
    .sort((a, b) => a.order - b.order);
}

export function getDbPath() {
  return DB_PATH;
}
