const messagesArray = [];

const newMessage = (message) => {
    messagesArray.push(message);
}

const loadMessages = () => {
    return messagesArray;
}

const arrayLenght = () => {
    return messagesArray.length;
}
module.exports = {newMessage, loadMessages, arrayLenght};