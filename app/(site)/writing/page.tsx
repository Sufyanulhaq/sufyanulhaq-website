import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { getPosts } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Writing",
  description:
    "Notes and articles from Sufyan Ul Haq about what he's building and learning in web development.",
  path: "/writing",
});

export default async function WritingPage() {
  const posts = await getPosts();

  return (
    <Section className="pt-16 sm:pt-20" reveal>
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Writing
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-foreground/70">
        Notes on what I&apos;m building and learning — written when
        I&apos;ve actually built, tested, or solved something, not for the
        sake of having content.
      </p>

      {posts.length === 0 ? (
        <p className="mt-12 text-foreground/60">
          Nothing published yet. Check back soon.
        </p>
      ) : (
        <div className="mt-10 space-y-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="block rounded-2xl border border-border p-6 transition-colors hover:border-accent/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <p className="text-sm text-foreground/50">
                {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <h2 className="mt-1 font-semibold">{post.title}</h2>
              <p className="mt-2 text-sm text-foreground/70">
                {post.description}
              </p>
            </Link>
          ))}
        </div>
      )}
    </Section>
  );
}
