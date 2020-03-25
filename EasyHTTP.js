/**
 * EasyHTTP Library
 * Library for making HTTP requests
 * 
 * @version 2.0.0
 * @author Nedim Colak
 * @license MIT
 * 
 */

class EasyHTTP {
    //Make an http GET request
    get(url) {
       return new Promise((resolve, reject) => {
           fetch(url)
           .then(res => res.json())
           .then(data => resolve(data))
           .catch(err => reject(err));
       });       
    }
}