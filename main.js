// .questionクラスを持つ要素を全て取得する
const questions = document.querySelectorAll(".question");

//.questionクラスを持つ要素一つ一つに繰り返し処理を実行する　forEach()メソッド
questions.forEach((item) => {
  //クリックされたら以下の処理を実行 addEventLintner()メソッド
  item.addEventListener("click", () => {
    //itemに入っている要素の次の兄弟要素（.answer）を取得する
    // nextElementSiblingプロパティ
    let answer = item.nextElementSibling;
    //answerの要素に.showクラスを付け外しする
    answer.classList.toggle("show");
  });
});
