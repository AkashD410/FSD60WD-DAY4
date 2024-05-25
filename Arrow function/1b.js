const stringArray = ["hello world", "good morning", "have a nice day"];
const convertToTitleCase = array => {
    return array.map(string => {
        return string.replace(/\b\w/g, char => char.toUpperCase());
    });
};
const titleCaseArray = convertToTitleCase(stringArray);
console.log(titleCaseArray);
