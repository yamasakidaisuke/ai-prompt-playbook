import { expect, test, describe } from 'vitest'
import { categories, getAllKeywords, getCategoryById, getKeywordById } from '../prompts'

describe('prompts data', () => {
  test('カテゴリが10個存在する', () => {
    expect(categories).toHaveLength(10)
  })

  test('全カテゴリに必要なプロパティが存在する', () => {
    categories.forEach(category => {
      expect(category).toHaveProperty('id')
      expect(category).toHaveProperty('name')
      expect(category).toHaveProperty('description')
      expect(category).toHaveProperty('icon')
      expect(category).toHaveProperty('keywords')
      expect(Array.isArray(category.keywords)).toBe(true)
    })
  })

  test('getAllKeywords が正しく動作する', () => {
    const keywords = getAllKeywords()
    expect(keywords.length).toBeGreaterThan(0)
    
    keywords.forEach(keyword => {
      expect(keyword).toHaveProperty('id')
      expect(keyword).toHaveProperty('title')
      expect(keyword).toHaveProperty('description')
      expect(keyword).toHaveProperty('example')
      expect(keyword).toHaveProperty('category')
    })
  })

  test('getCategoryById が正しく動作する', () => {
    const category = getCategoryById('format')
    expect(category).toBeDefined()
    expect(category?.name).toBe('出力フォーマット指定')
    
    const nonExistent = getCategoryById('non-existent')
    expect(nonExistent).toBeUndefined()
  })

  test('getKeywordById が正しく動作する', () => {
    const keyword = getKeywordById('format-1')
    expect(keyword).toBeDefined()
    expect(keyword?.title).toBe('コードブロック形式')
    
    const nonExistent = getKeywordById('non-existent')
    expect(nonExistent).toBeUndefined()
  })
}) 