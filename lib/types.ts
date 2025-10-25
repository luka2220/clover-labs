type ContentBlock = TextBlock | ImageBlock;

interface TextBlock {
  id: string;
  type: "text";
  content: string;
}

interface ImageBlock {
  id: string;
  type: "image";
  url: string;
  caption?: string;
}
