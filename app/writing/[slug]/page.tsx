import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Section } from "@/components/ui/Section";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
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
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <Section className="pt-16 sm:pt-20">
      <article className="prose prose-neutral max-w-2xl dark:prose-invert">
        <p className="text-sm text-foreground/50">{post.date}</p>
        <h1>{post.title}</h1>
        <MDXRemote source={post.content} />
      </article>
    </Section>
  );
}
