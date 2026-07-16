import  {bannersData } from "@/data/banners";
export async function getBanners() {
  return Promise.resolve(bannersData);
}