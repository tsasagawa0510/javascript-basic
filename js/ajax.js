// 東京都の天気予報データを取得するためのURL
// const url = 'https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json';

// ダミーデータを送信するためのURL
const url = 'https://jsonplaceholder.typicode.com/posts';

// イベント処理の対象となるボタン
const button = document.getElementById('ajax-btn');

// ボタンクリック時にイベント処理を実行する
button.addEventListener('click', () => {

  // 送信するダミーデータ
  const dummyData = { name: '侍太郎', age: 30 };


  // 気象庁のwebサイトにリクエストを送信し、天気予報データを取得する
  // fetch(url)

  // ダミーサーバーにAjaxリクエストを送信する
  fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json' },
    body: JSON.stringify(dummyData)
  })

  // サーバーからAjaxレスポンスを受け取ったときの処理
  .then((response) => response.json())
  .then((data) => {
    // JSONでーたから「東京都の明日の天気」を抽出して表示
    // const weather = data[0].timeSeries[0].areas[0].weathers[1];
    // console.log('東京都の明日の天気:' + weather);

    // JSONデータから受け取ったダミーデータを見やすい形に表示
    console.log('サーバーからの応答: \n' + JSON.stringify(data, null, 2) );
  });
});