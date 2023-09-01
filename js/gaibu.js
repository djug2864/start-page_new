//ページのドメインを取得
const domain = document.domain;
//取得したドメインを検証対象に指定
const regexp = new RegExp(domain);

//特定の要素内に存在するa要素が対象
const target = document.getElementById('app');
const elements = target.getElementsByTagName('a');

//ページ内に存在する全てのa要素が対象
//const elements = document.getElementsByTagName('a');

for(let element of elements){
    //a要素のhref（リンク）を取得
    let href = element.getAttribute('href');
    
    //a要素のhref（リンク）にドメインが含まれていなければ
    if(!regexp.test(href)){
        //a要素にtarget="_blank"を追加する
        element.setAttribute('target', '_blank');
        //a要素にrel="noopener noreferrer"を追加する
        element.setAttribute('rel', 'noopener noreferrer');
    }
}
