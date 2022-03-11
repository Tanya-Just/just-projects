const fs = require('fs');

exports.save = (passengers) => {

    fs.writeFileSync('./dataA.json', JSON.stringify(passengers));

}
exports.load = () => {
    return JSON.parse(fs.readFileSync('./dataA.json', 'utf8'));
}