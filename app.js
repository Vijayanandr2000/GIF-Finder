function submit(){
    var word = document.getElementById('input').value;
    console.log(word);
    let url = "https://api.giphy.com/v1/gifs/search?api_key=0RM52fB9CnE0afxiPOtYeSWITemHyIe2&q="+word+"&limit=5&offset=0&rating=g&lang=en"
    async function getData(){
       try{
        var gif = await fetch(url);
        var data = await gif.json();
        var gifUrl = data.data[0].embed_url;
        var img = document.createElement('object')
        img.data = gifUrl
        img.style.marginTop = "30px";
        img.style.alignItems = "center"
        img.style.justifyContent = "center"
        img.style.width = "100%";
        img.style.height = "100%";
        document.body.append(img);
       }
       catch(err){
           alert("No GIF founded...!")
       }
    }
    getData();
}



