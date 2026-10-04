// src/utils/slugify.js
//
// Turns a city name like "Washington, D.C." into a safe HTML id like
// "washington-d-c". Used so CityBlock and CityNavbar always agree on
// the same id for the same city, without repeating this logic twice.
export default function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}