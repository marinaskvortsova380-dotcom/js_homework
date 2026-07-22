function deleteKeys(obj, keys) {
    const copy = { ...obj };
    for (const key of keys) {
        delete copy[key];
    }
    return copy;
}
export default deleteKeys;