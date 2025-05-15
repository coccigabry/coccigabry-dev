"use client"

export default function imageLoader({ src, width, quality }) {
    if (src.startsWith("https://images.unsplash.com")) return src
    return `https://mywebsitehere.com/${src}?w=${width}&q=${quality || 75}`
}