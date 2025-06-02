import { Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import HomePage from './pages/HomePage'
import KeywordListPage from './pages/KeywordListPage'
import KeywordDetailPage from './pages/KeywordDetailPage'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="container mx-auto px-4 py-8"
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryId" element={<KeywordListPage />} />
          <Route path="/keyword/:keywordId" element={<KeywordDetailPage />} />
        </Routes>
      </motion.div>
    </div>
  )
}

export default App 