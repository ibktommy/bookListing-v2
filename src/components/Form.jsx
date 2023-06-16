import { useState } from "react";
import { nanoid } from "nanoid";

const Form = ({ addBook, setLocalStorageHandler }) => {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [image, setImage] = useState(null);

	function titleHandler(e) {
		setTitle(e.target.value);
	}

	function authorHandler(e) {
		setAuthor(e.target.value);
	}

	function imagehandler(e) {
		setImage(e.target.files[0]);
	}

	function formSubmitHandler(e) {
		e.preventDefault();

		if (title.trim().length === 0 || author.trim().length === 0) {
			alert("Empty spaces are not valid, please use valid words");
			return;
		}
		if (image.length === 0) {
			alert("You need to upload the book image");
		}

		let newBookItem = {
			id: nanoid(),
			title: title,
			author: author,
			image: URL.createObjectURL(image),
		};

		addBook(newBookItem);
		setAuthor("");
		setTitle("");
		setImage(null);
	}

	return (
		<form onSubmit={formSubmitHandler}>
			<div className="form-input">
				<input type="text" value={title} onChange={titleHandler} />
			</div>
			<div className="form-input">
				<input type="text" value={author} onChange={authorHandler} />
			</div>
			<div className="form-input">
				<input type="file" accept="image/*" onChange={imagehandler} />
			</div>
			<button className="form-btn" type="submit">
				add books
			</button>
		</form>
	);
};

export default Form;
