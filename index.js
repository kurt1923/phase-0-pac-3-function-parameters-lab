function introduction(name) {
return (`Hi, my name is ${name}.`)
}
function introductionWithLanguage(firstName, language) {
    return (`Hi, my name is ${firstName} and I am learning to program in ${language}.`)
}
function introductionWithLanguageOptional(firstName, language = "JavaScript") {
return (`Hi, my name is ${firstName} and I am learning to program in ${language}.`)
}