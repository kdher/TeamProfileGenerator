const Employee = require("../lib/employee");
const { testId, testName, testEmail } = require("../lib/testUser");

describe("Employee", () => {
	it("Should generate a new Employee instance", () => {
		const e = new Employee();
		expect(typeof (e)).toBe("object");
	});

	it("Should set a name via Constructor", () => {
		const e = new Employee(testId, testName, testEmail);
		expect(e.name).toBe(testName);
	});

	it("Should set an ID via Constructor", () => {
		const e = new Employee(testId, testName, testEmail);
		expect(e.id).toBe(testId);
	});

	it("Should set an email via Constructor", () => {
		const e = new Employee(testId, testName, testEmail);
		expect(e.email).toBe(testEmail);
	});

	it("Should get email address via the function getEmail()", () => {
		const e = new Employee(testId, testName, testEmail);
		expect(e.getEmail()).toBe(testEmail);
	});
});
