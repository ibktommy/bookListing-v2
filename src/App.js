import { useState } from "react";
import Form from "./components/Form";
import Books from "./components/Books";

const App = () => {

  const [bookList, setBookList] = useState([])

  // Function to get BookItem from the Form Component inside the BookList-State
  function addBookHandler(bookItem) {
    setBookList([bookItem, ...bookList]);
    console.log(bookList)
  }

  // function to remove a book from the booklist
  function deletebook(id) {
    const filteredBooks = bookList.filter((book) => book.id !== id)
    return setBookList(filteredBooks)
  }

  function deleteAllBooks() {
		setBookList([]);
	}

	return (
		<div className="container">
			<div className="main">
				<h1 className="header">My BookList</h1>
				<Form addBook={addBookHandler} />
				<Books
					bookListProps={bookList}
					deleteBookProps={deletebook}
					deleteAllBooksProps={deleteAllBooks}
				/>
				{bookList.length > 0 && (
					<button className="del-btn" onClick={deleteAllBooks}>
						delete all books
					</button>
				)}
			</div>
			<footer>Copyright © Atomdev, 2023</footer>
		</div>
	);
};

export default App;
