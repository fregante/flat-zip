import test from 'ava';
import flatZip from '.';

test('flatZip', t => {
	t.deepEqual(
		flatZip<string | number>([
			[100, 200, 300, 400],
			['a', 'b', 'c'],
			['€', '฿'],
		]),
		[100, 'a', '€', 200, 'b', '฿', 300, 'c', 400],
	);
	t.deepEqual(
		flatZip<string | number>([
			['a', 'b', 'c'],
			['€', '฿'],
			[100, 200, 300, 400],
		]),
		['a', '€', 100, 'b', '฿', 200, 'c', 300, 400],
	);
});

test('flatZip with limit', t => {
	t.deepEqual(
		flatZip<string | number>([
			[100, 200, 300, 400],
			['a', 'b', 'c'],
			['€', '฿'],
		], 4),
		[100, 'a', '€', 200],
	);
	t.deepEqual(
		flatZip<string | number>([
			[100, 200, 300, 400],
			['a', 'b', 'c'],
			['€', '฿'],
		], 1),
		[100],
	);
});

test('flatZip with 0 limit', t => {
	t.deepEqual(
		flatZip<string | number>([
			[100, 200, 300, 400],
			['a', 'b', 'c'],
			['€', '฿'],
		], 0),
		[],
	);
});
