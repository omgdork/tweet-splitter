/**
 * Splits the message into chunks.
 * @param {string} message - The message to tweet.
 * @param {number} [characterLimit=50] - The character limit per tweet. 
 * @param {string} [errorMessage=Word is too long yo.] - The message to display when a word is too long to tweet.
 * @returns {[string]} An array of message chunks with pagination (if needed).
 */
function splitMessage(message, characterLimit = 50, errorMessage = 'Word too long yo.') {
  if (message.length <= characterLimit) {
    return [message];
  }

  const words = message.split(' ');

  if (words.some((word) => word.length > characterLimit)) {
    throw(errorMessage);
  }

  let chunks = [];
  let currentChunk = [];
  let wordsCopy = [...words];
  let currentPage = 1;
  let pageCount = 1;
  let pageCountLength = 1;
  let didPageCountLengthChange = false;

  /**
   * Gets the current chunk's pagination template in --/-- format.
   * @param {number} currentPage - The current page.
   * @param {number} pageCount - The page count.
   * @returns {string} The pagination template/placeholder.
   */
  const getPaginationTemplate = (currentPage, pageCount) => {
    let currentPagePlaceholder = '';
    let pageCountPlaceholder = '';

    for (let i = 0, length = currentPage.toString().length; i < length; i += 1) {
      currentPagePlaceholder += '-';
    }

    for (let i = 0, length = pageCount.toString().length; i < length; i += 1) {
      pageCountPlaceholder += '-';
    }

    return `${currentPagePlaceholder}/${pageCountPlaceholder}`;
  };

  while (wordsCopy.length) {
    // Do it again T_T
    if (didPageCountLengthChange) {
      chunks = [];
      currentChunk = [];
      wordsCopy = [...words];
      currentPage = 1;
      didPageCountLengthChange = false;
    }

    const nextWord = wordsCopy.shift();

    currentChunk.push(nextWord);

    let isOverCharacterLimit = getPaginationTemplate(currentPage, pageCount).length + currentChunk.join(' ').length > characterLimit;

    if (isOverCharacterLimit) {
      // Check if a word and the pagination won't fit in a chunk.
      if (currentChunk.length === 1) {
        throw(errorMessage);
      }

      // Return the word to the words array.
      wordsCopy.unshift(currentChunk.pop());

      // Add the current chunk to the chunks array.
      chunks.push(currentChunk);
      currentChunk = [];

      // Increment page.
      currentPage += 1;
      pageCount += 1;

      // Check if the pagination character length has changed.
      if (pageCountLength !== pageCount.toString().length) {
        pageCountLength += 1;
        didPageCountLengthChange = true;
      }
    } else if (!wordsCopy.length) { // Add the current chunk if it's the last word.
      chunks.push(currentChunk);
    }
  }

  // Replace the pagination placeholders with actual pagination.
  const output = chunks.map((chunk, i, arr) => {
    chunk.unshift(`${i + 1}/${arr.length}`);

    return chunk.join(' ');
  });

  return output;
}

export default splitMessage;
