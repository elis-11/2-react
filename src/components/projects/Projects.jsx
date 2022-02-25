/* eslint-disable no-unused-vars */
import React, { useMemo, useState } from 'react';
import './Projects.scss';
import PostList from './PostList';
import PostForm from './PostForm';
// import Select from './UI/select/Select';
import PostFilter from './UI/PostFilter';

export const Projects=()=> {
	const [ posts, setPosts ] = useState([
		{ id: '1', title: 'JS', body: 'Description' },
		{ id: '2', title: 'React', body: 'Description' }
	]);
	//   1:19:50
	// const [ selectedSort, setSelectedSort ] = useState('');
	// const [ searchQuery, setSearchQuery ] = useState('');

	const [ filter, setFilter ] = useState({ sort: '', query: '' });

	const sortedPosts = useMemo(
		() => {
			console.log('worked');
			if (filter.sort) {
				return [ ...posts ].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
			}
			return posts;
		},
		[ filter.sort, posts ]
	);

	const sortedAndSearchedPosts = useMemo(
		() => {
			return sortedPosts.filter((post) => post.title.toLowerCase().includes(filter.query.toLowerCase()));
		},
		[ filter.query, sortedPosts ]
	);

	const createPost = (newPost) => {
		setPosts([ ...posts, newPost ]);
	};

	const removePost = (post) => {
		setPosts(posts.filter((p) => p.id !== post.id));
	};

	return (
		<div className="Projects">
			<PostForm create={createPost} />
			<hr style={{ margin: '15px 0' }} />
			<PostFilter filter={filter} setFilter={setFilter} />
			<PostList remove={removePost} posts={sortedAndSearchedPosts} title="All Posts" />
		</div>
	);
}
// export default Projects;
