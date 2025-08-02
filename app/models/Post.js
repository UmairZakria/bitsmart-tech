import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  slug: {
    type: String,
  },
  discription: {
    type: String,
  },
  image: {
    type: String,
  },
  keyword: {
    type: String,
  },
  likes: {
    type: Number,
    default: 0,
  },
  comments: [
    {
      name: { type: String },
      discription: { type: String },
    },
  ],
  content: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,  
  },
  
});
function createSlug(title) {
  return title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '') // Remove special characters
      .replace(/\s+/g, '-')        // Replace spaces with hyphens
      .trim();                     // Remove trailing hyphens
}
PostSchema.pre('save', function (next) {
  if (!this.slug) {
      this.slug = createSlug(this.title); // Generate slug if not provided
  }
  next();
});


const Post = mongoose.models.Post || mongoose.model('Post', PostSchema);

export default Post;
