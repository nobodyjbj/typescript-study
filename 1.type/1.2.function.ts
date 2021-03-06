{
	// JavaScript ๐
	function jsAdd(num1, num2) {
		return num1 + num2;
	}

	// TypeScript
	function tsAdd(num1: number, num2: number): number {
		return num1 + num2;
	}

	// JavaScript ๐
	function jsFetchNum(id) {
		// code ..
		// code ..
		// code ..
		return new Promise((resolve, reject) => {
			resolve(100);
		});
	}

	// TypeScript
	function tsFetchNum(id: string): Promise<number> {
		// code ..
		// code ..
		// code ..
		return new Promise((resolve, reject) => {
			resolve(100);
		});
	}

	// ํจ์ ํ์ฉ ํ!
	// JavaScript์ ์ต์  ๋ฌธ๋ฒ์ ๋น์ฐํ TypeScript์์๋ ์ฌ์ฉํ  ์ ์๋ค.

	// Optional parameter
	function printName(firstName: string, lastName?: string) {
		// ๋ฌผ์ํ๊ฐ ๋ถ์ผ๋ฉด ์ ๋ฌ ๋  ์๋ ์๊ณ  ์ ๋ฌ ํ์ง ์์ ์๋ ์๋ค.
		console.log(firstName);
		console.log(lastName);
	}

	printName('moon', 'sun');
	printName('jupiter');
	printName('earth', undefined);

	// default parameter
	function printMessage(messege: string = 'default message') {
		// ๋ํดํธ ๋ฉ์ธ์ง๋ฅผ ์ ํ  ์ ์๋ค.
		console.log(messege);
	}
	printMessage(); // ์ ๋ฌํ์ง ์์๋ ๊ธฐ๋ณธ๊ฐ์ด ์ถ๋ ฅ

	// Rest parameter
	function addNumber(...numbers: number[]): number {
		return numbers.reduce((a, b) => a + b);
	}

	console.log(addNumber(1, 2));
	console.log(addNumber(1, 2, 3));
	console.log(addNumber(1, 2, 3, 4));
	console.log(addNumber(1, 2, 3, 4, 5));
}
