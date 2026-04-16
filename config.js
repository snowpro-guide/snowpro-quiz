// SnowPro Guide — 一元管理設定ファイル
// 更新方法: このファイルを編集してGitHubにpushするだけで全記事に反映されます
//
// 毎月の作業: couponCode の月部分を変更（例: 202604 → 202605）
// 不定期の作業: questionCount, statusLine を変更

const SP_CONFIG = {
  // Udemyコース情報
  courseUrl: "https://www.udemy.com/course/200snowpro-core/",
  couponCode: "SNOWPROGUIDE202604",

  // 問題数（266 → 300 に変わったらここを変更）
  questionCount: 300,

  // COF-C03対応状況（表示用テキスト）
  statusLine: "COF-C02 / C03 両対応の模擬試験です。",

  // CTAボタンテキスト
  btnTextDefault: "Udemyで模擬試験を見る →",
  btnTextDetail: "模擬試験の詳細を見る →",
  btnTextStart: "Udemyで受講する →",
  btnTextAfterQuiz: "本番形式で300問に挑戦する →",
  btnTextStruggling: "合格までの最短ルートを見る →",

  // 講座の差別化ポイント（cta.htmlで表示）
  // 3点に絞ることで視覚的なスキャンしやすさを維持
  benefits: [
    "日本語解説・日本語ドキュメントリンク付き",
    "COF-C02 / COF-C03 両バージョンに対応"
  ],

  // 記事位置別のプリセット文言
  // cta.html で ?type=xxx を指定すると自動で使われる
  presets: {
    default: {
      label: "日本語の模擬試験",
      desc: "COF-C02 / C03 両対応の模擬試験です。本番と同じ出題形式で、全問に日本語の詳細解説付き。"
    },
    afterQuiz: {
      label: "もっと解きたい方へ",
      desc: "手応えを感じた方は、本番形式300問で仕上げを。Domain別の収録で、苦手分野を集中的に克服できます。"
    },
    struggling: {
      label: "再受験・苦手克服の方へ",
      desc: "一度落ちた方、難しいと感じている方のための300問。本番で問われるポイントに絞り、日本語で解説します。"
    },
    intro: {
      label: "受験を検討中の方へ",
      desc: "本番形式300問で合格ラインの感覚を掴めます。"
    }
  },

  // クーポン付きURL（自動生成）
  get fullUrl() {
    return `${this.courseUrl}?couponCode=${this.couponCode}`;
  },

  // h3タイトル（自動生成）
  get mainTitle() {
    return `SnowPro Core 日本語模擬試験（${this.questionCount}問・解説付き）`;
  }
};
