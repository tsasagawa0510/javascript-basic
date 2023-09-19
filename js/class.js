// クラスを定義する
class Product {
  // インスタンス化すると同時に処理を実行する
  constructor(name, price, category) {
    // console.log('敏感肌にも優しい100％天然由来のシャンプーです。');
    // this.name = 'シャンプー';
    // this.price = 500;
    // this.category = '生活雑貨';
    this.name = name;
    this.price = price;
    this.category = category;  
  }

  // メソッドを定義する
  description() {
    console.log('此の商品名は' + this.name + 'です。');
  }
}

// インスタンス化する
// const shampo = new Product;
const shampo = new Product('シャンプー', 500, '生活雑貨');
const coffee = new Product('コーヒー', 1500, '飲料');

// インスタンスの（オブジェクト）の値を出力する
console.log(shampo);
console.log(coffee);

// メソッドを呼び出す
shampo.description();

// 通常のオブジェクトにメソッドを定義する
const user = {
  name: '侍太郎',
  age: 36,
  gender: '男性',
  greet: () => {
    console.log('よろしくお願いします');
  }
}

// メソッドを呼び出す
user.greet();