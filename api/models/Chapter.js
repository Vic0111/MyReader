/**
* Chapter.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      Title : 'string',
      Number : 'integer',
      Content : 'string',
      Story : {model : 'Story'},
      Comments : { collection : 'Comment', via : 'Chapter'}
  }
};

