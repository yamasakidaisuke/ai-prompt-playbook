export interface PromptWord {
  id: string
  category: string
  title: string
  description: string
  example: string
}

export interface Category {
  id: string
  name: string
  description: string
  icon: string
  keywords: PromptWord[]
}

export const categories: Category[] = [
  {
    id: 'format',
    name: '出力フォーマット指定',
    description: '出力形式を明確に指定',
    icon: '📝',
    keywords: [
      {
        id: 'format-1',
        category: 'format',
        title: 'コードブロック形式',
        description: 'コードを読みやすい形式で出力',
        example: '出力はコードブロック形式でお願いします。'
      },
      {
        id: 'format-2',
        category: 'format',
        title: 'YAML 形式',
        description: '構造化されたYAML形式での出力',
        example: '以下を YAML 形式で出力してください。'
      },
      {
        id: 'format-3',
        category: 'format',
        title: 'JSON 形式',
        description: 'JSON配列形式での出力',
        example: 'レスポンスを JSON 配列で返してください。'
      },
      {
        id: 'format-4',
        category: 'format',
        title: 'Markdown テーブル',
        description: '比較表をMarkdownテーブルで表示',
        example: '機能比較を Markdown テーブルで示してください。'
      },
      {
        id: 'format-5',
        category: 'format',
        title: '箇条書き',
        description: '要点を箇条書きで整理',
        example: '成功要因を箇条書きで 5 点挙げてください。'
      }
    ]
  },
  {
    id: 'code',
    name: 'コード関連',
    description: 'コードの品質向上とベストプラクティス',
    icon: '💻',
    keywords: [
      {
        id: 'code-1',
        category: 'code',
        title: 'コードレビュー',
        description: 'コードの可読性とパフォーマンスをチェック',
        example: '以下のコードを可読性とパフォーマンスの観点でレビューしてください。'
      },
      {
        id: 'code-2',
        category: 'code',
        title: 'リファクタリング',
        description: 'コード構造の改善と最適化',
        example: 'この関数をリファクタリングし、ネストを浅くしてください。'
      },
      {
        id: 'code-3',
        category: 'code',
        title: 'ベストプラクティス',
        description: '言語固有のベストプラクティスを適用',
        example: 'Python のベストプラクティスに従って例外処理を追加してください。'
      },
      {
        id: 'code-4',
        category: 'code',
        title: 'コメント付与',
        description: 'コードに適切なコメントを追加',
        example: '主要ロジックに日本語コメントを追加してください。'
      }
    ]
  },
  {
    id: 'error',
    name: 'エラー処理・例外',
    description: '堅牢なエラー処理の実装',
    icon: '🛡️',
    keywords: [
      {
        id: 'error-1',
        category: 'error',
        title: 'エラーハンドリング',
        description: 'データベース接続エラーの適切な処理',
        example: 'DB 接続失敗時のエラーハンドリングを追加してください。'
      },
      {
        id: 'error-2',
        category: 'error',
        title: '例外処理',
        description: 'ファイル操作の例外処理を実装',
        example: 'ファイル読み込み時の例外処理を実装してください。'
      },
      {
        id: 'error-3',
        category: 'error',
        title: 'バリデーション',
        description: 'APIパラメータの検証機能',
        example: 'API パラメータのバリデーションを追加してください。'
      },
      {
        id: 'error-4',
        category: 'error',
        title: 'リトライ',
        description: 'ネットワークエラー時の再試行機能',
        example: 'ネットワークエラー時に最大 3 回まで再試行してください。'
      }
    ]
  },
  {
    id: 'analysis',
    name: '解析・要約・手順化',
    description: '情報の整理と構造化',
    icon: '📊',
    keywords: [
      {
        id: 'analysis-1',
        category: 'analysis',
        title: 'ステップバイステップ',
        description: '手順を段階的に分解して説明',
        example: '新規プロジェクト作成手順をステップバイステップで教えてください。'
      },
      {
        id: 'analysis-2',
        category: 'analysis',
        title: '要約',
        description: '長文の内容を簡潔にまとめる',
        example: '以下のドキュメントを 200 字以内で要約してください。'
      },
      {
        id: 'analysis-3',
        category: 'analysis',
        title: '詳細化',
        description: '概念を具体的に深掘り',
        example: '『パフォーマンス最適化』の具体策を詳細化してください。'
      },
      {
        id: 'analysis-4',
        category: 'analysis',
        title: '背景説明',
        description: '技術選択の理由と背景を解説',
        example: 'マイクロサービス化のメリットと背景を説明してください。'
      }
    ]
  },
  {
    id: 'style',
    name: 'スタイル・トーン指定',
    description: '文体と表現方法の調整',
    icon: '🎨',
    keywords: [
      {
        id: 'style-1',
        category: 'style',
        title: 'フォーマル',
        description: '正式なビジネス文書スタイル',
        example: 'レポートをフォーマルな文体で作成してください。'
      },
      {
        id: 'style-2',
        category: 'style',
        title: 'カジュアル',
        description: '親しみやすい口調で説明',
        example: 'カジュアルな口調で解説してください。'
      },
      {
        id: 'style-3',
        category: 'style',
        title: '箇条書き中心',
        description: '要点を整理して簡潔に表現',
        example: '要点を箇条書き中心でまとめてください。'
      },
      {
        id: 'style-4',
        category: 'style',
        title: '技術者向け',
        description: '専門的な技術解説',
        example: '技術者向けに詳細なネットワーク解説をお願いします。'
      }
    ]
  },
  {
    id: 'constraint',
    name: '制約・条件付与',
    description: '出力の範囲と条件を限定',
    icon: '⚙️',
    keywords: [
      {
        id: 'constraint-1',
        category: 'constraint',
        title: '文字数制限',
        description: '指定した文字数以内での出力',
        example: '300 文字以内で要約してください。'
      },
      {
        id: 'constraint-2',
        category: 'constraint',
        title: '時間制限',
        description: '読了時間を考慮した内容量',
        example: '5 分で読めるように記事を書いてください。'
      },
      {
        id: 'constraint-3',
        category: 'constraint',
        title: 'テーマ限定',
        description: '特定の観点に絞った説明',
        example: 'セキュリティ観点のみに絞って説明してください。'
      }
    ]
  },
  {
    id: 'example',
    name: '例示・参考情報要求',
    description: '具体例とサンプルコードの提供',
    icon: '📚',
    keywords: [
      {
        id: 'example-1',
        category: 'example',
        title: '具体例',
        description: 'セキュリティ対策の実例',
        example: 'SQL インジェクション対策の具体例を挙げてください。'
      },
      {
        id: 'example-2',
        category: 'example',
        title: 'サンプルコード',
        description: '実装可能なコード例',
        example: 'Go で簡単な HTTP サーバーのサンプルコードを教えてください。'
      },
      {
        id: 'example-3',
        category: 'example',
        title: '参考リンク',
        description: '公式ドキュメントと併せた説明',
        example: '公式ドキュメントのリンク付きで概要を説明してください。'
      }
    ]
  },
  {
    id: 'comparison',
    name: '比較・選定',
    description: '技術選択の判断材料を提供',
    icon: '⚖️',
    keywords: [
      {
        id: 'comparison-1',
        category: 'comparison',
        title: 'メリット・デメリット',
        description: '技術選択の長所と短所を比較',
        example: 'REST API と gRPC のメリット・デメリットを比較してください。'
      },
      {
        id: 'comparison-2',
        category: 'comparison',
        title: 'ランキング形式',
        description: '優先順位を明確にした提示',
        example: '最適化手法トップ 5 をランキング形式で示してください。'
      },
      {
        id: 'comparison-3',
        category: 'comparison',
        title: 'A と B を比較',
        description: '二つの選択肢を詳細比較',
        example: 'React Router と Vue Router を比較してください。'
      }
    ]
  },
  {
    id: 'testing',
    name: 'テスト・デバッグ',
    description: 'コード品質とデバッグ支援',
    icon: '🔧',
    keywords: [
      {
        id: 'testing-1',
        category: 'testing',
        title: 'ユニットテスト作成',
        description: '関数のテストコードを生成',
        example: 'この関数に対する pytest のユニットテストを作成してください。'
      },
      {
        id: 'testing-2',
        category: 'testing',
        title: 'デバッグ手順',
        description: '問題の特定と解決手順',
        example: 'メモリリーク疑い時のデバッグ手順を説明してください。'
      },
      {
        id: 'testing-3',
        category: 'testing',
        title: 'モック',
        description: '外部依存をモック化したテスト',
        example: 'HTTP リクエストをモック化したテストを書いてください。'
      }
    ]
  },
  {
    id: 'citation',
    name: '根拠・引用',
    description: '信頼性の高い情報源の提示',
    icon: '📖',
    keywords: [
      {
        id: 'citation-1',
        category: 'citation',
        title: '根拠を示して',
        description: '論文や研究結果を根拠とした説明',
        example: '効果を証明する論文を根拠にキャッシュ戦略を説明してください。'
      },
      {
        id: 'citation-2',
        category: 'citation',
        title: '出典明記',
        description: '公式文書の引用と出典明記',
        example: 'RFC ドキュメント番号を引用してください。'
      }
    ]
  }
]

export const getAllKeywords = (): PromptWord[] => {
  return categories.flatMap(category => category.keywords)
}

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id)
}

export const getKeywordById = (id: string): PromptWord | undefined => {
  return getAllKeywords().find(keyword => keyword.id === id)
} 