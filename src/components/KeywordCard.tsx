import { PromptWord } from '../data/prompts'

interface KeywordCardProps {
  keyword: PromptWord
}

const KeywordCard = ({ keyword }: KeywordCardProps) => {
  return (
    <div className="card p-6 h-full cursor-pointer group hover:border-blue-200">
      <div className="flex flex-col h-full">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
          {keyword.title}
        </h3>
        <p className="text-sm text-gray-600 mb-4 flex-grow">
          {keyword.description}
        </p>
        <div className="bg-gray-50 rounded-lg p-3 mt-auto">
          <p className="text-xs text-gray-500 mb-1">使用例:</p>
          <p className="text-sm text-gray-700 line-clamp-2">
            {keyword.example}
          </p>
        </div>
      </div>
    </div>
  )
}

export default KeywordCard 