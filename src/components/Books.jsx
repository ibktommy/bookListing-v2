import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const Books = ({ bookListProps }) => {
	return (
		<div className="books">
			{bookListProps.map((bookItem) => {
				const { id, title, author, image } = bookItem;
				return (
					<article className="book-item" key={id}>
						<input type="checkbox" name="" id="" />

						<div className="book-details">
							<img src={image} alt={title} />
							<div className="book-details-text">
								<h4>{title}</h4>
								<p>{author}</p>
							</div>
						</div>

						<div className="book-cta">
							<button className="edit btn">
								<AiFillEdit />
							</button>
							<button className="delete btn">
								<AiFillDelete />
							</button>
						</div>
					</article>
				);
			})}
		</div>
	);
};

export default Books;
