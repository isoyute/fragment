import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Textarea, Text } from '@geist-ui/react';
import { createPost } from '../../api/posts';

const NewPost = ({ user, isModalOpen, setIsModalOpen }) => {
	const [code, setCode] = useState();
	const [description, setDescription] = useState();
	const dispatch = useDispatch();

	const handlePostCreation = () => {
		setIsModalOpen(false);
		dispatch(createPost(user.id, code, description));
	};

	return (
		<Modal
			width='45rem'
			open={isModalOpen}
			onClose={() => setIsModalOpen(false)}
		>
			<Modal.Title>Create New Post</Modal.Title>
			<Modal.Content>
				<Text>Code (JavaScript):</Text>
				<Textarea
					width='100%'
					minHeight='200px'
					minLength='5'
					maxLength='500'
					placeholder='paste the code here'
					value={code}
					onChange={e => setCode(e.target.value)}
				/>
				<Text>Description:</Text>
				<Textarea
					width='100%'
					minHeight='50px'
					minLength='4'
					maxLength='255'
					placeholder='short description of the code'
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
