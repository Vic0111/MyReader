var User = {
  // Enforce model schema in the case of schemaless databases
    schema: true,
    types: {
        email: function(email)
        {
          return email === this.emailConfirmation;
        }
    },
    attributes: {
      username  : { type: 'string', unique: true },
      email     : { type: 'email',  unique: true, email : true },
      emailConfirmation : 'email',
      passports : { collection: 'Passport', via: 'user' },
      Stories : { collection: 'Story', via : 'Author'},
      Reviews : {collection : 'Review', via : 'Author'},
      Comments : {collection : 'Comment', via : 'Author'},
    },
    afterValidate : function(values,cb){
        delete values.emailConfirmation;
        cb();
    },
};

module.exports = User;
