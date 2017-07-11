function processCommands(commands) {
    let commandsProcessor = (function () {
        let text = '';

        return {
            append: (textToken) => text += textToken,
            removeStart: (count) => text = text.slice(count),
            removeEnd: (count) => text = text.slice(0, text.length - count),
            print: () => console.log(text)
        }
    })();

    for (command of commands) {
        let [cmd, arg] = command.split(' ');
        commandsProcessor[cmd](arg);
    }
}

processCommands(['append 123', 'append 45', 'removeStart 2', 'removeEnd 1', 'print']); // 34