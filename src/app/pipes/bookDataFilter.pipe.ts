import { Pipe, PipeTransform } from '@angular/core';
/*
 * filter the data on basis of 
 * 1) filter value selection from options 
 * 2) search value from text box might be author or title 
*/
@Pipe({ name: 'filterData' })
export class FilterDataPipe implements PipeTransform {
    transform(books: any, value: any[]): any {
        var filteredBooks = [];
        var filterOption = value[0];
        var searchBox = value[1];
        
        if(filterOption !== "NA"){
            books.map(data => {
                if (data.genre === filterOption) {
                    filteredBooks.push(data);
                }
            })    
        } else {
            filteredBooks = books;
        }

        if(searchBox!==""){
            var splicingArrayIndexes = [];
            filteredBooks = filteredBooks.filter((data, index)=> {
                if(!data.author.match(searchBox) && !data.title.match(searchBox)){
                    splicingArrayIndexes.push(index);
                    //do nothing;
                } else {
                    return data;
                }
            })
        }
        // console.log("new Books",filteredBooks);
        return filteredBooks;
    }
}