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
        title: 'ステップバイステップ',
        description: '手順を段階的に分解して説明',
        example: '実装手順をステップバイステップで説明してください。'
      },
      {
        id: 'format-2',
        category: 'format',
        title: 'コードブロック形式',
        description: 'コードを読みやすい形式で出力',
        example: '出力はコードブロック形式でお願いします。'
      },
      {
        id: 'format-3',
        category: 'format',
        title: '表形式で比較',
        description: '機能や仕様を表形式で整理',
        example: '技術選択肢を表形式で比較してください。'
      },
      {
        id: 'format-4',
        category: 'format',
        title: 'チェックリスト',
        description: '実行項目をチェックリストで提示',
        example: 'デプロイ前チェックリストを作成してください。'
      },
      {
        id: 'format-5',
        category: 'format',
        title: '箇条書き',
        description: '要点を箇条書きで整理',
        example: '成功要因を箇条書きで 5 点挙げてください。'
      },
      {
        id: 'format-6',
        category: 'format',
        title: 'JSON 形式',
        description: 'JSON配列形式での出力',
        example: 'レスポンスを JSON 配列で返してください。'
      },
      {
        id: 'format-7',
        category: 'format',
        title: 'YAML 形式',
        description: '構造化されたYAML形式での出力',
        example: '設定ファイルを YAML 形式で出力してください。'
      },
      {
        id: 'format-8',
        category: 'format',
        title: 'Markdown テーブル',
        description: '比較表をMarkdownテーブルで表示',
        example: '機能比較を Markdown テーブルで示してください。'
      },
      {
        id: 'format-9',
        category: 'format',
        title: 'フローチャート形式',
        description: '処理の流れを図式化',
        example: 'ユーザー認証フローをフローチャート形式で説明してください。'
      },
      {
        id: 'format-10',
        category: 'format',
        title: '優先順位付き',
        description: '重要度順に並べて提示',
        example: 'セキュリティ対策を優先順位付きで示してください。'
      },
      {
        id: 'format-11',
        category: 'format',
        title: 'Before/After形式',
        description: '改善前後の対比を明確化',
        example: 'リファクタリングをBefore/After形式で示してください。'
      },
      {
        id: 'format-12',
        category: 'format',
        title: 'コマンド一覧',
        description: '実行コマンドを一覧化',
        example: 'Git操作を実行コマンド一覧で提示してください。'
      },
      {
        id: 'format-13',
        category: 'format',
        title: 'FAQ形式',
        description: 'よくある質問と回答で整理',
        example: 'Docker導入時の課題をFAQ形式で説明してください。'
      },
      {
        id: 'format-14',
        category: 'format',
        title: 'サンプル付き',
        description: '実際のコード例と併せて説明',
        example: 'APIの使い方をサンプル付きで解説してください。'
      },
      {
        id: 'format-15',
        category: 'format',
        title: 'ツリー構造',
        description: '階層関係をツリー形式で表示',
        example: 'ディレクトリ構成をツリー構造で示してください。'
      },
      {
        id: 'format-16',
        category: 'format',
        title: 'テンプレート形式',
        description: '再利用可能なテンプレートで提示',
        example: 'PR説明文をテンプレート形式で作成してください。'
      },
      {
        id: 'format-17',
        category: 'format',
        title: '時系列順',
        description: '発生順序に沿って整理',
        example: 'バグ対応を時系列順で記録してください。'
      },
      {
        id: 'format-18',
        category: 'format',
        title: '数値データ付き',
        description: 'パフォーマンス数値と併せて提示',
        example: 'レスポンス改善結果を数値データ付きで報告してください。'
      },
      {
        id: 'format-19',
        category: 'format',
        title: 'カテゴリ別整理',
        description: '関連項目をカテゴリごとに分類',
        example: 'エラーをカテゴリ別整理で分類してください。'
      },
      {
        id: 'format-20',
        category: 'format',
        title: 'レベル別説明',
        description: '初級・中級・上級に分けて解説',
        example: 'Git操作をレベル別説明で教えてください。'
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
        title: 'パフォーマンス最適化',
        description: '実行速度とメモリ使用量の改善',
        example: 'このループ処理をパフォーマンス最適化してください。'
      },
      {
        id: 'code-2',
        category: 'code',
        title: 'コードレビュー',
        description: 'コードの可読性とパフォーマンスをチェック',
        example: '以下のコードを可読性とパフォーマンスの観点でレビューしてください。'
      },
      {
        id: 'code-3',
        category: 'code',
        title: 'リファクタリング',
        description: 'コード構造の改善と最適化',
        example: 'この関数をリファクタリングし、ネストを浅くしてください。'
      },
      {
        id: 'code-4',
        category: 'code',
        title: 'セキュリティ強化',
        description: '脆弱性対策とセキュアコーディング',
        example: 'SQLインジェクション対策を追加してください。'
      },
      {
        id: 'code-5',
        category: 'code',
        title: 'ベストプラクティス',
        description: '言語固有のベストプラクティスを適用',
        example: 'Python のベストプラクティスに従って例外処理を追加してください。'
      },
      {
        id: 'code-6',
        category: 'code',
        title: '型安全性向上',
        description: 'TypeScript型定義の強化',
        example: 'この関数に適切な型定義を追加してください。'
      },
      {
        id: 'code-7',
        category: 'code',
        title: '可読性向上',
        description: 'コードの理解しやすさを改善',
        example: '変数名と関数名を可読性向上のため改善してください。'
      },
      {
        id: 'code-8',
        category: 'code',
        title: 'メモリリーク対策',
        description: 'メモリ使用量の監視と最適化',
        example: 'メモリリークを防ぐためにコードを修正してください。'
      },
      {
        id: 'code-9',
        category: 'code',
        title: 'コメント付与',
        description: 'コードに適切なコメントを追加',
        example: '主要ロジックに日本語コメントを追加してください。'
      },
      {
        id: 'code-10',
        category: 'code',
        title: '関数分割',
        description: '大きな関数を小さな関数に分割',
        example: 'この関数を責任範囲ごとに分割してください。'
      },
      {
        id: 'code-11',
        category: 'code',
        title: 'DRY原則適用',
        description: '重複コードの排除と共通化',
        example: '重複処理をDRY原則に従って共通化してください。'
      },
      {
        id: 'code-12',
        category: 'code',
        title: '非同期処理最適化',
        description: 'async/awaitの効率的な使用',
        example: '非同期処理を最適化してレスポンス時間を改善してください。'
      },
      {
        id: 'code-13',
        category: 'code',
        title: 'ログ出力追加',
        description: 'デバッグと監視のためのログ実装',
        example: '適切なレベルでログ出力を追加してください。'
      },
      {
        id: 'code-14',
        category: 'code',
        title: 'API設計改善',
        description: 'RESTful APIの設計最適化',
        example: 'このAPIエンドポイントをRESTful設計に改善してください。'
      },
      {
        id: 'code-15',
        category: 'code',
        title: 'データベース最適化',
        description: 'クエリパフォーマンスの改善',
        example: 'SQLクエリを最適化してN+1問題を解決してください。'
      },
      {
        id: 'code-16',
        category: 'code',
        title: 'キャッシュ戦略',
        description: 'メモリキャッシュとCDNの活用',
        example: 'レスポンス速度向上のためキャッシュ戦略を実装してください。'
      },
      {
        id: 'code-17',
        category: 'code',
        title: 'コード自動生成',
        description: 'テンプレートからのコード生成',
        example: 'このモデルに対するCRUD操作を自動生成してください。'
      },
      {
        id: 'code-18',
        category: 'code',
        title: 'バージョン管理改善',
        description: 'Git履歴の整理とブランチ戦略',
        example: 'コミット履歴を整理してGitフローを改善してください。'
      },
      {
        id: 'code-19',
        category: 'code',
        title: 'アーキテクチャ改善',
        description: 'クリーンアーキテクチャの適用',
        example: 'このモジュールをクリーンアーキテクチャで再設計してください。'
      },
      {
        id: 'code-20',
        category: 'code',
        title: 'レガシーコード改善',
        description: '古いコードベースの現代化',
        example: 'レガシーコードを現代的なパターンで書き直してください。'
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
      },
      {
        id: 'error-5',
        category: 'error',
        title: 'グレースフルデグラデーション',
        description: '機能停止時の代替動作設計',
        example: 'API障害時のフォールバック処理を実装してください。'
      },
      {
        id: 'error-6',
        category: 'error',
        title: 'エラーログ詳細化',
        description: 'デバッグ情報を含む詳細ログ',
        example: 'エラー発生時のスタックトレースとコンテキストを記録してください。'
      },
      {
        id: 'error-7',
        category: 'error',
        title: 'ユーザーフレンドリーエラー',
        description: 'わかりやすいエラーメッセージ',
        example: 'ユーザーが理解しやすいエラーメッセージに変更してください。'
      },
      {
        id: 'error-8',
        category: 'error',
        title: 'サーキットブレーカー',
        description: '連鎖障害防止の仕組み',
        example: 'サービス間通信にサーキットブレーカーを実装してください。'
      },
      {
        id: 'error-9',
        category: 'error',
        title: 'タイムアウト処理',
        description: '処理時間制限とタイムアウト対応',
        example: 'HTTPリクエストにタイムアウト処理を追加してください。'
      },
      {
        id: 'error-10',
        category: 'error',
        title: 'デッドロック回避',
        description: 'データベースロック競合の回避',
        example: 'デッドロックを回避するトランザクション設計をしてください。'
      },
      {
        id: 'error-11',
        category: 'error',
        title: 'メモリ不足対策',
        description: 'OutOfMemoryエラーの予防と対処',
        example: '大量データ処理時のメモリ不足対策を実装してください。'
      },
      {
        id: 'error-12',
        category: 'error',
        title: '入力値サニタイズ',
        description: '悪意ある入力値の無害化',
        example: 'ユーザー入力を適切にサニタイズしてください。'
      },
      {
        id: 'error-13',
        category: 'error',
        title: 'セキュリティ例外',
        description: '認証・認可エラーの適切な処理',
        example: '不正アクセス時のセキュリティ例外処理を追加してください。'
      },
      {
        id: 'error-14',
        category: 'error',
        title: 'ロードバランサー対応',
        description: 'サーバー障害時の負荷分散',
        example: 'サーバー障害時の自動フェイルオーバーを実装してください。'
      },
      {
        id: 'error-15',
        category: 'error',
        title: 'エラー通知',
        description: '管理者への障害通知システム',
        example: '重要エラー発生時のSlack通知を実装してください。'
      },
      {
        id: 'error-16',
        category: 'error',
        title: 'データ整合性チェック',
        description: 'データ破損の検出と修復',
        example: 'データベース整合性チェックとロールバック処理を追加してください。'
      },
      {
        id: 'error-17',
        category: 'error',
        title: 'レート制限',
        description: 'API呼び出し数制限とスロットリング',
        example: 'APIレート制限を実装してDDoS攻撃を防いでください。'
      },
      {
        id: 'error-18',
        category: 'error',
        title: 'バックアップ戦略',
        description: '障害復旧のためのデータバックアップ',
        example: '自動バックアップと復旧手順を実装してください。'
      },
      {
        id: 'error-19',
        category: 'error',
        title: 'ヘルスチェック',
        description: 'システム状態の監視と異常検知',
        example: 'アプリケーションのヘルスチェックエンドポイントを作成してください。'
      },
      {
        id: 'error-20',
        category: 'error',
        title: '段階的ロールバック',
        description: 'デプロイ失敗時の安全な巻き戻し',
        example: 'デプロイ失敗時の段階的ロールバック戦略を設計してください。'
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
      },
      {
        id: 'analysis-5',
        category: 'analysis',
        title: '原因分析',
        description: '問題の根本原因を特定',
        example: 'パフォーマンス低下の原因を分析してください。'
      },
      {
        id: 'analysis-6',
        category: 'analysis',
        title: '影響範囲分析',
        description: '変更による影響を予測',
        example: 'このアーキテクチャ変更の影響範囲を分析してください。'
      },
      {
        id: 'analysis-7',
        category: 'analysis',
        title: 'トレードオフ分析',
        description: '選択肢の得失を明確化',
        example: 'キャッシュ導入のトレードオフを分析してください。'
      },
      {
        id: 'analysis-8',
        category: 'analysis',
        title: 'ボトルネック特定',
        description: 'システムの制約要因を識別',
        example: 'アプリケーションのボトルネックを特定してください。'
      },
      {
        id: 'analysis-9',
        category: 'analysis',
        title: 'データフロー分析',
        description: 'データの流れと変換過程を追跡',
        example: 'ユーザー登録のデータフローを分析してください。'
      },
      {
        id: 'analysis-10',
        category: 'analysis',
        title: '依存関係分析',
        description: 'モジュール間の依存を可視化',
        example: 'このコードベースの依存関係を分析してください。'
      },
      {
        id: 'analysis-11',
        category: 'analysis',
        title: 'パターン抽出',
        description: '共通パターンとアンチパターンの識別',
        example: 'コードからデザインパターンを抽出してください。'
      },
      {
        id: 'analysis-12',
        category: 'analysis',
        title: 'メトリクス分析',
        description: 'パフォーマンス指標の解析',
        example: 'レスポンス時間のメトリクスを分析してください。'
      },
      {
        id: 'analysis-13',
        category: 'analysis',
        title: 'リスク評価',
        description: '技術的リスクの評価と対策',
        example: 'クラウド移行のリスクを評価してください。'
      },
      {
        id: 'analysis-14',
        category: 'analysis',
        title: '構造化分解',
        description: '複雑な問題を構造的に分解',
        example: 'モノリス分割を構造化分解で設計してください。'
      },
      {
        id: 'analysis-15',
        category: 'analysis',
        title: 'テストケース抽出',
        description: '要件からテストケースを導出',
        example: 'この仕様からテストケースを抽出してください。'
      },
      {
        id: 'analysis-16',
        category: 'analysis',
        title: 'シーケンス分析',
        description: '処理の時系列と順序関係を解析',
        example: 'API呼び出しのシーケンスを分析してください。'
      },
      {
        id: 'analysis-17',
        category: 'analysis',
        title: 'コスト分析',
        description: '開発・運用コストの算出',
        example: 'クラウドリソースのコスト分析をしてください。'
      },
      {
        id: 'analysis-18',
        category: 'analysis',
        title: '技術スタック分析',
        description: '使用技術の適合性評価',
        example: '現在の技術スタックを分析して改善点を挙げてください。'
      },
      {
        id: 'analysis-19',
        category: 'analysis',
        title: 'ユーザビリティ分析',
        description: 'UI/UXの使いやすさ評価',
        example: 'この画面のユーザビリティを分析してください。'
      },
      {
        id: 'analysis-20',
        category: 'analysis',
        title: 'セキュリティ分析',
        description: 'セキュリティホールと対策の分析',
        example: 'このAPIのセキュリティリスクを分析してください。'
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
        title: '初心者向け',
        description: '専門用語を避けた分かりやすい説明',
        example: '初心者向けにDockerの概要を説明してください。'
      },
      {
        id: 'style-2',
        category: 'style',
        title: '技術者向け',
        description: '専門的な技術解説',
        example: '技術者向けに詳細なネットワーク解説をお願いします。'
      },
      {
        id: 'style-3',
        category: 'style',
        title: 'フォーマル',
        description: '正式なビジネス文書スタイル',
        example: 'レポートをフォーマルな文体で作成してください。'
      },
      {
        id: 'style-4',
        category: 'style',
        title: 'カジュアル',
        description: '親しみやすい口調で説明',
        example: 'カジュアルな口調で解説してください。'
      },
      {
        id: 'style-5',
        category: 'style',
        title: '箇条書き中心',
        description: '要点を整理して簡潔に表現',
        example: '要点を箇条書き中心でまとめてください。'
      },
      {
        id: 'style-6',
        category: 'style',
        title: '実務重視',
        description: '実際の開発現場で使える形式',
        example: '実務重視でプロジェクト管理手法を説明してください。'
      },
      {
        id: 'style-7',
        category: 'style',
        title: '教育的',
        description: '学習効果を重視した段階的説明',
        example: '教育的にReactの基礎から応用まで説明してください。'
      },
      {
        id: 'style-8',
        category: 'style',
        title: '問題解決志向',
        description: '課題解決に焦点を当てた説明',
        example: '問題解決志向でパフォーマンス改善策を提示してください。'
      },
      {
        id: 'style-9',
        category: 'style',
        title: 'コード重視',
        description: 'サンプルコードを中心とした説明',
        example: 'コード重視でAPI実装方法を教えてください。'
      },
      {
        id: 'style-10',
        category: 'style',
        title: '図解付き',
        description: 'アスキーアートや図表を含む説明',
        example: 'データベース設計を図解付きで説明してください。'
      },
      {
        id: 'style-11',
        category: 'style',
        title: 'シンプル',
        description: '必要最小限の簡潔な説明',
        example: 'GitHubの使い方をシンプルに説明してください。'
      },
      {
        id: 'style-12',
        category: 'style',
        title: '詳細',
        description: '包括的で網羅的な説明',
        example: 'Kubernetesを詳細に解説してください。'
      },
      {
        id: 'style-13',
        category: 'style',
        title: 'ベストプラクティス重視',
        description: '推奨手法を中心とした説明',
        example: 'ベストプラクティス重視でセキュリティ対策を説明してください。'
      },
      {
        id: 'style-14',
        category: 'style',
        title: 'ハンズオン形式',
        description: '実際に手を動かしながら学べる形式',
        example: 'ハンズオン形式でAWS環境構築を教えてください。'
      },
      {
        id: 'style-15',
        category: 'style',
        title: 'トラブルシューティング重視',
        description: '問題発生時の対処法を含む説明',
        example: 'トラブルシューティング重視でCI/CD設定を説明してください。'
      },
      {
        id: 'style-16',
        category: 'style',
        title: 'メンター風',
        description: '経験豊富な先輩のアドバイス風',
        example: 'メンター風にキャリア形成のアドバイスをください。'
      },
      {
        id: 'style-17',
        category: 'style',
        title: 'チュートリアル形式',
        description: '段階的な学習コンテンツとして構成',
        example: 'チュートリアル形式でReact開発環境構築を説明してください。'
      },
      {
        id: 'style-18',
        category: 'style',
        title: 'レビュー観点',
        description: 'コードレビューの視点での説明',
        example: 'レビュー観点でプルリクエストの書き方を説明してください。'
      },
      {
        id: 'style-19',
        category: 'style',
        title: '最新技術重視',
        description: '最新のトレンドと技術を含む説明',
        example: '最新技術重視でフロントエンド開発手法を説明してください。'
      },
      {
        id: 'style-20',
        category: 'style',
        title: '保守性重視',
        description: '長期運用を考慮した説明',
        example: '保守性重視でアーキテクチャ設計を説明してください。'
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
      },
      {
        id: 'constraint-4',
        category: 'constraint',
        title: '技術スタック指定',
        description: '使用技術を限定した解説',
        example: 'Node.js + Express限定でAPI設計を説明してください。'
      },
      {
        id: 'constraint-5',
        category: 'constraint',
        title: '予算制約考慮',
        description: 'コスト上限を考慮した提案',
        example: '月額1万円以内でクラウド構成を提案してください。'
      },
      {
        id: 'constraint-6',
        category: 'constraint',
        title: '期間限定',
        description: '開発期間の制約を考慮',
        example: '2週間以内で実装できる機能に限定してください。'
      },
      {
        id: 'constraint-7',
        category: 'constraint',
        title: 'リソース制約',
        description: 'サーバーリソースの制限を考慮',
        example: 'メモリ1GB制限でアプリケーション設計をしてください。'
      },
      {
        id: 'constraint-8',
        category: 'constraint',
        title: 'レガシー環境対応',
        description: '既存システムとの互換性を維持',
        example: 'IE11対応を維持してフロントエンドを改修してください。'
      },
      {
        id: 'constraint-9',
        category: 'constraint',
        title: 'セキュリティ要件',
        description: '特定のセキュリティ基準を満たす',
        example: 'GDPR準拠でユーザーデータ管理を設計してください。'
      },
      {
        id: 'constraint-10',
        category: 'constraint',
        title: 'パフォーマンス要件',
        description: '性能基準を満たす実装',
        example: 'レスポンス100ms以内でAPIを設計してください。'
      },
      {
        id: 'constraint-11',
        category: 'constraint',
        title: 'スキル制約',
        description: 'チームのスキルレベルを考慮',
        example: 'JavaScript初心者チーム向けに設計してください。'
      },
      {
        id: 'constraint-12',
        category: 'constraint',
        title: 'ライセンス制約',
        description: 'オープンソースライセンスのみ使用',
        example: 'MIT/Apache限定でライブラリ選定をしてください。'
      },
      {
        id: 'constraint-13',
        category: 'constraint',
        title: 'デバイス制約',
        description: '特定デバイスでの動作を保証',
        example: 'スマートフォン限定でUI設計をしてください。'
      },
      {
        id: 'constraint-14',
        category: 'constraint',
        title: 'ネットワーク制約',
        description: '低速回線での利用を考慮',
        example: '3G回線でも快適に動作するよう最適化してください。'
      },
      {
        id: 'constraint-15',
        category: 'constraint',
        title: 'データ量制限',
        description: '扱うデータサイズの上限設定',
        example: '1万件以下のデータに限定して処理を設計してください。'
      },
      {
        id: 'constraint-16',
        category: 'constraint',
        title: 'アクセシビリティ要件',
        description: 'WCAG準拠のアクセシブル設計',
        example: 'WCAG AA準拠でWebサイトを設計してください。'
      },
      {
        id: 'constraint-17',
        category: 'constraint',
        title: '多言語対応制約',
        description: '特定言語のみサポート',
        example: '日本語と英語のみサポートでUI設計をしてください。'
      },
      {
        id: 'constraint-18',
        category: 'constraint',
        title: 'API制限',
        description: '外部API呼び出し回数の制約',
        example: '外部API呼び出し100回/日以内で機能設計をしてください。'
      },
      {
        id: 'constraint-19',
        category: 'constraint',
        title: 'バージョン制約',
        description: '特定バージョンでの動作保証',
        example: 'PHP 7.4限定で実装してください。'
      },
      {
        id: 'constraint-20',
        category: 'constraint',
        title: 'オフライン対応',
        description: 'ネットワーク未接続時の動作保証',
        example: 'オフライン環境でも基本機能が動作するよう設計してください。'
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
        title: 'サンプルコード',
        description: '実装可能なコード例',
        example: 'Go で簡単な HTTP サーバーのサンプルコードを教えてください。'
      },
      {
        id: 'example-2',
        category: 'example',
        title: '具体例',
        description: 'セキュリティ対策の実例',
        example: 'SQL インジェクション対策の具体例を挙げてください。'
      },
      {
        id: 'example-3',
        category: 'example',
        title: '実際のプロジェクト例',
        description: '実プロジェクトでの適用事例',
        example: 'マイクロサービス化に成功した実際のプロジェクト例を教えてください。'
      },
      {
        id: 'example-4',
        category: 'example',
        title: '設定ファイル例',
        description: '実用的な設定ファイルサンプル',
        example: 'Docker Compose の設定ファイル例を示してください。'
      },
      {
        id: 'example-5',
        category: 'example',
        title: 'テストコード例',
        description: 'ユニットテストの実装例',
        example: 'Jest を使ったテストコード例を示してください。'
      },
      {
        id: 'example-6',
        category: 'example',
        title: 'データベーススキーマ例',
        description: '実用的なDB設計サンプル',
        example: 'ECサイトのデータベーススキーマ例を示してください。'
      },
      {
        id: 'example-7',
        category: 'example',
        title: 'API仕様例',
        description: 'RESTful APIの仕様サンプル',
        example: 'ユーザー管理 API の仕様例を OpenAPI 形式で示してください。'
      },
      {
        id: 'example-8',
        category: 'example',
        title: 'エラーハンドリング例',
        description: '適切な例外処理の実装例',
        example: 'Node.js でのエラーハンドリング例を示してください。'
      },
      {
        id: 'example-9',
        category: 'example',
        title: 'レスポンシブデザイン例',
        description: 'CSS Grid/Flexbox活用例',
        example: 'レスポンシブなカードレイアウトの CSS 例を示してください。'
      },
      {
        id: 'example-10',
        category: 'example',
        title: 'セキュリティ実装例',
        description: '認証・認可の実装サンプル',
        example: 'JWT を使った認証システムの実装例を示してください。'
      },
      {
        id: 'example-11',
        category: 'example',
        title: 'パフォーマンス最適化例',
        description: '実際の最適化施策事例',
        example: 'React アプリの表示速度改善例を示してください。'
      },
      {
        id: 'example-12',
        category: 'example',
        title: 'CI/CD パイプライン例',
        description: '自動デプロイの設定例',
        example: 'GitHub Actions を使った CI/CD パイプライン例を示してください。'
      },
      {
        id: 'example-13',
        category: 'example',
        title: 'モニタリング設定例',
        description: 'システム監視の設定サンプル',
        example: 'Prometheus + Grafana の設定例を示してください。'
      },
      {
        id: 'example-14',
        category: 'example',
        title: 'ログ設計例',
        description: '構造化ログの実装例',
        example: 'JSON 形式の構造化ログ出力例を示してください。'
      },
      {
        id: 'example-15',
        category: 'example',
        title: 'キャッシュ実装例',
        description: 'Redis活用のサンプルコード',
        example: 'Redis を使ったキャッシュ実装例を示してください。'
      },
      {
        id: 'example-16',
        category: 'example',
        title: 'バッチ処理例',
        description: '定期実行処理の実装サンプル',
        example: 'cron + Python でのバッチ処理例を示してください。'
      },
      {
        id: 'example-17',
        category: 'example',
        title: 'リアルタイム通信例',
        description: 'WebSocket実装のサンプル',
        example: 'Socket.io を使ったチャット機能の実装例を示してください。'
      },
      {
        id: 'example-18',
        category: 'example',
        title: '参考リンク',
        description: '公式ドキュメントと併せた説明',
        example: '公式ドキュメントのリンク付きで概要を説明してください。'
      },
      {
        id: 'example-19',
        category: 'example',
        title: 'コードレビュー例',
        description: '実際のレビューコメント事例',
        example: '効果的なコードレビューコメントの例を示してください。'
      },
      {
        id: 'example-20',
        category: 'example',
        title: 'リファクタリング例',
        description: 'Before/Afterでの改善事例',
        example: 'レガシーコードのリファクタリング例を Before/After で示してください。'
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
        title: 'パフォーマンス比較',
        description: '処理速度・メモリ使用量の比較',
        example: 'MySQL と PostgreSQL のパフォーマンスを比較してください。'
      },
      {
        id: 'comparison-3',
        category: 'comparison',
        title: 'コスト比較',
        description: '開発・運用コストの比較分析',
        example: 'AWS と Azure のコストを比較してください。'
      },
      {
        id: 'comparison-4',
        category: 'comparison',
        title: 'ランキング形式',
        description: '優先順位を明確にした提示',
        example: '最適化手法トップ 5 をランキング形式で示してください。'
      },
      {
        id: 'comparison-5',
        category: 'comparison',
        title: '学習コスト比較',
        description: '習得難易度と学習時間の比較',
        example: 'React と Vue の学習コストを比較してください。'
      },
      {
        id: 'comparison-6',
        category: 'comparison',
        title: 'スケーラビリティ比較',
        description: '拡張性と成長への対応力比較',
        example: 'モノリスとマイクロサービスのスケーラビリティを比較してください。'
      },
      {
        id: 'comparison-7',
        category: 'comparison',
        title: 'セキュリティ比較',
        description: 'セキュリティ面での優劣比較',
        example: 'JWT と Session の セキュリティを比較してください。'
      },
      {
        id: 'comparison-8',
        category: 'comparison',
        title: 'A と B を比較',
        description: '二つの選択肢を詳細比較',
        example: 'React Router と Vue Router を比較してください。'
      },
      {
        id: 'comparison-9',
        category: 'comparison',
        title: '機能比較表',
        description: '機能の有無を表形式で整理',
        example: 'クラウドストレージサービスの機能比較表を作成してください。'
      },
      {
        id: 'comparison-10',
        category: 'comparison',
        title: '導入事例比較',
        description: '実際の採用事例での比較',
        example: 'Netflix と Spotify の技術選択を比較してください。'
      },
      {
        id: 'comparison-11',
        category: 'comparison',
        title: 'エコシステム比較',
        description: '周辺ツールとの連携力比較',
        example: 'Java と .NET のエコシステムを比較してください。'
      },
      {
        id: 'comparison-12',
        category: 'comparison',
        title: '運用負荷比較',
        description: '運用・保守の作業量比較',
        example: 'Docker と VM の運用負荷を比較してください。'
      },
      {
        id: 'comparison-13',
        category: 'comparison',
        title: 'ライセンス比較',
        description: '使用条件と制約の比較',
        example: 'OSS ライセンスの種類と制約を比較してください。'
      },
      {
        id: 'comparison-14',
        category: 'comparison',
        title: 'アーキテクチャ比較',
        description: '設計思想とアプローチの比較',
        example: 'MVC と MVVM のアーキテクチャを比較してください。'
      },
      {
        id: 'comparison-15',
        category: 'comparison',
        title: 'データベース比較',
        description: 'RDB/NoSQL/NewSQLの特徴比較',
        example: 'MongoDB と PostgreSQL の使い分けを比較してください。'
      },
      {
        id: 'comparison-16',
        category: 'comparison',
        title: 'フレームワーク比較',
        description: '開発効率と柔軟性の比較',
        example: 'Spring Boot と Express の特徴を比較してください。'
      },
      {
        id: 'comparison-17',
        category: 'comparison',
        title: 'デプロイ手法比較',
        description: 'Blue-Green/Canary/Rolling deploymentの比較',
        example: 'デプロイ手法のリスクと効果を比較してください。'
      },
      {
        id: 'comparison-18',
        category: 'comparison',
        title: 'テスト手法比較',
        description: 'Unit/Integration/E2Eテストの比較',
        example: 'テストピラミッドの各手法を比較してください。'
      },
      {
        id: 'comparison-19',
        category: 'comparison',
        title: '開発手法比較',
        description: 'Agile/Waterfall/DevOpsの比較',
        example: 'アジャイルとウォーターフォールを比較してください。'
      },
      {
        id: 'comparison-20',
        category: 'comparison',
        title: '将来性比較',
        description: '技術の将来性とトレンド比較',
        example: 'Go と Rust の将来性を比較してください。'
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
      },
      {
        id: 'testing-4',
        category: 'testing',
        title: 'インテグレーションテスト',
        description: 'コンポーネント間の結合テスト',
        example: 'API とデータベースのインテグレーションテストを作成してください。'
      },
      {
        id: 'testing-5',
        category: 'testing',
        title: 'E2Eテスト',
        description: 'エンドツーエンドの動作テスト',
        example: 'Cypress を使った E2E テストシナリオを作成してください。'
      },
      {
        id: 'testing-6',
        category: 'testing',
        title: 'パフォーマンステスト',
        description: '負荷テストと性能測定',
        example: 'API の負荷テストとボトルネック特定をしてください。'
      },
      {
        id: 'testing-7',
        category: 'testing',
        title: 'セキュリティテスト',
        description: '脆弱性検査とペネトレーションテスト',
        example: 'SQL インジェクション の脆弱性テストを実行してください。'
      },
      {
        id: 'testing-8',
        category: 'testing',
        title: 'リグレッションテスト',
        description: '機能の後退防止テスト',
        example: 'リファクタリング後のリグレッションテストを設計してください。'
      },
      {
        id: 'testing-9',
        category: 'testing',
        title: 'テストデータ生成',
        description: 'ダミーデータとフィクスチャ作成',
        example: 'ユーザー管理テスト用のテストデータを生成してください。'
      },
      {
        id: 'testing-10',
        category: 'testing',
        title: 'コードカバレッジ',
        description: 'テスト網羅率の測定と改善',
        example: 'テストカバレッジを 80% まで向上させてください。'
      },
      {
        id: 'testing-11',
        category: 'testing',
        title: 'バグ再現',
        description: '報告されたバグの再現手順',
        example: 'この不具合を再現するテストケースを作成してください。'
      },
      {
        id: 'testing-12',
        category: 'testing',
        title: 'ログ解析',
        description: 'エラーログからの原因特定',
        example: 'このエラーログから根本原因を特定してください。'
      },
      {
        id: 'testing-13',
        category: 'testing',
        title: 'メモリリーク検出',
        description: 'メモリ使用量の監視と最適化',
        example: 'Node.js アプリのメモリリークを検出してください。'
      },
      {
        id: 'testing-14',
        category: 'testing',
        title: 'API テスト',
        description: 'RESTful API の動作検証',
        example: 'Postman を使った API テストスイートを作成してください。'
      },
      {
        id: 'testing-15',
        category: 'testing',
        title: 'データベーステスト',
        description: 'データの整合性とクエリ性能テスト',
        example: 'データベースの制約チェックとパフォーマンステストをしてください。'
      },
      {
        id: 'testing-16',
        category: 'testing',
        title: 'ブラウザ互換性テスト',
        description: '複数ブラウザでの動作確認',
        example: 'Chrome/Firefox/Safari での互換性テストを実行してください。'
      },
      {
        id: 'testing-17',
        category: 'testing',
        title: 'レスポンシブテスト',
        description: '様々な画面サイズでの表示確認',
        example: 'モバイル・タブレット・デスクトップでのレスポンシブテストをしてください。'
      },
      {
        id: 'testing-18',
        category: 'testing',
        title: 'アクセシビリティテスト',
        description: 'WCAG 準拠とスクリーンリーダー対応',
        example: 'アクセシビリティの自動テストとマニュアルチェックをしてください。'
      },
      {
        id: 'testing-19',
        category: 'testing',
        title: 'CI/CD テスト',
        description: '自動テストパイプラインの構築',
        example: 'GitHub Actions での自動テスト実行を設定してください。'
      },
      {
        id: 'testing-20',
        category: 'testing',
        title: 'プロファイリング',
        description: 'アプリケーション性能の詳細分析',
        example: 'CPU とメモリ使用量のプロファイリングを実行してください。'
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
      },
      {
        id: 'citation-3',
        category: 'citation',
        title: '公式ドキュメント参照',
        description: '公式文書へのリンクと抜粋',
        example: '公式ドキュメントの該当箇所を引用して説明してください。'
      },
      {
        id: 'citation-4',
        category: 'citation',
        title: 'ベンチマーク結果',
        description: '性能測定データに基づく説明',
        example: 'TechEmpower ベンチマーク結果を根拠に性能を比較してください。'
      },
      {
        id: 'citation-5',
        category: 'citation',
        title: '業界レポート引用',
        description: 'Stack Overflow Survey等の調査結果',
        example: 'Stack Overflow Developer Survey の結果を根拠に技術トレンドを説明してください。'
      },
      {
        id: 'citation-6',
        category: 'citation',
        title: 'セキュリティ勧告',
        description: 'CVE/CWE等のセキュリティ情報',
        example: 'CVE データベースを参照してセキュリティリスクを説明してください。'
      },
      {
        id: 'citation-7',
        category: 'citation',
        title: 'オープンソースライセンス',
        description: 'ライセンス条文の正確な引用',
        example: 'MIT ライセンスの条文を引用して使用条件を説明してください。'
      },
      {
        id: 'citation-8',
        category: 'citation',
        title: 'W3C 仕様',
        description: 'Web標準仕様の引用と解説',
        example: 'W3C HTML5 仕様を引用してセマンティック要素を説明してください。'
      },
      {
        id: 'citation-9',
        category: 'citation',
        title: 'パフォーマンス実測値',
        description: '実際の測定データに基づく説明',
        example: '実測したレスポンス時間を根拠に最適化効果を説明してください。'
      },
      {
        id: 'citation-10',
        category: 'citation',
        title: 'エラー事例',
        description: '実際のエラーケースと対処法',
        example: 'GitHub Issues の実例を参照してエラー対処法を説明してください。'
      },
      {
        id: 'citation-11',
        category: 'citation',
        title: '成功事例',
        description: '実プロジェクトでの採用事例',
        example: 'Netflix の技術ブログを引用してマイクロサービス化の効果を説明してください。'
      },
      {
        id: 'citation-12',
        category: 'citation',
        title: 'アカデミック論文',
        description: '学術論文からの引用と解説',
        example: 'ACM の論文を引用してアルゴリズムの計算量を説明してください。'
      },
      {
        id: 'citation-13',
        category: 'citation',
        title: 'ブラウザサポート情報',
        description: 'Can I Use等の互換性データ',
        example: 'Can I Use のデータを根拠にブラウザサポート状況を説明してください。'
      },
      {
        id: 'citation-14',
        category: 'citation',
        title: 'API 仕様書',
        description: '公式 API ドキュメントの引用',
        example: 'Google Maps API の公式仕様を引用して実装方法を説明してください。'
      },
      {
        id: 'citation-15',
        category: 'citation',
        title: 'コーディング規約',
        description: 'Google Style Guide等の標準規約',
        example: 'Google JavaScript Style Guide を根拠にコーディング規約を説明してください。'
      },
      {
        id: 'citation-16',
        category: 'citation',
        title: '統計データ',
        description: 'GitHub利用統計等の客観的データ',
        example: 'GitHub の言語統計を根拠にプログラミング言語の人気度を説明してください。'
      },
      {
        id: 'citation-17',
        category: 'citation',
        title: 'デザインパターン',
        description: 'GoFパターン等の確立された手法',
        example: 'Gang of Four のデザインパターンを引用して設計手法を説明してください。'
      },
      {
        id: 'citation-18',
        category: 'citation',
        title: 'クラウドベンダー公式情報',
        description: 'AWS/Azure/GCP の公式ドキュメント',
        example: 'AWS の公式ドキュメントを引用してサービス仕様を説明してください。'
      },
      {
        id: 'citation-19',
        category: 'citation',
        title: 'バージョン履歴',
        description: 'CHANGELOG やリリースノート',
        example: 'React のリリースノートを引用してバージョン間の違いを説明してください。'
      },
      {
        id: 'citation-20',
        category: 'citation',
        title: 'コミュニティ投票結果',
        description: 'npm trends等のコミュニティ選好データ',
        example: 'npm trends のデータを根拠にライブラリの人気度を比較してください。'
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