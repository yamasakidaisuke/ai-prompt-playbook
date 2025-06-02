import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { categories } from '../data/prompts'
import CategoryCard from '../components/CategoryCard'
import Header from '../components/Header'

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Prompt Navigator
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          AIとの対話をより効率的に。中級プログラマーのための
          <br />
          プロンプト指示ワード集
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.1 * index,
              duration: 0.3,
            }}
          >
            <Link to={`/category/${category.id}`}>
              <CategoryCard category={category} />
            </Link>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-16 text-center text-gray-500"
      >
        <p>
          💡 カテゴリを選択して、AIプロンプトに最適な指示ワードを見つけましょう
        </p>
      </motion.div>
    </div>
  )
}

export default HomePage 