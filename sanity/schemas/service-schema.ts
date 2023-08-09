const service = {
  name: "service",
  title: "Serviços",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Título",
      type: "string",
    },
    {
      name: "description",
      title: "Descrição",
      type: "text",
    },
    {
      name: "price",
      title: "Preço",
      type: "number",
    },
    {
      name: "image",
      title: "Imagem",
      type: "image",
      options: { hotspot: true },
    },
  ],
};

export default service;
