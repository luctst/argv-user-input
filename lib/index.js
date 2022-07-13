function main (args) {
  let nextItemIsFlagValue = false;
  const argsSpliced = args.slice(2);

  return argsSpliced.reduce(
    (prev, next, index) => {
      const oldPrev = { ...prev };

      if (next.startsWith('-')) {
        if (next.includes('=')) {
          const strSplit = next.split('=');
          const value = strSplit[1].length ? strSplit[1] : true;
          const keySplit = strSplit[0].split('-');
          const key = keySplit[keySplit.length - 1];

          oldPrev.options[key] = value;
          return oldPrev;
        }

        const flagSplit = next.split('-');
        let value;

        if (argsSpliced[index + 1]) {
          value = argsSpliced[index + 1].startsWith('-') ? true : argsSpliced[index + 1];
        } else {
          value = argsSpliced[index].startsWith('-') ? true : argsSpliced[index];
        }

        oldPrev.options[flagSplit[flagSplit.length - 1]] = value;
        return oldPrev;
      }

      oldPrev.commands.push(next);
      return oldPrev;
    },
    { commands: [], options: {} },
  );
}

console.log(main(process.argv));
export default () => main(process.argv)