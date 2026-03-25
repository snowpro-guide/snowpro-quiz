// SnowPro Guide — 一元管理設定ファイル
// 更新方法: このファイルを編集してGitHubにpushするだけで全記事に反映されます
//
// 毎月の作業: couponCode の月部分を変更（例: 202603 → 202604）
// 不定期の作業: questionCount, statusLine を変更

const SP_CONFIG = {
  // Udemyコース情報
  courseUrl: "https://www.udemy.com/course/200snowpro-core/",
  couponCode: "SNOWPROGUIDE202603",
  
  // 問題数（266 → 300 に変わったらここを変更）
  questionCount: 266,
  
  // COF-C03対応状況（表示用テキスト）
  // 例: "COF-C02/C03両対応" → "COF-C03完全対応"
  statusLine: "COF-C02 / C03 両対応の模擬試験です。",
  
  // CTAボタンテキスト（必要に応じて変更）
  btnTextDefault: "Udemyで模擬試験を見る →",
  btnTextDetail: "模擬試験の詳細を見る →",
  btnTextStart: "Udemyで受講する →",
  
  // クーポン付きURL（自動生成）
  get fullUrl() {
    return `${this.courseUrl}?couponCode=${this.couponCode}`;
  },
  
  // h3タイトル（自動生成）
  get mainTitle() {
    return `SnowPro Core 日本語模擬試験（${this.questionCount}問・解説付き）`;
  }
};
