function main (args) {
  let nextItemIsFlagValue = false;
  const argsSpliced = args.slice(2);

  return argsSpliced.reduce(
    (prev, next, index) => {
      const oldPrev = { ...prev };

      if (nextItemIsFlagValue) {
        nextItemIsFlagValue = false;
        return oldPrev;
      }

      if (next.includes('-')) {
        if (next.includes('=')) {
          const strSplit = next.split('=');
          const value = strSplit[1].length ? strSplit[1] : true;
          const keySplit = strSplit[0].split('-');
          const key = keySplit[keySplit.length - 1];

          oldPrev.options[key] = value;
          return oldPrev;
        }

        const flagSplit = next.split('-');

        oldPrev.options[flagSplit[flagSplit.length - 1]] = argsSpliced[index + 1] || true;
        nextItemIsFlagValue = true;
        return oldPrev;
      }

      oldPrev.commands.push(next);
      return oldPrev;
    },
    { commands: [], options: {} },
  );
}

export default () => main(process.argv)