// outuput-btnというIDを持つHTML要素を取得し、定数に入れる
const btn = document.getElementById('output-btn');

// HTMl要素がクリックされたときにイベント処理を行う
btn.addEventListener('click', () => {
  console.log('クリックされました')
});

// add-btnというIDを持つHTML要素を取得しm定数に代入する
const addBtn = document.getElementById('add-btn');

// parent-listというIDを持つ要素を取得し、定数に入れる
const parentList = document.getElementById('parent-list');

addBtn.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = 'これはリスト要素です';
  parentList.appendChild(li);
});

// countーbtnというIDを持つHTML要素を取得し、定数に亜隠喩する
const countBtn = document.getElementById('count-btn');

// html要素がクリックされたときにイベント処理を実行する
countBtn.addEventListener('click', () => {
  // テキストボックスに入力された文字列を取得する
  const text = document.forms.textForm.textBox.value;

  // 取得した文字列の文字数を出力する
  console.log(text.length + '文字');
});

// area-btnというIDを持つHTML要素を取得し、定数に再入する
const areaBtn = document.getElementById('area-btn');

// HTML要素がクリックされたときにイベント処理を実行する
areaBtn.addEventListener('click', () => {
  // 選択されたラジオボタンの値絵お取得する
  const area = document.forms.areaForm.area.value;

  // 取得した値を出力する
  console.log(area);
});

// os-btnというIDを持つHTML要素を取得し、定数に代入する
const osBtn = document.getElementById('os-btn');

// HTML要素がクリックされたときにイベント処理を実行する
osBtn.addEventListener('click', () => {
  // すべてのチェックボックスを配列風のデータで取得する
  const items = document.forms.osForm.os;

  // 繰り返し処理でチェックボックスを1つずつ取り出し、もし選択されていれば出力する
  for(let i = 0; i < items.length; i++) {
    if (items[i].checked) {
      console.log(items[i].value);
    }
  }
});