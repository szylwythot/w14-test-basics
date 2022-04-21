const { it, expect } = require("@jest/globals");

const search = require("./index");
const mockDb = ["Aba", "Ajtony", "Ajtó", "ajtók", "abbéli", "alma", "baba", "Abubaba", 'Alibaba', 'kisbaba', 'Babóba'];

it("this is my first test", () =>{
    expect("hello").toEqual("hello");
});

it("this is my first test failing?", () =>{
    expect("hello").toEqual("hello");
});

it("real search with empty result", () => {
    expect(search(mockDb,"zzz")).toEqual([]);
});

it("real search with 1 result", () => {
    expect(search(mockDb,"Aba")).toEqual(["Aba"]);
});

it("real search with 1 result - case sensitive", () => {
    expect(search(mockDb,"alibaba")).toEqual(["Alibaba"]);
});

it("real search with 2 results", () => {
    expect(search(mockDb,"Ajt")).toEqual(["Ajtony","Ajtó"]);
});

it("real search with 2 results - case sensitive", () => {
    expect(search(mockDb,"ajtó")).toEqual(["Ajtó", "ajtók"]);
});

it("real search with 4 results", () => {
    expect(['baba', 'Abubaba', 'Alibaba', 'kisbaba']).toEqual(search(mockDb, "baba"));
});

it("real search with 5 results - cutted after 5 element", () => {
    expect(['Aba', 'baba', 'Abubaba', 'Alibaba', 'kisbaba']).toEqual(search(mockDb, "ba"));
})