let datos = new FormData();
fetch("https://api.waifu.pics/many/sfw/waifu",{
    method: "post",
    body: datos
})
.then(respuesta => respuesta.json())
.then(respuesta => {
    let contenido_waifu = ``;
    for(i = 0; i < 30; i++){
        contenido_waifu += `
        <div class="col">
            <div class="card align-self-center">
                <img class="img-fluid mx-auto" src="${respuesta.files[i]}" alt="">
            </div>
        </div>
        `;
    }
    $("#waifus").html(contenido_waifu);
}).catch(error => {
    console.log(error);
});

//https://api.waifu.pics/nsfw/waifu
//https://api.waifu.im/random/?selected_tags=hentai