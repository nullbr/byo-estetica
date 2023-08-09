import { createClient, groq } from "next-sanity";
import config from "./config/client-config";
import { Service } from "@/types/Service";

export async function getServices(): Promise<Service[]> {
  return createClient(config).fetch(
    groq`*[_type == "service"] {
      _id,
      _createdAt,
      title,
      description,
      "image": image.asset->url,
      price,
    }`
  );
}
