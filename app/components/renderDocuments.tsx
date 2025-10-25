"use client";

import React, { useState, useCallback } from "react";
import TextBlock from "./textBlock";
import ImageBlock from "./imageBlock";

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
    <div className="notion-page">
      {blocks.map((block, index) => (
        <div key={block.id} className="block-wrapper">
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
        <div className="empty-state">
          <button onClick={() => addBlock(null, "text")}>Add text block</button>
          <button onClick={() => addBlock(null, "image")}>
            Add image block
          </button>
        </div>
      )}
    </div>
  );
};

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
