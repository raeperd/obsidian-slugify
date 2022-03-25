import slugify from "./slugify";

test.each([
	{input: "STRING with UPPERCASE", expected: "string-with-uppercase"},
	{input: "STRING with \tTABS", expected: "string-with-tabs"},
	{input: "STRING ends with empty SPACES    ", expected: "string-ends-with-empty-spaces"},
	{input: "STRING ends with tabs\t\t", expected: "string-ends-with-tabs"},
	{input: "STRING ends with FILE EXTENSION.md", expected: "string-ends-with-file-extension.md"},
	{input: "한글 문자 with English", expected: "한글-문자-with-english"},
])('when slugify $input expect $expected', ({input, expected}) =>{
	expect(slugify(input)).toBe(expected)
})
