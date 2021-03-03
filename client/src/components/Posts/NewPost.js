import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Textarea } from '@geist-ui/react';
import { createPost } from '../../api/posts';

const NewPost = ({ user, isModalOpen, setIsModalOpen }) => {
	const [description, setDescription] = useState();
	const dispatch = useDispatch();

	const handlePostCreation = () => {
		setIsModalOpen(false);
		dispatch(createPost(user.id, description));
	};

	return (
		<Modal
			width='45rem'
			open={isModalOpen}
			onClose={() => setIsModalOpen(false)}
		>
			<Modal.Title>Create New Post</Modal.Title>
			<Modal.Content>
				<Textarea
					width='100%'
					placeholder='description'
					value={description}
					onChange={e => setDescription(e.target.value)}
				/>
			</Modal.Content>
			<Modal.Action passive onClick={() => setIsModalOpen(false)}>
				Cancel
			</Modal.Action>
			<Modal.Action onClick={handlePostCreation}>Post</Modal.Action>
		</Modal>
	);
};

export default NewPost;
