"use client";

import React, { useState, useCallback } from "react";
import TextBlock from "./textBlock";
import ImageBlock from "./imageBlock";

type TextBlockT = { id: string; type: "text"; content: string };
type ImageBlockT = { id: string; type: "image"; url: string; caption?: string };
export type ContentBlock = TextBlockT | ImageBlockT;

interface NotionPageProps {
  initialBlocks?: ContentBlock[];
  onBlocksChange?: (blocks: ContentBlock[]) => void;
}

export const NotionPage: React.FC<NotionPageProps> = ({
  initialBlocks = [],
  onBlocksChange,
}) => {
  const [blocks, setBlocks] = useState<ContentBlock[]>(initialBlocks);

  const updateBlock = useCallback(
    (id: string, updated: ContentBlock) => {
      const newBlocks = blocks.map((block) =>
        block.id === id ? updated : block
      );
      setBlocks(newBlocks);
      onBlocksChange?.(newBlocks);
    },
    [blocks, onBlocksChange]
  );

  const deleteBlock = useCallback(
    (id: string) => {
      const newBlocks = blocks.filter((block) => block.id !== id);
      setBlocks(newBlocks);
      onBlocksChange?.(newBlocks);
    },
    [blocks, onBlocksChange]
  );

  const addBlock = useCallback(
    (afterId: string | null, type: "text" | "image") => {
      const newBlock: ContentBlock =
        type === "text"
          ? { id: generateId(), type: "text", content: "" }
          : { id: generateId(), type: "image", url: "" };

      let newBlocks: ContentBlock[];
      if (afterId === null) {
        newBlocks = [newBlock, ...blocks];
      } else {
        const index = blocks.findIndex((b) => b.id === afterId);
        newBlocks = [
          ...blocks.slice(0, index + 1),
          newBlock,
          ...blocks.slice(index + 1),
        ];
      }

      setBlocks(newBlocks);
      onBlocksChange?.(newBlocks);
    },
    [blocks, onBlocksChange]
  );

  return (
    <div className="space-y-4">
      {blocks.map((block) => (
        <div
          key={block.id}
          className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
        >
          {block.type === "text" && (
            <TextBlock
              block={block}
              onUpdate={(updated) => updateBlock(block.id, updated)}
              onDelete={() => deleteBlock(block.id)}
              onAddBlock={(type) => addBlock(block.id, type)}
            />
          )}
          {block.type === "image" && (
            <ImageBlock
              block={block}
              onUpdate={(updated) => updateBlock(block.id, updated)}
              onDelete={() => deleteBlock(block.id)}
              onAddBlock={(type) => addBlock(block.id, type)}
            />
          )}
        </div>
      ))}

      {blocks.length === 0 && (
        <div className="rounded-lg border border-dashed border-zinc-300 p-8 text-center dark:border-zinc-700">
          <p className="text-zinc-600 dark:text-zinc-400">
            This page is empty. Add your first block.
          </p>
          <div className="mt-4 flex justify-center gap-3">
            <button
              onClick={() => addBlock(null, "text")}
              className="inline-flex items-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              + Text block
            </button>
            <button
              onClick={() => addBlock(null, "image")}
              className="inline-flex items-center rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm font-medium text-zinc-900 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
            >
              + Image block
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
