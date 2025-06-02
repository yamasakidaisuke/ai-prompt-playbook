import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { getCategoryById } from '../data/prompts'
import KeywordCard from '../components/KeywordCard'

const KeywordListPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>()
  const category = categoryId ? getCategoryById(categoryId) : null

  if (!category) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          カテゴリが見つかりません
        </h2>
        <Link to="/" className="btn-primary">
          ホームに戻る
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-6"
        >
          <ArrowLeft size={20} />
          <span>カテゴリ一覧に戻る</span>
        </Link>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="text-6xl mb-4">{category.icon}</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {category.name}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {category.description}
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {category.keywords.map((keyword, index) => (
          <motion.div
            key={keyword.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.1 * index,
              duration: 0.3,
            }}
          >
            <Link to={`/keyword/${keyword.id}`}>
              <KeywordCard keyword={keyword} />
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-16 text-center"
      >
        <p className="text-gray-500">
          💡 キーワードをクリックして、詳細説明と使用例を確認しましょう
        </p>
      </motion.div>
    </div>
  )
}

export default KeywordListPage 