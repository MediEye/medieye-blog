import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import slugify from 'slugify';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q') || undefined;

  const posts = await prisma.post.findMany({
    where: {
      published: true,
      deletedAt: null,
      OR: q
        ? [
            { title: { contains: q, mode: 'insensitive' } },
            { summary: { contains: q, mode: 'insensitive' } },
            { content: { contains: q, mode: 'insensitive' } }
          ]
        : undefined
    },
    orderBy: { publishedAt: 'desc' },
    include: { category: true, tags: true }
  });

  return NextResponse.json(posts);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, summary, content, categoryId, tagIds, published } = body;

    const slug = slugify(title, { lower: true, strict: true, locale: 'ja' });

    const post = await prisma.post.create({
      data: {
        title,
        summary,
        content,
        slug,
        categoryId,
        published,
        publishedAt: published ? new Date() : null,
        tags: tagIds && tagIds.length ? { create: tagIds.map((id: number) => ({ tagId: id })) } : undefined
      },
      include: { tags: true, category: true }
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
} 