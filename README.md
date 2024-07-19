# React testing

### RTL Queries (getBy/getAllBy/queryBy/queryAllBy/findBy/findAllBy)

getBy/getAllBy : to assert if elements are present in DOM
queryBy/queryAllBy : to assert if elements are present/NOT in DOM
findBy/findAllBy : to assset if elements are present/NOT after DELAY, etc.

Prefer RTL queries over manual queries

1. getByRole
2. getByLabelText
3. getByPlaceholderText
4. getByText
5. getByDisplayValue
6. getByAltText
7. getByTitle
8. getByTestId

### Text match

1. screen.getByText("Hello world") // full string match
2. screen.getByText("llo Worl",{exact:false}) // substring match
3. screen.getByText("llo Worl",{exact:false}) // ignore case
4. screen.getByText(/World/) // substring match
5. screen.getByText(/world/i) // substring match, ignore case
6. screen.getByText(/^hello world$/i) // full string match, ignore case
7. screen.getByText((content,element) => content.startsWith("Hello"))
