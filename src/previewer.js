import React, { useState } from "react";
import marked from "marked";
import string from "./markdownExamp";

const MarkdownPreviewer = () => {
	const [text, setText] = useState({
		preview: string,
	});

	const handleChanges = (e) => {
		setText({
			preview: e.target.value,
		});
	};

	const markdown = marked(text.preview || "");

	return (
		<div>
			<textarea
				value={text.preview}
				onChange={handleChanges}
				id="editor"
			></textarea>
			<div id="preview" dangerouslySetInnerHTML={{ __html: markdown }} />
		</div>
	);
};

export default MarkdownPreviewer;
