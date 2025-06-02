import { Category } from '../data/prompts'

interface CategoryCardProps {
  category: Category
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <div className="card p-6 h-full cursor-pointer group">
      <div className="text-center">
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
          {category.icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {category.name}
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          {category.description}
        </p>
        <div className="text-xs text-gray-500">
          {category.keywords.length} 個のキーワード
        </div>
      </div>
    </div>
  )
}

export default CategoryCard 