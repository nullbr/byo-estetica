import { defineField, defineType } from "sanity";

export default defineType({
  name: "service",
  title: "Serviços",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Descrição",
      type: "text",
    }),
    defineField({
      name: "price",
      title: "Preço",
      type: "number",
    }),
    defineField({
      name: "image",
      title: "Imagem",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
