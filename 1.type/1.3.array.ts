{
	// Array
	const fruits: string[] = ['ð', 'ð'];
	const scores: Array<number> = [1, 2, 3];

	function printArray(fruit: readonly string[]) {
		// readonly ë¥¼ ë¶ì¬ì£¼ë©´ ë°°ì´ì ë³ê²½í  ì ìë¤.
		// ê°ì²´ì ë¶ë³ì±ì ë³´ì¥
		// fruit.push(); // ë³ê²½ x
	}

	// Tuple : ë°°ì´ì´ê¸´ ë°°ì´ì¸ë° ììë§ë¤ ë¤ë¥¸ ìì±ì ê°ì§ ì ìë ë°°ì´
	// ì¬ì©ì ê¶ì¥íì§ ìëë¤. ì¸ë±ì¤ë¡ ì ê·¼íê¸°ëë¬¸ì ê°ëì±ì´ ë¨ì´ì§ë¤.
	// tuple -> interface, type alias, classë¡ ëì²´í´ì ì¬ì©íë ê²ì´ ì¢ë¤.
	let student: [string, number];
	student = ['name', 123];
	student[0]; // name
	student[1]; // 123
	const [name, age] = student;
}
