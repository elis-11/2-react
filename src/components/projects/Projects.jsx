/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Projects.scss';
import PostList from './PostList';
import PostForm from './PostForm';
import Select from './UI/select/Select';

function Projects() {
	const [ posts, setPosts ] = useState([
		{ id: '1', title: 'JS', body: 'Description' },
		{ id: '2', title: 'JS', body: 'Description' }
	]);

	const [ selectedSort, setSelectedSort ] = useState('');

	const createPost = (newPost) => {
		setPosts([ ...posts, newPost ]);
	};

	const removePost = (post) => {
		setPosts(posts.filter((p) => p.id !== post.id));
	};

  const sortPosts = (sort) =>{
    setSelectedSort(sort)
    console.log(sort);
  }
	
  return (
		<div className="Projects">
			<PostForm create={createPost} />
			<hr style={{ margin: '15px 0' }} />
			<div>
				<Select
					value={selectedSort}
					onChange={sortPosts}
					defaultValue={'sort by'}
					options={[ { value: 'title', name: 'name' }, { value: 'body', name: 'description' } ]}
				/>
			</div>

			{posts.length ? (
				<PostList remove={removePost} posts={posts} title="All Posts" />
			) : (
				<h2 style={{ textAlign: 'center' }}>Posts not found!</h2>
			)}
		</div>
	);
}
export default Projects;
