import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { Section } from "@/components/ui/Section";
import { getPosts, getPostBySlug } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/writing/${post.slug}`,
  });
}

export default async function WritingPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <Section className="pt-16 sm:pt-20" reveal>
      <article className="prose prose-neutral max-w-2xl dark:prose-invert">
        <p className="text-sm text-foreground/50">
          {new Date(post.publishedAt).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h1>{post.title}</h1>
        <PortableText value={post.body} />
      </article>
    </Section>
  );
}
