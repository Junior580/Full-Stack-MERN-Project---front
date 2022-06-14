import React from "react";
import { useSelector } from "react-redux";
import posts from "../../../reducers/posts.js";

import useStyles from "./styles.js";

const Post = () => {
    const posts = useSelector((state) => state.Post);
    const classes = useStyles();

    console.log(posts);

    return <h1 className="">POST</h1>;
};

export default Post;
