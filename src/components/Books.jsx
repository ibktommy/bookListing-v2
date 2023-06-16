import { useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const Books = ({ bookListProps, deleteBookProps }) => {

  const [checked, setIsChecked] = useState(false)

  function checkedHandler(e) {
    setIsChecked(!checked)
  }

	return (
		<div className="books">
			{bookListProps.length === 0 ? (
				<h3 className="empty-header">Your booklist is empty, add books</h3>
			) : (
				bookListProps.map((bookItem) => {
					const { id, title, author, image } = bookItem;
					return (
						<article className="book-item" key={id}>
							<input type="checkbox" onChange={checkedHandler} />

							<div className="book-details">
								<img
									src={image}
									alt={title}
									className={checked ? "checked" : ""}
								/>
								<div className="book-details-text">
									<h4 className={checked ? "checked" : ""}>{title}</h4>
									<p className={checked ? "checked" : ""}>{author}</p>
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
