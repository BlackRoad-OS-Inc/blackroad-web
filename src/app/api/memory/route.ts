import { NextResponse } from 'next/server'
import crypto from 'crypto'

interface ChainEntry { index: number; key: string; content: string; hash: string }

function sha(prev: string, key: string, content: string) {
  return crypto.createHash('sha256').update(`${prev}:${key}:${content}`).digest('hex')
}

function buildChain(): ChainEntry[] {
  const entries = [
    { key: 'genesis',       content: 'BlackRoad OS Memory System v1' },
    { key: 'fleet.init',    content: 'Pi fleet online: aria64 + alice (30,000 agents)' },
    { key: 'agents.start',  content: '5 core agents activated: Octavia, Lucidia, Alice, Aria, Shellfish' },
    { key: 'worlds.begin',  content: 'World generation started — aria64 + alice relay mode' },
  ]
  const chain: ChainEntry[] = []
  let prevHash = 'GENESIS'
  entries.forEach((e, i) => {
    const hash = i === 0 ? 'GENESIS' : sha(prevHash, e.key, e.content)
    chain.push({ index: i, ...e, hash })
    prevHash = hash
  })
  return chain
}

export async function GET() {
  const chain = buildChain()
  return NextResponse.json({
    chain,
    head: chain[chain.length - 1].hash,
    length: chain.length,
    algorithm: 'PS-SHA∞',
    timestamp: new Date().toISOString(),
  })
}
