const hobbies = ["jogging", "cooking", "diving", "swimming", "reading"];

exports.getHobbies = () => {
    return hobbies;
}

exports.getHobby = id => {
    if(id < 1 || id > hobbies.length)
        return nil;
    return hobbies[id];
}