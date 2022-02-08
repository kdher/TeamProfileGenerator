const Manager = require("../lib/manager");
const { testId, testName, testEmail } = require("../lib/testUser");

describe("Manager", () => {
	it("Should set office number via Constructor", () => {
		const testOfficeNumber = 100;
		const e = new Manager(testId, testName, testEmail, testOfficeNumber);
		expect(e.officeNumber).toBe(testOfficeNumber);
	});

	it("Should get a role using getRole()", () => {
		const testRole = "Manager";
		const e = new Manager(testId, testName, testEmail, testRole);
		expect(e.getRole()).toBe(testRole);
	});

	it("Should get an office number using getOffice", () => {
		const testOfficeNumber = 100;
		const e = new Manager(testId, testName, testEmail, testOfficeNumber);
		expect(e.getOfficeNumber()).toBe(testOfficeNumber);
	});
});
