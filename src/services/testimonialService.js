import { testimonialsData } from "@/data/testimonials";

// later: fetch("/api/testimonials")
export async function getTestimonials() {
  return Promise.resolve(testimonialsData);
}