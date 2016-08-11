import BrowserColumn from './BrowserColumn.d';
import BrowserResultsItem from './BrowserResultsItem.d';
import BrowserResultsItemBank from './BrowserResultsItemBank.d';


/**
 * Instances of this interface are used to navigate a results column in the Bitwig Studio browser.
 *
 * @since Bitwig Studio 1.2
 */
declare interface BrowserResultsColumn extends BrowserColumn {
    /**
     * Returns the cursor result item, which can be used to navigate over the list of entries.
     *
     * @return {BrowserResultsItem} the requested filter item object
     * @since Bitwig Studio 1.2
     */
    createCursorItem(): BrowserResultsItem;

    /**
     * Returns an object that provides access to a bank of successive entries using a window configured with the
     * given size, that can be scrolled over the list of entries.
     *
     * @param {int} size the number of simultaneously accessible items
     * @return {BrowserResultsItemBank} the requested item bank object
     */
    createItemBank(size?: number): BrowserResultsItemBank;

}


export default BrowserResultsColumn;
