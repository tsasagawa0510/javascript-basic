// 変数numに0から4までのランダムな整数を代入する
let num = Math.floor(Math.random() * 5);

// 変数numの最初に値を出力する
console.log(num);

// 変数numの値が０になる間、変数numの値を出力し続ける
while (num !== 0) {
  // 変数numの値が０以外である間、変数numの値を出力し続ける
  num = Math.floor(Math.random() * 5);

  // 次の条件式で比較される、変数numの現在の値を出力する
  console.log('現在の値は' + num + 'です');
}

// 1から10までの値を順番に出力する
for (let i = 1; i <= 10; i++) {
  console.log(i);
}