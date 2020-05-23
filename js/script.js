let booksData = [];
let booksDataItems;
let dataInfo;
let searchResult;
let http = new XMLHttpRequest();
http.open('GET', "https://www.googleapis.com/books/v1/volumes?q=java&fbclid=IwAR0PwgJte69Xgcw1jePAWEe-ieGBO28GW-YuXLsctbTBkvSVkWyyG6n7hPA");
http.send()
http.addEventListener('readystatechange', function () {
    if (this.readyState == 4 && this.status == 200) {
        booksData = JSON.parse(this.response);
        booksDataItems = booksData.items;
        console.log(booksDataItems);
        displayBooks()

    }
})
function displayBooks() {
    var holder = '';
    for (let i = 0; i < booksDataItems.length; i++) {
        holder += `<div class="col-11 border my-3 mx-auto">
        <div class="row">
        <div class="col-md-6">
        <p class="bookTittle">`+ booksDataItems[i].volumeInfo.title + `</p>
        <p class="bookAuthor">by:`+ booksDataItems[i].volumeInfo.authors + `</p>
        <a href="`+ booksDataItems[i].volumeInfo.previewLink + `" target="_blank" class="btn btn-success my-2" role="Buttom">Read The Book</a>
        <a href="`+ booksDataItems[i].volumeInfo.infoLink + `" target="_blank" class="btn btn-primary my-2" role="Buttom">Book Information</a>
        </div>
        <div class="col-md-6 text-center">
        <img src="` + booksDataItems[i].volumeInfo.imageLinks.thumbnail + `" class="img-fluid my-4">
        </div>
        </div>
        </div>`;

        document.getElementById('rowData').innerHTML = holder
    }
}


function searchFun(trem){
    for(let x = 0; x < booksDataItems.length; x++){
        if(booksDataItems[x].volumeInfo.title.includes(term) == true){
            searchResult += `<div class="col-11 border my-3 mx-auto">
            <div class="row">
            <div class="col-md-6">
            <p class="bookTittle">`+ booksDataItems[x].volumeInfo.title + `</p>
            <p class="bookAuthor">by:`+ booksDataItems[x].volumeInfo.authors + `</p>
            <a href="`+ booksDataItems[x].volumeInfo.previewLink + `" target="_blank" class="btn btn-success my-2" role="Buttom">Read The Book</a>
            <a href="`+ booksDataItems[x].volumeInfo.infoLink + `" target="_blank" class="btn btn-primary my-2" role="Buttom">Book Information</a>
            </div>
            <div class="col-md-6 text-center">
            <img src="` + booksDataItems[x].volumeInfo.imageLinks.thumbnail + `" class="img-fluid my-4">
            </div>
            </div>
            </div>`;
        }
    }

}


