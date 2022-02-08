const Intern = require("../lib/intern");
const { testId, testName, testEmail } = require("../lib/testUser");

describe("Intern", () => {
	it("Should set school via Constructor ", () => {
		const testSchool = "Tec Monterrey";
		const e = new Intern(testId, testName, testEmail, testSchool);
		expect(e.school).toBe(testSchool);
	});

	it("Should get a school using getSchool()", () => {
		const testSchool = "Tec Monterrey";
		const e = new Intern(testId, testName, testEmail, testSchool);
		expect(e.getSchool()).toBe(testSchool);
	});

	it("Should get a role using getRole()", () => {
		const testRole = "Intern";
		const e = new Intern(testId, testName, testEmail, testRole);
		expect(e.getRole()).toBe(testRole);
	});
});
