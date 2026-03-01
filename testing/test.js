// index.test.js
import { getByText } from '@testing-library/dom';

// Assume you have a function that loads your HTML fixture
function loadHtmlFixture(markup) {
  const container = document.createElement('div');
  container.innerHTML = markup;
  return container;
}
