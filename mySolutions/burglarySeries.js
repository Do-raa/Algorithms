function addName(obj, name, value) {
    let obj1 = {};
    obj1[name.slice()] = value;
    return  Object.assign(obj, obj1);
}