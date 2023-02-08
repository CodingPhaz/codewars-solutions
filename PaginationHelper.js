class PaginationHelper {
	constructor(collection, itemsPerPage) {
	// The constructor takes in an array of items and a integer indicating how many
	// items fit within a single page
	Object.assign(this, {collection, itemsPerPage})
	}
	chunks(){
		let result = []
		for(let i = 0; i < this.collection.length; i += this.itemsPerPage){
			const chunk = this.collection.slice(i, i + this.itemsPerPage)
			result.push(chunk)
		}
		return result
	}
	itemCount() {
	// returns the number of items within the entire collection
        return this.collection.length
	}
	pageCount() {
	// returns the number of pages
    
    return this.chunks().length;
	}
	pageItemCount(pageIndex) {
	// returns the number of items on the current page. page_index is zero based.
	// this method should return -1 for pageIndex values that are out of range
		if (pageIndex >= 0 && this.chunks().at(pageIndex)) {
			return this.chunks().at(pageIndex).length;
		}else {
			return -1;
		}
	}
	pageIndex(itemIndex) {
	// determines what page an item is on. Zero based indexes
	// this method should return -1 for itemIndex values that are out of range
		return itemIndex >= this.collection.length || itemIndex < 0 ? -1 : itemIndex / this.itemsPerPage ^ 0;
	}
}


//  16, 17, 18, 19, 20, 21, 22, 23, 24
//1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16, 17, 18, 19, 20, 21, 22, 23, 24
const collection = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16, 17, 18, 19, 20, 21, 22, 23, 24]
const helper = new PaginationHelper(collection, 10)

// console.log(`Page count : ${helper.pageCount()}`)
// console.log(`Page Item count : ${helper.itemCount()}`)
console.log(`Item Index find : ${helper.pageIndex(0)}`)
