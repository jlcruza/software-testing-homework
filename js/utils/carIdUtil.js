export function getId() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(999999);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}