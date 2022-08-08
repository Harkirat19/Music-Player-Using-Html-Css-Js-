let musics=[

    {
        id:1,
        name:"Hymn For The Weekend",
        artist:"Coldplay",
        audioSrc:"audios/Coldplay - Hymn For The Weekend (Official Video).mp3",
        imageSrc:"images/hymn for the weekend.jpg"
    },
    {
        id:2,
        name:"God's Plan",
        artist:"Drake",
        audioSrc:"audios/Drake_-_Gods_Plan_Olagist.co_.mp3",
        imageSrc:"images/god-plan.jpg"
    },
    {
        id:3,
        name:"Bad Liar",
        artist:"Imagine Dragons",
        audioSrc:"audios/Imagine Dragons - Bad Liar (Official Music Video).mp3",
        imageSrc:"images/bad liar.jpg"
    },
    {
        id:4,
        name:"Hotline Bling",
        artist:"Drake",
        audioSrc:"audios/Drake-Hotline-Bling-NaijaPrey.com.mp3",
        imageSrc:"images/hotline bling.jpg"
    },
    {
        id:5,
        name:"Attention",
        artist:"Charlie Puth",
        audioSrc:"audios/Charlie Puth - Attention [Official Video].mp3",
        imageSrc:"images/Attention.png"
    },
    {
        id:6,
        name:"Sugar",
        artist:"Maroon 5",
        audioSrc:"audios/Maroon 5 - Sugar (Official Music Video).mp3",
        imageSrc:"images/sugar.jpg"
    },
    {
        id:7,
        name:"Friends",
        artist:"Anne Marie",
        audioSrc:"audios/Friends(PaglaSongs).mp3",
        imageSrc:"images/Marshmello_and_Anne-Marie_Friends.jpg"
    },
    {
        id:8,
        name:"Blank Space",
        artist:"Taylor Swift",
        audioSrc:"audios/Taylor Swift - Blank Space.mp3",
        imageSrc:"images/blank space.jpg"
    },
    {
        id:9,
        name:"Bad Guy",
        artist:"Billie Eilish",
        audioSrc:"audios/Billie_Eilish_-_Bad_Guy.mp3",
        imageSrc:"images/Bad guy.jfif"
    },
    {
        id:10,
        name:"Señorita",
        artist:"Camila Cabello & Shawn Mendes",
        audioSrc:"audios/Senorita(PagalWorld.com.se).mp3",
        imageSrc:"images/senorita.jpg"
    },
    {
        id:11,
        name:"295",
        artist:"Sidhu Moose Wala",
        audioSrc:"audios/295 - Sidhu Moose Wala.mp3",
        imageSrc:"images/295.jpg"
    },
    {
        id:12,
        name:"Satisfya",
        artist:"Imran Khan",
        audioSrc:"audios/Satisfya Imran Khan.mp3",
        imageSrc:"images/Satisfya_-_Cover_Art.jpeg"
    },
    {
        id:13,
        name:"Yaarr Ni Milyaa",
        artist:"Harrdy Sandhu",
        audioSrc:"audios/Yaarr Ni Milyaa (Full Song) Harrdy Sandhu _ B Praak _ Jaani _ Arvindr Khaira _ Punjabi Songs 2018.mp3",
        imageSrc:"images/yaar ni milya.webp"
    },
    {
        id:14,
        name:"GOAT",
        artist:"Diljit Dosanjh",
        audioSrc:"audios/GOAT - Diljit Dosanjh.mp3",
        imageSrc:"images/goat diljit.jpg"
    },
    {
        id:15,
        name:"Adore",
        artist:"Amrinder Gill",
        audioSrc:"audios/Adore_1.mp3",
        imageSrc:"images/Adore.jfif"
    },


]


for(let i=0;i<musics.length;i++)
{

    let tile=document.createElement("div");
    tile.classList.add("tile");

    let thumbnail=document.createElement("div");
    thumbnail.classList.add("thumbnail");

    let img=document.createElement("img");
    img.src=musics[i].imageSrc;

    thumbnail.append(img);
    tile.append(thumbnail);

    let description=document.createElement("div");
    description.classList.add("description");


    let h2=document.createElement("h2");
    h2.append(musics[i].name);
    description.append(h2);

    let h3=document.createElement("h3");
    h3.append(musics[i].artist);
    description.append(h3);

    tile.append(description);

    tile.addEventListener("click",function(){
        playMusic(musics[i]);
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
           });              
    
    });
       

    document.querySelector(".music-list").append(tile);

}



function playMusic(music)
{

    document.querySelector(".player").style.marginLeft="0";
    document.querySelector(".main-thumbnail-img").src=music.imageSrc;
    document.querySelector(".song-name").innerText=music.name;
    document.querySelector(".song-artist").innerText=music.artist;
    document.querySelector(".audio").src=music.audioSrc;
    document.querySelector(".audio").play();       

}

function closePlayer()
{
    document.querySelector(".player").style.marginLeft="100%";
    // document.querySelector(".audio").pause();
}