"use client";

import React, { useState } from "react";

type TextBlock = { id: string; type: "text"; content: string };

interface TextBlockProps {
  block: TextBlock;
  onUpdate: (block: TextBlock) => void;
  onDelete: () => void;
  onAddBlock: (type: "text" | "image") => void;
}

export const TextBlock: React.FC<TextBlockProps> = ({
  block,
  onUpdate,
  onDelete,
  onAddBlock,
}) => {
  const [isEditing, setIsEditing] = useState(!block.content);

  return (
    <div className="flex flex-col gap-3">
      {isEditing ? (
        <textarea
          value={block.content}
          onChange={(e) => onUpdate({ ...block, content: e.target.value })}
          onBlur={() => setIsEditing(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.ctrlKey) {
              setIsEditing(false);
              onAddBlock("text");
            }
          }}
          autoFocus
          placeholder="Start typing..."
          className="w-full min-h-[96px] resize-y rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
        />
      ) : (
        <div
          className="prose prose-zinc max-w-none cursor-text dark:prose-invert"
          onClick={() => setIsEditing(true)}
        >
          {block.content || "Click to edit..."}
        </div>
      )}

      <div className="flex items-center gap-2">
        <button
          onClick={() => onAddBlock("text")}
          className="inline-flex items-center rounded-md border border-zinc-300 bg-white px-2.5 py-1.5 text-xs font-medium text-zinc-900 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
        >
          + Text
        </button>
        <button
          onClick={() => onAddBlock("image")}
          className="inline-flex items-center rounded-md border border-zinc-300 bg-white px-2.5 py-1.5 text-xs font-medium text-zinc-900 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
        >
          + Image
        </button>
        <button
          onClick={onDelete}
          className="ml-auto inline-flex items-center rounded-md bg-red-600 px-2.5 py-1.5 text-xs font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TextBlock;
