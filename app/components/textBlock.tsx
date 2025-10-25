import React, { useState } from "react";

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
    <div className="text-block">
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
        />
      ) : (
        <div className="text-content" onClick={() => setIsEditing(true)}>
          {block.content || "Click to edit..."}
        </div>
      )}

      <div className="block-controls">
        <button onClick={() => onAddBlock("text")}>+ Text</button>
        <button onClick={() => onAddBlock("image")}>+ Image</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TextBlock;
