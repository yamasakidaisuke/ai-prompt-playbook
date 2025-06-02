import { render, screen } from '@testing-library/react'
import { expect, test, describe } from 'vitest'
import CategoryCard from '../CategoryCard'
import { Category } from '../../data/prompts'

const mockCategory: Category = {
  id: 'test',
  name: 'テストカテゴリ',
  description: 'テスト用の説明文',
  icon: '🧪',
  keywords: []
}

describe('CategoryCard', () => {
  test('カテゴリ情報が正しく表示される', () => {
    render(<CategoryCard category={mockCategory} />)
    
    expect(screen.getByText('テストカテゴリ')).toBeInTheDocument()
    expect(screen.getByText('テスト用の説明文')).toBeInTheDocument()
    expect(screen.getByText('🧪')).toBeInTheDocument()
    expect(screen.getByText('0 個のキーワード')).toBeInTheDocument()
  })

  test('カードがクリック可能である', () => {
    render(<CategoryCard category={mockCategory} />)
    
    const card = screen.getByText('テストカテゴリ').closest('.card')
    expect(card).toHaveClass('cursor-pointer')
  })
}) 