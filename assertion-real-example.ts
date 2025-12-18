/**
 * Assertions function
 */
import { response } from "express"

/**
 * Goal of example
 * 1. call a dummy api
 * 2. treat the response as unknown (like real life)
 * 3. validate it using assertion functions
 * 4. use the data safely w/o casting
 *
 * https://jsonplaceholder.typicode.com/users/1
 *
 */

// Define the type what we want, this is my expected shape
type UserTest = {
    id: number,
    name: string,
    email: string
}

// Assertion helpers: core learning
function assertHelpers(condition: unknown, msg: string): asserts condition {
    if (!condition) throw new Error(msg)
}

function assertItUser(value: unknown): asserts value is UserTest {
    console.log("AssertItUser");
    assertHelpers(typeof value === 'object' && value != null, "User is not an object")
    const user = value as Record<string, unknown>
    assertHelpers(typeof user.id === "number", "User.id must be a number")
    assertHelpers(typeof user.name === "string", "User.name must be a string")
    assertHelpers(typeof user.email === "string", "User.email must be a string");
    // console.log(user);
}

async function fetchUser(): Promise<UserTest> {
    const url = 'https://jsonplaceholder.typicode.com/users/1'
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Response status: ${res.status}`)
    }
    const result: unknown = await res.json();
    assertItUser(result)
    return result
}

async function main() {
    try {
        const user = await fetchUser();
        console.log("ID:", user.id);
        console.log("Name:", user.name);
        console.log("Email:", user.email);
    } catch (error) {
        console.error("API data is invalid:", error);
    }
}

main()




