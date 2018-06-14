const config = require('./config.json');
const Command = require('command');
module.exports = function ggreset(dispatch) {
const command = Command(dispatch)
let enabled = config.toggle;
command.add('ggr', () => {
enabled = !enabled
command.message(`GG-Reset is now ${enabled ? 'enabled' : 'disabled'}.`)})
dispatch.hook('S_LOAD_TOPO', 3, (event) => {
if(!enabled) return;
if(event.zone === 9714)
dispatch.toServer('C_RESET_ALL_DUNGEON', 1, {
})})}