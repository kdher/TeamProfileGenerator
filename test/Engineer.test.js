const Engineer = require("../lib/engineer");
const { testId, testName, testEmail } = require("../lib/testUser");

describe("Engineer", () => {
	it("Should set a Github account via Constructor", () => {
		const testGithub = "kdher";
		const e = new Engineer(testId, testName, testEmail, testGithub);
		expect(e.github).toBe(testGithub);
	});

	it("Should get a Github username via getGitHub()", () => {
		const testGithub = "kdher";
		const e = new Engineer(testId, testName, testEmail, testGithub);
		expect(e.getGithub()).toBe(testGithub);
	});

	it("Should get a role via getRole()", () => {
		const testRole = "Engineer";
		const e = new Engineer(testId, testName, testEmail, testRole);
		expect(e.getRole()).toBe(testRole);
	});
});
