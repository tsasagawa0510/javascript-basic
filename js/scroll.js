// back-btnのIDを持つHTML要素を取得し、定数に代入する
const backBtn = document.getElementById('back-btn');

console.log(backBtn);

window.addEventListener('scroll', () => {

  // 画面のスクロール量をpx数で取得する
  const scrollValue = document.scrollingElement.scrollTop;
  
  // 画面のスクロール量が300px以上であれば、「TOPに戻る」ボタンを表示する
  if (scrollValue >= 300) {
    backBtn.style.display = 'inline';
    console.log(scrollValue);
  }
  // 画面のスクロール量がそれ以外300px未満であれば、「TOPに戻る」ボタンを非表示する
  else {
    backBtn.style.display = 'none';
  }
});

