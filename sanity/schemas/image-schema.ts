import { defineField, defineType } from "sanity";

export default defineType({
  name: "imageFile",
  title: "Imagens",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Título", type: "string" }),
    defineField({
      name: "image",
      title: "Imagem",
      type: "image",
      options: { hotspot: true },
      // Move the 'alt' field outside of the image field
    }),
    defineField({ name: "alt", title: "Texto alternativo", type: "string" }),
    defineField({ name: "description", title: "Descrição", type: "text" }),
    defineField({
      name: "name",
      title: "Nome (Não é alterar)",
      type: "string",
    }),
  ],
});
