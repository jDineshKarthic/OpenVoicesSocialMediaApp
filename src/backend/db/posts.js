import { v4 as uuid } from "uuid";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "The first step is to establish that something is possible; then probability will occur.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "elon",
    profilePic:
      "https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg",
      
    lastName: "Musk",
    firstName: "Elon",
    comments: [],
    createdAt: "2023-06-23T00:05:39+05:30",
    updatedAt: "2023-06-23T00:05:39+05:30",
  },
  {
    _id: uuid(),
    content:
      "Dreams are not what you see in your sleep, dreams are things which do not let you sleep.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "messi",
    profilePic:
      "https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg",
    lastName: "lionel",
    firstName: "messi",
    comments: [],
    createdAt: "2023-06-20T00:07:24+05:30",
    updatedAt: "2023-06-20T00:07:24+05:30",
  },
  {
    _id: uuid(),
    content:
      "I know I'm a good professional, I know that no one's harder on me than myself and that's never going to change, under any circumstances.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "johnwick",
    profilePic:
      "https://res.cloudinary.com/thinkloud/image/upload/c_thumb,h_100,w_100/v1652807080/johnwick_nk2ibz.jpg",
    lastName: "Wick",
    firstName: "John",
    createdAt: "2022-06-22T00:08:15+05:30",
    updatedAt: "2022-06-22T00:08:15+05:30",
    comments: [
      {
        _id: uuid(),
        username: "elon",
        profilePic:
          "https://res.cloudinary.com/thinkloud/image/upload/c_thumb,h_100,w_100/v1652807157/elon_f0pmdq.jpg",
        lastName: "Musk",
        firstName: "Elon",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: "2023-06-21T00:10:37+05:30",
        updatedAt: "2023-06-21T00:10:37+05:30",
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Your motivation should come from within yourself. Just like success, failure is also a part of life. You have to learn to deal with it.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "emma",
    profilePic:
      "https://res.cloudinary.com/thinkloud/image/upload/c_thumb,h_100,w_100/v1652807229/emma_pnvnbh.jpg",
    lastName: "Watson",
    firstName: "Emma",
    comments: [],
    createdAt: "2023-06-12T00:08:15+05:30",
    updatedAt: "2023-06-12T00:08:15+05:30",
  },
  {
    _id: uuid(),
    content:
      "Elon Musk (@elonmusk) shares thoughts quotes and posts on twitter",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "elon",
    profilePic:
      "https://res.cloudinary.com/thinkloud/image/upload/c_thumb,h_100,w_100/v1652807157/elon_f0pmdq.jpg",
    lastName: "Musk",
    firstName: "Elon",
    comments: [],
    createdAt: "2022-06-22T00:08:15+05:30",
    updatedAt: "2022-06-22T00:08:15+05:30",
  },
  {
    _id: uuid(),
    content:
      "I'm always motivated. I'm always positive. The important thing is to learn every day, every game, every second.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "katherine",
    profilePic:
      "https://res.cloudinary.com/thinkloud/image/upload/c_thumb,h_100,w_100/v1652809914/katherine_whqwrl.jpg",
    lastName: "Langford",
    firstName: "Katherine",
    comments: [],
    createdAt: "2023-07-02T00:08:15+05:30",
    updatedAt: "2023-07-02T00:08:15+05:30",
  },
  {
    _id: uuid(),
    content: "The only way to do great work is to love what you do.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "jack",
    profilePic:
      "https://res.cloudinary.com/thinkloud/image/upload/c_thumb,h_100,w_100/v1652809914/master_shi_wpqvx1.jpg",
    lastName: "Jackie",
    firstName: "Chan",
    comments: [],
    createdAt: "2023-07-12T00:08:15+05:30",
    updatedAt: "2023-07-12T00:08:15+05:30",
  },
  {
    _id: uuid(),
    content:
      "The future belongs to those who believe in the beauty of their dreams",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "rakesh",
    profilePic:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Rj_in_office.jpg/330px-Rj_in_office.jpg",
    lastName: "rakesh",
    firstName: "junjhunwala",
    comments: [],
    createdAt: "2023-07-11T00:08:15+05:30",
    updatedAt: "2023-07-11T00:08:15+05:30",
  },
];
