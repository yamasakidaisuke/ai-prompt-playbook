import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Copy, Check, ChevronLeft, ChevronRight } from 'lucide-react'
import { getKeywordById, getAllKeywords, getCategoryById } from '../data/prompts'

const KeywordDetailPage = () => {
  const { keywordId } = useParams<{ keywordId: string }>()
  const [copied, setCopied] = useState(false)
  
  const keyword = keywordId ? getKeywordById(keywordId) : null
  const category = keyword ? getCategoryById(keyword.category) : null
  
  // ナビゲーション用のキーワード取得
  const allKeywords = getAllKeywords()
  const currentIndex = allKeywords.findIndex(k => k.id === keywordId)
  const prevKeyword = currentIndex > 0 ? allKeywords[currentIndex - 1] : null
  const nextKeyword = currentIndex < allKeywords.length - 1 ? allKeywords[currentIndex + 1] : null

  const handleCopy = async () => {
    if (keyword?.example) {
      try {
        await navigator.clipboard.writeText(keyword.example)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (_err) {
        // コピーに失敗した場合はサイレントに処理
      }
    }
  }

  if (!keyword || !category) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          キーワードが見つかりません
        </h2>
        <Link to="/" className="btn-primary">
          ホームに戻る
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link
          to={`/category/${category.id}`}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-6"
        >
          <ArrowLeft size={20} />
          <span>{category.name} に戻る</span>
        </Link>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 mb-8"
      >
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">{category.icon}</div>
          <div className="text-sm text-gray-500 mb-2">{category.name}</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {keyword.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {keyword.description}
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            使用例
          </h2>
          <div className="bg-white rounded-lg p-4 border border-gray-200 relative">
            <p className="text-gray-800 leading-relaxed pr-12">
              {keyword.example}
            </p>
            <button
              onClick={handleCopy}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              title="コピー"
            >
              {copied ? <Check size={20} className="text-green-600" /> : <Copy size={20} />}
            </button>
          </div>
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-2 text-sm text-green-600"
            >
              ✓ クリップボードにコピーしました
            </motion.div>
          )}
        </div>

        <div className="text-center">
          <button
            onClick={handleCopy}
            className="btn-primary px-8 py-3 text-lg"
          >
            {copied ? (
              <>
                <Check size={20} className="inline mr-2" />
                コピー完了
              </>
            ) : (
              <>
                <Copy size={20} className="inline mr-2" />
                例文をコピー
              </>
            )}
          </button>
        </div>
      </motion.div>

      {/* ナビゲーション */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex justify-between items-center"
      >
        {prevKeyword ? (
          <Link
            to={`/keyword/${prevKeyword.id}`}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 p-3 rounded-lg hover:bg-gray-50"
          >
            <ChevronLeft size={20} />
            <div className="text-left">
              <div className="text-xs text-gray-500">前のキーワード</div>
              <div className="font-medium">{prevKeyword.title}</div>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextKeyword && (
          <Link
            to={`/keyword/${nextKeyword.id}`}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 p-3 rounded-lg hover:bg-gray-50"
          >
            <div className="text-right">
              <div className="text-xs text-gray-500">次のキーワード</div>
              <div className="font-medium">{nextKeyword.title}</div>
            </div>
            <ChevronRight size={20} />
          </Link>
        )}
      </motion.div>
    </div>
  )
}

export default KeywordDetailPage 