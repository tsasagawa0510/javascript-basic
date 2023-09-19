// オブジェクトの宣言と値の代入を行う
const personalData = { name: '侍太郎', age: 36, gender: '男性' };

// オブジェクトの値を出力する
console.log(personalData);

// ageというキーの値を更新する
personalData.age = 37;

// 新しくプロパティ（キーと値）を追加する
personalData.address = '東京都';

// オブジェクトの値を出力
console.log(personalData);

personalData.address = '神奈川';

console.log(personalData);

personalData.address = 99;

console.log(personalData);

//genderというキーの値を出力する
console.log(personalData.gender); 