/* eslint-disable no-unused-vars */
import React, { useMemo, useState } from 'react';
import './Projects.scss';
import PostList from './PostList';
import PostForm from './PostForm';
import Select from './UI/select/Select';
import MyInput from '../UI/input/MyInput';

function Projects() {
	const [ posts, setPosts ] = useState([
		{ id: '1', title: 'JS', body: 'Description' },
		{ id: '2', title: 'JS', body: 'Description' }
	]);

	const [ selectedSort, setSelectedSort ] = useState('');
	const [ searchQuery, setSearchQuery ] = useState('');

	const sortedPosts = useMemo(
		() => {
			console.log('worked');
			if (selectedSort) {
				return [ ...posts ].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
			}
			return posts;
		},
		[ selectedSort, posts ]
	);

	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter(post => post.title.includes(searchQuery))
	}, [ searchQuery, sortedPosts ]);

	const createPost = (newPost) => {
		setPosts([ ...posts, newPost ]);
	};

	const removePost = (post) => {
		setPosts(posts.filter((p) => p.id !== post.id));
	};

	const sortPosts = (sort) => {
		setSelectedSort(sort);
	};

	return (
		<div className="Projects">
			<PostForm create={createPost} />
			<hr style={{ margin: '15px 0' }} />
			<div>
				<MyInput
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					// 1:13
					placeholder="search..."
				/>
				<Select
					value={selectedSort}
					onChange={sortPosts}
					defaultValue={'sort by'}
					options={[ { value: 'title', name: 'name' }, { value: 'body', name: 'description' } ]}
				/>
			</div>

			{posts.length ? (
				<PostList remove={removePost} posts={sortedAndSearchedPosts} title="All Posts" />
			) : (
				<h2 style={{ textAlign: 'center' }}>Posts not found!</h2>
			)}
		</div>
	);
}
export default Projects;
