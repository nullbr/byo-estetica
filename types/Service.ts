export interface Service {
  _id: string;
  _createdAt: Date;
  title: string;
  description: string;
  price?: number;
  image: string;
}
