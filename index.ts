/** Concats arrays but does so like a zipper instead of appending them. Like lodash.zip + lodash.flat, plus a total limit */
export default function flatZip<T>(table: T[][], limit = Infinity): T[] {
	if (limit <= 0) {
		return [];
	}

	const maxColumns = Math.max(...table.map(row => row.length));
	const zipped = [];

	for (let col = 0; col < maxColumns; col++) {
		for (const row of table) {
			if (row.length > col) {
				zipped.push(row[col]);
				if (zipped.length === limit) {
					return zipped;
				}
			}
		}
	}

	return zipped;
}
