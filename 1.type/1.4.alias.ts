{
	/**
	 * Type Aliases, TypeScriptμ κ½πΈ
	 * μλ‘μ΄ νμμ μ μ ν  μ μλ€.
	 * μμνμ, μ€λΈμ νΈ, μ€μ  κ°μ νμμΌλ‘ μ μν  μ μλ€.
	 */
	type Text = string; // νμ μ μΈ
	const name: Text = 'june'; // νμ€νΈ νμμΌλ‘ λ³μ μ μΈ
	type Num = number;
	const age: Text = '20';

	type Student = {
		// κ°μ²΄ νμ μ μΈ
		name: string;
		age: number;
	};
	const student: Student = {
		// κ°μ²΄ νμμΌλ‘ λ³μ μ μΈ
		name: 'Test',
		age: 10,
	};

	/**
	 * String Literal Types
	 */
	type Name = 'name';
	let juneName: Name;
	juneName = 'name';
	type Json = 'json';
	const json: Json = 'json';

	type Boal = true;
	const isCat: Boal = true;
}
