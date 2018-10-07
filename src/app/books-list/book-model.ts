export class Book {

    private isbn: string;
    private author: string;
    private title : string;
    private language: string;
    private type: string;
    private nbrPages: number;
    private publisher : string;
    private year : number ;
    private cover : string;
    private description : string;

    constructor(isbn,author,title,language,type,nbrPages,publisher,year,cover,description){
        this.isbn = isbn;
        this.author = author;
        this.title = title;
        this.language = language;
        this.type = type;
        this.nbrPages = nbrPages;
        this.publisher = publisher;
        this.year = year;
        this.cover = cover;
        this.description = description;
    }
    
    getTitle(){
        return this.title;
    }
 
}