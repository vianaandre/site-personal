import { createContext } from 'react';

import BlogPosts from '../../types/blogPosts';

const ContextBlog = createContext({} as BlogPosts);

export default ContextBlog;
