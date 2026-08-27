import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
    isFeatured: z.boolean().optional(),
    liveUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    type: z.string().default('Essay'), // Essay, Opinion, Reflection, Idea
    tags: z.array(z.string()).optional(),
    isFeatured: z.boolean().optional(),
  }),
});

const fieldNotes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/field-notes" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
  }),
});

const wander = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/wander" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    type: z.string(), // Adventure, Detour, Curiosity, Tried
    location: z.string().optional(),
    pubDate: z.coerce.date(),
    image: z.string().optional(),
    isFeatured: z.boolean().optional(),
  }),
});

export const collections = { work, writing, "field-notes": fieldNotes, wander };
