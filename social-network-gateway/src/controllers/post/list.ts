import { RequestHandler } from "express";
import serviceListPosts from "../../service/post/list";
import serviceListComments from "../../service/comment/list";
import serviceListLikes from "../../service/like/list";

const listPosts: RequestHandler = async (req, res) => {
  const params = req.query ??  {};

  const responsePost = await serviceListPosts(params)
  const postsIds = responsePost.posts.reduce(
    (initialString, post) => { return `${initialString}${initialString != '' ? ',' : ''}${String(post._id)}` }, 
    ''
  );

  const responseComments = await serviceListComments({id: postsIds})

  const response = responsePost.posts.map((post) => {
    const postId = post._id;
    const commentsFiltered = responseComments.comments.filter((comment) => comment.post_id === postId)
    post['comments'] = commentsFiltered

    return post;
  });

  const responseLikes = await serviceListLikes({post: postsIds});

  let finalResponse = response.map((post) => {
    const postId = post._id;
    const likesFiltered = responseLikes.likes.filter((like) => like.post_id === postId)
    post['likes'] = likesFiltered
    post['likesCount'] = likesFiltered.length

    return post;
  });


  return res.json(finalResponse);
};

export default listPosts;
