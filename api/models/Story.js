/**
* Story.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      Title : {type : 'string', unique : true, required : true},
      Summary : {type :'string',required : true},
      Author : {model : 'User', required: true},
      Genres : {collection : 'Genre', via : 'Stories'},
      Chapters : {collection : 'Chapter', via : 'Story'},
      Reviews : {collection : 'Review', via : 'Story'},
      Ratings : { collection : 'Rating', via : 'Story'}
  }
};

