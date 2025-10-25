## Notion Clone Notes

## Functionality

- Create new pages
- View stored pages
- Add text blocks to pages
- Add image blocks to pages
- Image upload functionality

## Pages

### Home

`Root page on site load`

- Menu option to create a new page
- Feed to view the saved pages
- Option to select on a saved page to view/edit

### Notes Page

`This page will be the most importent; All notion page functionality will live in here`

`Figure out how to store pages? In JSON/CSV/SQLITE`

- Each page will need it's own id
- Need a way to add a title for a page
- Ability to create text blocks and images in the page
- Ability to save the page on cmd+s/ctrl+s
- Need a way to edit pages
- Need a way to view pages
- Upload images from system
- Create text blocks
- At first all one size, then we can add headings, paragraph text, and styled text

- For building the notion page elements we can build components for:
  - Text Element: a react component that stored and renders text on the page
  - Image Element: a react component that uploads, stores and renders the component on the page

## Storage

### JSON Storage

JSON Storage

- All pages created will be stored as an array of pages
- Each page will have a block's array with an order of how to render them onto the page

```json
{
  "pages": [
    {
      "id": "page-1",
      "title": "My First Page",
      "description": "This is my first page",
      "slug": "my-first-page",
      "metadata": {
        "createdAt": "2025-10-25T12:50:24Z",
        "updatedAt": "2025-10-25T12:50:24Z",
        "createdBy": "luka2220",
        "icon": "",
        "color": "blue"
      },
      "blocks": [
        {
          "id": "block-1",
          "type": "text",
          "content": "Welcome to my page!",
          "order": 0
        },
        {
          "id": "block-2",
          "type": "image",
          "url": "https://example.com/image.jpg",
          "caption": "A beautiful sunset",
          "order": 1
        }
      ]
    }
  ]
}
```
