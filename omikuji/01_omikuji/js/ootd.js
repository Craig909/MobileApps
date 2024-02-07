"use strict";
window. addEventListener("DOMContentLoaded",
function() {
    // ヘッダーのテキストエフェクト
    $("header").textillate({
    loop: false, // ループのオンオフ
    minDisplayTime: 2000, // テキストが置き換えられるまでの表示時間
    initialDelay: 2000, // 遅延時間
    autoStart: true, // アニメーションを自動的にスタート
    in: { // フェードインのエフェクトの詳細設定
    effect: "fadeInLeftBig", // エフェクトの名前(animate.css参照)
    delayScale: 1.5, // 遅延時間の指数
    delay: 50, // 文字ごとの遅延時間
    sync: false, // trueはアニメーションをすべての文字に同時に適用
    shuffle: true // trueは文字を順番にではなく、ランダムに
        }
    });
    // おみくじボタン(id="btn1") ボヤァと表示させる
    $(function(){
    ScrollReveal().reveal("#btn1", { duration: 9000 });
    });
    this.setTimeout(
        function(){
    let popMessage = "いらっしゃい!服を決めてって!"
    window.alert(popMessage);
        },"5000"
    );
        }, false
    );

const btn1=document.getElementById("btn1");
btn1.addEventListener("click",
function(){
    // var n=Math.floor(Math.random()*5);

    // switch(n){
    //     case 0:
    //         btn1.textContent="シャツ";
    //         btn1.style.color="grey";
            
    //         break;
    //     case 1:
    //         btn1.textContent="パーカー";
    //         btn1.style.color="yellow";
    //         break;
    //     case 2:
    //         btn1.textContent="コート";
    //         btn1.style.color="green";
    //         break;
    //     case 3:
    //         btn1.textContent="ベスト";
    //         btn1.style.color="white";
    //         break;
    //     case 4:
    //         btn1.textContent="スカート";
    //         btn1.style.color="blue";
    //         break;
        // }
        btn1.style.transition="1s";
                let resultText=["シャツ","パーカー","コート","ベスト","スーツ"];
        let resultColor=["grey","blue","yellow","green","white"];
        let resultFontsize=["55px","50px","45px","40px","35px"];
        let resultImage=["img/shirt.png","img/hoodie.png","img/coat.png","img/vest.png","img/suits.png"];
        let n=Math.floor(Math.random()*resultText.length);
        btn1.textContent=resultText[n];
        btn1.style.color=resultColor[n];
        btn1.style.fontSize=resultFontsize[n];

    // snowfall stop
    $(document).snowfall("clear");
    // jQueryのsnowfall
    $(document).ready(function(){
    $(document).snowfall({
    maxSpeed : 3, // 最大速度
    minSpeed : 1, // 最小速度
    maxSize : 70, // 最大サイズ
    minSize : 20, // 最小サイズ
    image : resultImage[n],
    });
    });
    },
    false);
