class Trie {
  constructor() {
    this.count = 0;
    this.children = new Array(Trie.COUNT_LOWER_CASE_ALPHABET).fill(null);
  }

  static charToIndex(ch) {
    return ch.charCodeAt(0) - 97;
  }

  static COUNT_LOWER_CASE_ALPHABET = 26;

  add = function (trie, str) {

    Array.from(str).forEach(ch => {
      let trieArrayIndex = Trie.charToIndex(ch);

      if (trie.children[trieArrayIndex] === null)
        trie.children[trieArrayIndex] = new Trie();

      trie.children[trieArrayIndex].count++;
      trie = trie.children[trieArrayIndex];
    })
  }

  find = function (trie, str) {

    for (let i = 0; i < str.length; i++) {
      let trieArrayIndex = Trie.charToIndex(str[i]);
      if (trie === null)
        return null;

      trie = trie.children[trieArrayIndex];

    }

    return trie;

  }

}

test = function (trie, queryTest) {

  let results = [];

  queryTest.forEach(el => {

    let cmd = el[0];

    if (cmd === 'add') {

      trie.add(trie, el[1]);

    } else if (cmd === 'find') {

      let foundTrie = trie.find(trie, el[1]);

      foundTrie !== null ? results.push(foundTrie.count) : results.push(0);

    }

  });

  return results;
}

let results = [];

const QUERIES_TEST_I = [
  ['add', 'hack'],
  ['add', 'hackerrank'],
  ['find', 'hac'],
  ['find', 'hak']
];

results = test(new Trie(), QUERIES_TEST_I);

console.log('results 1: ', results);

const QUERIES_TEST_II = [
  ['add', 's'],
  ['add', 'ss'],
  ['add', 'sss'],
  ['add', 'ssss'],
  ['add', 'sssss'],
  ['find', 's'],
  ['find', 'ss'],
  ['find', 'sss'],
  ['find', 'ssss'],
  ['find', 'sssss'],
  ['find', 'ssssss']
];

results = test(new Trie(), QUERIES_TEST_II);

console.log('results 2: ', results);
