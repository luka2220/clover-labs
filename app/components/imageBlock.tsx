"use client";

import React, { useState } from "react";

type ImageBlock = { id: string; type: "image"; url: string; caption?: string };

interface ImageBlockProps {
  block: ImageBlock;
  onUpdate: (block: ImageBlock) => void;
  onDelete: () => void;
  onAddBlock: (type: "text" | "image") => void;
}

export const ImageBlock: React.FC<ImageBlockProps> = ({
  block,
  onUpdate,
  onDelete,
  onAddBlock,
}) => {
  const [urlInput, setUrlInput] = useState(block.url);

  const handleUrlSubmit = () => {
    onUpdate({ ...block, url: urlInput });
  };

  return (
    <div className="flex flex-col gap-3">
      {block.url ? (
        <div className="overflow-hidden rounded-md border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
          <img
            src={block.url}
            alt={block.caption || "Block image"}
            className="h-auto w-full object-contain"
          />
          {block.caption && (
            <p className="px-3 pb-3 pt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {block.caption}
            </p>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            type="text"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            placeholder="Paste image URL..."
            onKeyDown={(e) => e.key === "Enter" && handleUrlSubmit()}
            className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
            aria-label="Image URL"
          />
          <button
            onClick={handleUrlSubmit}
            type="button"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Image
          </button>
        </div>
      )}

      <input
        type="text"
        value={block.caption || ""}
        onChange={(e) => onUpdate({ ...block, caption: e.target.value })}
        placeholder="Add caption..."
        className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
        aria-label="Image caption"
      />

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

export default ImageBlock;
