import React, { useState } from "react";

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
    <div className="image-block">
      {block.url ? (
        <div className="image-container">
          <img src={block.url} alt={block.caption || "Block image"} />
          {block.caption && <p className="caption">{block.caption}</p>}
        </div>
      ) : (
        <div className="image-input">
          <input
            type="text"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            placeholder="Paste image URL..."
            onKeyDown={(e) => e.key === "Enter" && handleUrlSubmit()}
          />
          <button onClick={handleUrlSubmit}>Add Image</button>
        </div>
      )}

      <input
        type="text"
        value={block.caption || ""}
        onChange={(e) => onUpdate({ ...block, caption: e.target.value })}
        placeholder="Add caption..."
        className="caption-input"
      />

      <div className="block-controls">
        <button onClick={() => onAddBlock("text")}>+ Text</button>
        <button onClick={() => onAddBlock("image")}>+ Image</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default ImageBlock;
