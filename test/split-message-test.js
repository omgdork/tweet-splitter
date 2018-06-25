import { assert, expect } from 'chai';
import splitMessage from '../src/utilities/split-message';

describe('Split', () => {
  it(`should display the message as one tweet if its length is less than or equal to the character limit.`, () => {
    const message = 'Hello, World!';
    const output = splitMessage(message);

    assert.equal(output[0], message);
    assert.equal(output.length, 1);
  });

  it(`should display the message in multiple parts with pagination if its length is greater than the character limit.`, () => {
    const message = `I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself.`;
    const output = splitMessage(message);

    assert.equal(output.length, 2);
    assert.equal(output[0], `1/2 I can't believe Tweeter now supports chunking`);
    assert.equal(output[1], `2/2 my messages, so I don't have to do it myself.`);
  });

  it(`should throw an error if the message is just one long word and its length exceeds the character limit.`, () => {
    const message = `ICannotThinkOfALongEnoughWordSupercalifragilisticexpialidocious.`;

    expect(splitMessage.bind(null, message)).to.throw('Word too long yo.');
  });
});
