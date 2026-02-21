'use client'

import { useState } from 'react'
import { StatusEmoji, PulsingDot } from '../components/BlackRoadVisuals'

export default function KanbanBoardPage() {
  const [columns] = useState([
    {
      id: 'backlog',
      title: 'Backlog',
      color: 'var(--br-charcoal)',
      cards: [
        { id: 1, title: 'Add real-time collaboration', priority: 'low', assignee: '🤖', tags: ['feature'] },
        { id: 2, title: 'Implement search', priority: 'medium', assignee: '👨‍💻', tags: ['feature', 'ui'] },
        { id: 3, title: 'Refactor API client', priority: 'low', assignee: '👩‍💻', tags: ['tech-debt'] }
      ]
    },
    {
      id: 'todo',
      title: 'To Do',
      color: 'var(--br-cyber-blue)',
      cards: [
        { id: 4, title: 'Build dashboard v2', priority: 'high', assignee: '👨‍💻', tags: ['feature', 'ui'] },
        { id: 5, title: 'Fix memory leak in worker', priority: 'high', assignee: '🤖', tags: ['bug'] },
        { id: 6, title: 'Update dependencies', priority: 'medium', assignee: '👩‍💻', tags: ['maintenance'] }
      ]
    },
    {
      id: 'in-progress',
      title: 'In Progress',
      color: 'var(--br-warm-orange)',
      cards: [
        { id: 7, title: 'Implement kanban board', priority: 'high', assignee: '👨‍💻', tags: ['feature', 'ui'] },
        { id: 8, title: 'Write API documentation', priority: 'medium', assignee: '👩‍💻', tags: ['docs'] }
      ]
    },
    {
      id: 'review',
      title: 'Review',
      color: 'var(--br-vivid-purple)',
      cards: [
        { id: 9, title: 'Add visual language system', priority: 'high', assignee: '🤖', tags: ['feature', 'ui'] },
        { id: 10, title: 'Security audit', priority: 'critical', assignee: '👨‍💻', tags: ['security'] }
      ]
    },
    {
      id: 'done',
      title: 'Done',
      color: 'var(--br-hot-pink)',
      cards: [
        { id: 11, title: 'Multi-agent orchestration', priority: 'critical', assignee: '🤖', tags: ['feature'] },
        { id: 12, title: 'Railway integration', priority: 'high', assignee: '👩‍💻', tags: ['feature'] },
        { id: 13, title: 'Cloudflare Pages setup', priority: 'high', assignee: '👨‍💻', tags: ['infra'] }
      ]
    }
  ])

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'critical': return 'var(--br-electric-magenta)'
      case 'high': return 'var(--br-hot-pink)'
      case 'medium': return 'var(--br-warm-orange)'
      case 'low': return 'rgba(255,255,255,0.6)'
      default: return 'rgba(255,255,255,0.6)'
    }
  }

  const getTagColor = (tag: string) => {
    switch(tag) {
      case 'feature': return 'var(--br-hot-pink)'
      case 'bug': return 'var(--br-electric-magenta)'
      case 'ui': return 'var(--br-cyber-blue)'
      case 'docs': return 'var(--br-vivid-purple)'
      case 'security': return 'var(--br-warm-orange)'
      case 'infra': return 'var(--br-sunrise-orange)'
      case 'tech-debt': return 'rgba(255,255,255,0.6)'
      case 'maintenance': return 'rgba(255,255,255,0.6)'
      default: return 'rgba(255,255,255,0.6)'
    }
  }

  return (
    <main className="min-h-screen bg-[var(--br-deep-black)] text-white">
      
      {/* Header */}
      <header className="border-b border-[var(--br-charcoal)] bg-[var(--br-deep-black)] sticky top-0 z-50">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">Kanban Board</h1>
            <PulsingDot />
            <span className="text-sm br-text-muted">15 tasks • 3 in progress</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-[var(--br-charcoal)] border border-[rgba(255,255,255,0.15)] hover:border-white transition-all">
              👤 Filter by User
            </button>
            <button className="px-4 py-2 bg-[var(--br-charcoal)] border border-[rgba(255,255,255,0.15)] hover:border-white transition-all">
              🏷️ Filter by Tag
            </button>
            <button className="px-4 py-2 bg-white text-black font-bold hover:bg-[rgba(255,255,255,0.85)] transition-all">
              + New Task
            </button>
          </div>
        </div>
      </header>

      {/* Board */}
      <div className="p-6 overflow-x-auto">
        <div className="flex gap-6 min-w-max">
          {columns.map((column) => (
            <div key={column.id} className="w-80 flex-shrink-0">
              
              {/* Column Header */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: column.color }}
                  />
                  <h2 className="text-lg font-bold">{column.title}</h2>
                  <span className="text-sm br-text-muted">({column.cards.length})</span>
                </div>
              </div>

              {/* Cards */}
              <div className="space-y-3">
                {column.cards.map((card) => (
                  <div 
                    key={card.id}
                    className="bg-[var(--br-charcoal)] border border-[var(--br-charcoal)] p-4 hover:border-white transition-all cursor-move"
                    draggable
                  >
                    {/* Card Header */}
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-sm flex-1">{card.title}</h3>
                      <span 
                        className="text-xs px-2 py-1 rounded font-bold ml-2"
                        style={{ 
                          backgroundColor: getPriorityColor(card.priority),
                          color: '#000'
                        }}
                      >
                        {card.priority.toUpperCase()}
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {card.tags.map((tag, i) => (
                        <span 
                          key={i}
                          className="text-xs px-2 py-1 rounded font-bold"
                          style={{ 
                            backgroundColor: getTagColor(tag) + '20',
                            color: getTagColor(tag),
                            border: `1px solid ${getTagColor(tag)}`
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between text-xs br-text-muted">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{card.assignee}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>💬 0</span>
                        <span>📎 0</span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Add Card Button */}
                <button className="w-full py-3 border-2 border-dashed border-[rgba(255,255,255,0.15)] hover:border-[#666] br-text-muted hover:text-white transition-all text-sm font-bold">
                  + Add Card
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Footer */}
      <div className="border-t border-[var(--br-charcoal)] bg-[var(--br-deep-black)] sticky bottom-0">
        <div className="px-6 py-4 flex items-center justify-between text-sm">
          <div className="flex gap-6 br-text-muted">
            <span>Total: 15 tasks</span>
            <span className="text-[var(--br-hot-pink)]">✓ Done: 3</span>
            <span className="text-[var(--br-warm-orange)]">⚡ In Progress: 2</span>
            <span className="text-[var(--br-cyber-blue)]">📋 To Do: 6</span>
            <span>🗂️ Backlog: 3</span>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-[var(--br-charcoal)] border border-[rgba(255,255,255,0.15)] hover:border-white transition-all">
              Export CSV
            </button>
            <button className="px-3 py-1 bg-[var(--br-charcoal)] border border-[rgba(255,255,255,0.15)] hover:border-white transition-all">
              Share Board
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
