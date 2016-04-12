var mongoose = require('mongoose');
var CommentSchema = new mongoose.Schema({
  title: String,
  location: String,
  area: String,
  rating: { type: Number, min: 0, max: 5 },
  price: { type: Number, min: 0, max: 5 },
  website: String,
  engagements: String,
  formals: String,
  wpackage: String,
  upvotes: {type: Number, default: 0},
});
CommentSchema.methods.upvote = function(cb) {
  this.upvotes += 1;
  this.save(cb);
};
mongoose.model('Comment', CommentSchema);
