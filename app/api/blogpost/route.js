import connectMongo from '@/lib/mongodb';
import Post from '@/app/models/Post';
export async function GET(request) {
    try {
      await connectMongo();
  
      const url = new URL(request.url);
      const id = url.searchParams.get('id'); 
      console.log(id)
      if (id) {
        const blog = await Post.findOne({ slug: id });
        if (!blog) {
          return new Response(JSON.stringify({ message: 'Blog not found' }), {
            status: 420,
          });
        }
        return new Response(JSON.stringify({ blog }), { status: 200 });
      }else{
        const blogs = await Post.find({ })
        return new Response(JSON.stringify({ blogs }), {status : 200})
      }
  
    } catch (error) {
      return new Response(JSON.stringify({ message: 'error', error }), { status: 500 });
  }
  }

  export async function POST(request) {
    try {
      const { title, discription, keyword, image,  content } = await request.json();
  
      await connectMongo();
      const newPost = new Post({ title, discription, keyword,likes:0 ,comments:[] , image,  content });
      await newPost.save();
      return new Response(JSON.stringify({ message: 'done' }), {
        status: 201,
      });
    } catch (error) {
      return new Response(JSON.stringify({ message: 'error', error: error }), {
        status: 500,
      });
    }
  }



  // export async function PUT(request) {
  //   try {
  //     const { title,ctitle, discription, keyword, image,  content } = await request.json();
  
  //     await connectMongo();
  //     const UpdatedPost = await Post.findOneAndUpdate({title:title},{ title:ctitle, discription, keyword, image, category, content },  { new: true } );

  //     return new Response(JSON.stringify({ message: 'done' ,up:UpdatedPost}), {
  //       status: 201,
  //     });
  //   } catch (error) {
  //     return new Response(JSON.stringify({ message: 'error', err: error }), {
  //       status: 500,
  //     });
  //   }
  // }
  export async function PUT(req){
    try{
      const { action, slug, ...data } = await req.json();

      if (!slug || !action) {
        return new Response(JSON.stringify({ error: 'Id and action are required' }), {
          status: 400,
        });
      }
      await connectMongo()
      if (action === 'comment'){
        const { name, discription } = data;
        if (!name || !discription) {
          return new Response(JSON.stringify({ error: 'Name and discription are required' }), {
            status: 400,
          });
        }
        const updatedPost = await Post.findOneAndUpdate(
          { slug },
          { $push: { comments: { name, discription } } }, 
          { new: true }
        );
        if (updatedPost){
          return new Response(JSON.stringify({ status: 'success', updatedPost }), {
            status: 200,
        });
        }
      }else if (action === 'like'){
        const { likes } = data;
        if (!likes) {
          return new Response(JSON.stringify({ error: 'likes are required' }), {
            status: 400,
          });
        }
        const updatedPost = await Post.findOneAndUpdate(
          { slug },
          { likes: likes  }, 
          { new: true }
        );
        if (updatedPost){
          return new Response(JSON.stringify({ status: 'success', updatedPost }), {
            status: 200,
        });
        }

      }
    }
    catch (error) {
          return new Response(JSON.stringify({ message: 'error', err: error }), {
            status: 500,
          });
        }
  }

  export async function DELETE(request) {
    try {
        const url = new URL(request.url);
        const id = url.searchParams.get('id'); 

        if (!id) {
            return new Response(JSON.stringify({ message: 'ID is required' }), {
                status: 400,
            });
        }

        await connectMongo();
        const deletedMessage = await Post.findByIdAndDelete(id);

        if (!deletedMessage) {
            return new Response(JSON.stringify({ message: 'Post not found' }), {
                status: 404,
            });
        }

        return new Response(JSON.stringify({ status: 'success', deletedMessage }), {
            status: 200,
        });
    } catch (error) {
        return new Response(JSON.stringify({ message: 'error', error }), {
            status: 500,
        });
    }
} 