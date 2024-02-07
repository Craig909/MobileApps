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

let soundEndflag="0";

const btn1=document.getElementById("btn1");
const ootdText=document.getElementById("ootdText");
const ootdTextImage=document.getElementById("ootdTextImage");

btn1.addEventListener("click",
function(){
    
        if(soundEndflag ==="1"){
            soundControl("end","");
        }

        let resultText=["img/shirt.png","img/hoodie.png","img/coat.png","img/vest.png","img/suits.png",];
        let resultMaxSpeed=[10,10,8,5,5];
        let resultMaxSize=[30,30,30,40,30];
        // ootdText.style.transition="1s";
        let resultSound=["sound/ootd1.mp3","sound/ootd2.mp3","sound/ootd3.mp3","sound/ootd4.mp3","sound/ootd5.mp3",]
        // let resultText=["シャツ","パーカー","コート","ベスト","スーツ"];
        // let resultColor=["grey","blue","yellow","green","black"];
        // let resultFontsize=["90px","80px","70px","60px","50px"];
        let resultImage=["img/shirt.png","img/hoodie.png","img/coat.png","img/vest.png","img/suits.png"];
        
        let n=Math.floor(Math.random()*resultText.length);
        ootdTextImage.style.width = "280px"; // fukada-add
        ootdTextImage.style.height = "280px"; // fukada-add
        ootdTextImage.style.backgroundSize = "contain "; // fukada-add

        ootdTextImage.src=resultText[n]; // fukada-chg
        ootdTextImage.classList.add("ootdPaper");
        ootdTextImage.addEventListener("animationend",
        function(){
            ootdTextImage.classList.remove("ootdPaper");
        },false);

        // ootdText.textContent=resultText[n];
        // ootdText.style.color=resultColor[n];
        // ootdText.style.fontSize=resultFontsize[n];

        w_sound=resultSound[n];
        soundControl("start",w_sound);
        soundEndflag="1";


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
    false
    );

    let w_sound
    let music
    function soundControl(status,w_sound){
        if(status==="start"){
            music =new Audio(w_sound);
            music.currentTime=0;
            music.play();
        }else if(status ==="end"){
            music.pause();
            music.currentTime=0;
        }

    }
