import PostCard from '@/components/PostCard';
import { prisma } from '@/lib/prisma';

export default async function HomePage() {
  const posts = await prisma.post.findMany({
    where: { published: true, deletedAt: null },
    orderBy: { publishedAt: 'desc' },
    include: {
      category: true,
      tags: true
    }
  });

  return (
    <section>
      <h1 className="mb-6 text-3xl font-bold">最新の論文要約</h1>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      {posts.length === 0 && <p>まだ公開された記事はありません。</p>}
    </section>
  );
} 