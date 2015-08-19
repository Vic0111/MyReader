/**
 * StoryController
 *
 * @description :: Server-side logic for managing Stories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `StoryController.New()`
   */
  New: function (req, res) {
    return res.view('story/storyform');
  },
  CreateNew : function(req, res){
    if(req.user)
        {
            var story = new Object();
            story.Title = req.body.title;
            story.Summary = req.body.summary;
            story.Author = req.user;
            Story.create(story).exec(function(err,story){
                if(err) res.json({error:err});
                else {
                    res.json(story.id);
                }
            });
        }else{
            res.forbidden();
        }
      
  },
  ShowStory : function(req,res){
      var id = req.param("id");
      if(id){
          Story.findOne({id : id}).exec(function(err,data){
              if(err)res.json({error : err})
              else {
                  
                  var bbcode = require('bbcode');
                  bbcode.parse(data.Summary, function(content) {  
                    var sanitizeHtml = require('sanitize-html');
                    data.Summary = sanitizeHtml(content);
                    console.log(data);
                    res.view('story/showstory', {story : data});
                  });
              }
          });
       
      }else{
          res.notFound();
      }
      
  },
  AllStory : function(req,res){
          Story.find().exec(function(err,stories){
              if(err)res.json({error : err})
              else {
                    var _ = require("underscore");
                    console.log(stories);
                    res.view('story/allstory', {stories : stories, _ : _});
                  };
              });
          
  },
  getcallback : function(req, res){
      var action = req.param("action");
      switch(action){
          case 'new' :
              this.New(req,res);
          break;
          case 'showstory':
              this.ShowStory(req,res);
          break;
          case 'allstory':
              this.AllStory(req,res);
          break;
          default:
              this.AllStory(req,res);
          break;
      }
  },
    postcallback : function(req, res){
      var action = req.param("action");
      switch(action){
          case 'createnew' :
              this.CreateNew(req,res);
          break;
          default:
              res.notFound();
          break;
      }
  }
};

