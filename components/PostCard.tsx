import Link from 'next/link';
import type { Post } from '@prisma/client';

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="mb-8 rounded-md border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <h2 className="mb-2 text-xl font-semibold">
        <Link href={`/posts/${post.slug}`}>{post.title}</Link>
      </h2>
      {post.summary && (
        <p className="text-sm text-gray-600 dark:text-gray-300">{post.summary}</p>
      )}
      <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
        {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Draft'}
      </div>
    </article>
  );
} 