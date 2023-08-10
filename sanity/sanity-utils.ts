import { createClient, groq } from "next-sanity";
import config from "./config/client-config";
import { Service } from "@/types/Service";
import { Image } from "@/types/Image";

export async function getServices(): Promise<Service[]> {
  return createClient(config).fetch(
    groq`*[_type == "service"] | order(title asc) {
      _id,
      _createdAt,
      title,
      description,
      "image": image.asset->url,
      price,
    }`
  );
}

export async function getImage(name: string): Promise<Image> {
  return createClient(config).fetch(
    groq`*[_type == "imageFile" && name == $name][0] {
      _id,
      _createdAt,
      name,
      "url": image.asset->url,
      "alt": image.alt,
    }`,
    { name }
  );
}
