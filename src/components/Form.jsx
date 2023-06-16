const Form = () => {
	return (
		<form>
			<div className="form-input">
				<input type="text" />
			</div>
			<div className="form-input">
				<input type="text" />
			</div>
			<div className="form-input">
				<input type="file" />
			</div>
			<button className="form-btn" type="submit">
				add item
			</button>
		</form>
	);
};

export default Form;
