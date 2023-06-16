import { useState } from "react";
import Form from "./components/Form";
import Books from "./components/Books";

// let bookTitleDOM = document.querySelector("#title");
// let bookAuthorDOM = document.querySelector("#author");

// Function that gets books from localStorage
function getLocalStorageHandler() {
	let booksBrowserData = localStorage.getItem("Booklist");

	if (booksBrowserData) {
		booksBrowserData = JSON.parse(booksBrowserData);
	} else {
		booksBrowserData = [];
	}
	return booksBrowserData;
}

// Function that adds books into the localStorage
function setLocalStorageHandler(books) {
	localStorage.setItem("Booklist", JSON.stringify(books));
}

const App = () => {
	const [bookList, setBookList] = useState(getLocalStorageHandler());

	// Function to get BookItem from the Form Component inside the BookList-State
	function addBookHandler(bookItem) {
		const books = [bookItem, ...bookList];
		setBookList(books);
		setLocalStorageHandler(books);
	}

	// function to remove a book from the booklist
	function deletebook(bookID) {
		const filteredBooks = bookList.filter((book) => book.id !== bookID);
		setBookList(filteredBooks);
		setLocalStorageHandler(filteredBooks);
	}

	function deleteAllBooks() {
		setBookList([]);
	}

	function checkBookHandler(bookID) {
		const checkedBookList = bookList.map((book) => {
			if (book.id === bookID) {
				let checkedBook = { ...book, checked: !book.checked };
				console.log(checkedBook);
				return checkedBook;
			}
			return book;
		});

		setBookList(checkedBookList);
		setLocalStorageHandler(checkedBookList);
	}

	// function editBookHandler(bookID) {
	// 	const editedBookList = bookList.map((book) => {
	// 		if (book.id === bookID) {
	// 			const { title, author } = book;
	// 			bookTitleDOM.value = title;
	// 			bookAuthorDOM.value = author;
	// 		}
	// 	});
	// }

	return (
		<div className="container">
			<div className="main">
				<h1 className="header">My BookList</h1>
				<Form addBook={addBookHandler} />
				<Books
					bookListProps={bookList}
					deleteBookProps={deletebook}
					deleteAllBooksProps={deleteAllBooks}
					checkBookHandlerProps={checkBookHandler}
					// editBookHandlerProps={editBookHandler}
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
