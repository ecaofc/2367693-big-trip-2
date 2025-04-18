import AbstractView from '../framework/view/abstract-view.js';
import { Filters } from '../const.js';

const NoPointsText = {
  [Filters.EVERYTHING]: 'Click New Event to create your first point',
  [Filters.FUTURE]: 'There are no future events now',
  [Filters.PRESENT]: 'There are no present events now',
  [Filters.PAST]: 'There are no past events now',
};

/**
 * Генератор шаблона заглушки
 * @param {string} filterType
 * @returns {string}
 */
function createNoPointsTemplate(filterType) {
  const message = NoPointsText[filterType] || NoPointsText[Filters.EVERYTHING];

  return `<p class="trip-events__msg">${message}</p>`;
}

export default class NoPointsView extends AbstractView {
  #filterType;

  /**
   * @param {string} filterType — тип активного фильтра (Filters.EVERYTHING, etc.)
   */
  constructor(filterType) {
    super();
    this.#filterType = filterType;
  }

  get template() {
    return createNoPointsTemplate(this.#filterType);
  }
}
