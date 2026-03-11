export interface BlogPost {
  slug: string
  title: string
  date: string
  author: string
  excerpt: string
  readTime: string
  tags: string[]
  published: boolean
}

export const posts: BlogPost[] = [
  {
    slug: '52-tops-on-400-dollars',
    title: '52 TOPS on $400: Running AI Inference at the Edge',
    date: '2026-03-10',
    author: 'Alexa Amundson',
    excerpt:
      'How we built a distributed AI inference cluster with two Hailo-8 accelerators, five Raspberry Pis, and a custom mesh network — delivering 52 trillion operations per second for under $400 in hardware.',
    readTime: '14 min read',
    tags: ['edge-ai', 'hailo-8', 'raspberry-pi', 'inference', 'mesh-network'],
    published: true,
  },
  {
    slug: 'roadnet-carrier-grade-mesh',
    title: 'Building a Carrier-Grade Mesh Network on Raspberry Pis',
    date: '2026-03-08',
    author: 'Alexa Amundson',
    excerpt:
      'RoadNet: 5 access points, 5 subnets, WireGuard failover, Pi-hole DNS — a real carrier network running on $35 boards.',
    readTime: '11 min read',
    tags: ['mesh-network', 'wireguard', 'raspberry-pi', 'networking'],
    published: false,
  },
  {
    slug: 'self-healing-infrastructure',
    title: 'Self-Healing Infrastructure: When Your Servers Fix Themselves',
    date: '2026-03-06',
    author: 'Alexa Amundson',
    excerpt:
      'Autonomy scripts, heartbeat monitors, and automatic service recovery — how we eliminated 3am pages.',
    readTime: '9 min read',
    tags: ['infrastructure', 'self-healing', 'automation', 'devops'],
    published: false,
  },
  {
    slug: 'roadc-language-for-agents',
    title: 'Designing a Programming Language for AI Agents',
    date: '2026-03-04',
    author: 'Alexa Amundson',
    excerpt:
      'Why existing languages fail for agent orchestration, and how RoadC solves it with Python-style indentation and first-class concurrency.',
    readTime: '16 min read',
    tags: ['programming-languages', 'roadc', 'ai-agents', 'language-design'],
    published: false,
  },
  {
    slug: 'sovereign-computing-manifesto',
    title: 'The Sovereign Computing Manifesto',
    date: '2026-03-02',
    author: 'Alexa Amundson',
    excerpt:
      'Your infrastructure should answer to you. Not a cloud provider. Not a vendor. You.',
    readTime: '7 min read',
    tags: ['sovereign-computing', 'philosophy', 'self-hosted', 'independence'],
    published: false,
  },
]

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getPublishedPosts(): BlogPost[] {
  return posts.filter((p) => p.published)
}
