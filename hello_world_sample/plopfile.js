module.exports = function (plop) {
// controller generator
plop.setGenerator('controller', {
description: 'application controller logic',
prompts: [{
type: 'input',
name: 'name',
message: 'controller name please?'
}],
actions: [{
type: 'add',
path: 'src/{{name}}WorldFile.js',
template: '{{name}} world'
}]
});
};