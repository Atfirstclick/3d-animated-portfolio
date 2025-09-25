import { describe, it, expect } from 'vitest'
import { items } from './data'

describe('Portfolio Data', () => {
  it('should have 3 portfolio items', () => {
    expect(items).toHaveLength(3)
  })

  it('should have required properties for each item', () => {
    items.forEach(item => {
      expect(item).toHaveProperty('id')
      expect(item).toHaveProperty('img')
      expect(item).toHaveProperty('title')
      expect(item).toHaveProperty('desc')
      expect(item).toHaveProperty('link')
    })
  })

  it('should have unique ids', () => {
    const ids = items.map(item => item.id)
    const uniqueIds = [...new Set(ids)]
    expect(ids).toHaveLength(uniqueIds.length)
  })

  it('should have valid image paths', () => {
    items.forEach(item => {
      expect(item.img).toMatch(/^\/.+\.(jpg|png|gif|webp)$/)
    })
  })

  it('should have non-empty titles and descriptions', () => {
    items.forEach(item => {
      expect(item.title).toBeTruthy()
      expect(item.desc).toBeTruthy()
      expect(typeof item.title).toBe('string')
      expect(typeof item.desc).toBe('string')
    })
  })

  it('should have valid links', () => {
    items.forEach(item => {
      expect(item.link).toBeTruthy()
      expect(typeof item.link).toBe('string')
      expect(item.link).toMatch(/^(\/|https?:\/\/)/)
    })
  })
})