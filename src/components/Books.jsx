import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const Books = ({ bookListProps, deleteBookProps, checkBookHandlerProps }) => {
	return (
		<div className="books">
			{bookListProps.length === 0 ? (
				<h3 className="empty-header">Your booklist is empty, add books</h3>
			) : (
				bookListProps.map((bookItem) => {
					const { id, title, author, image, checked } = bookItem;
					return (
						<article className="book-item" key={id}>
							<input
								type="checkbox"
								onChange={() => checkBookHandlerProps(id)}
								checked={checked}
							/>

							<div className="book-details">
								<img
									src={image}
									alt={title}
									className={checked ? "checked" : null}
								/>
								<div className="book-details-text">
									<h4 className={checked ? "checked" : null}>{title}</h4>
									<p className={checked ? "checked" : null}>{author}</p>
								</div>
							</div>

							<div className="book-cta">
								<button className="edit btn">
									<AiFillEdit />
								</button>
								<button
									className="delete btn"
									onClick={() => deleteBookProps(id)}
								>
									<AiFillDelete />
								</button>
							</div>
						</article>
					);
				})
			)}
		</div>
	);
};

export default Books;
