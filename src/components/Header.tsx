import { Link, useLocation } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const Header = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <header className="mb-8">
      <div className="flex items-center justify-between">
        {!isHome && (
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span>カテゴリ一覧に戻る</span>
          </Link>
        )}
        
        {isHome && (
          <div className="flex-1" />
        )}
        
        <div className="text-sm text-gray-500">
          v0.9 | AI Prompt Helper
        </div>
      </div>
    </header>
  )
}

export default Header 