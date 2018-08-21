const config = require('./config.json');
module.exports = function ggreset(d) {
let enabled = config.toggle;
d.command.add("ggr", {
$default() {
enabled = !enabled
d.command.message(`GG-Reset is now ${enabled ? 'enabled' : 'disabled'}.`)}})
d.hook('S_LOAD_TOPO', 3, (event) => {
if(!enabled) return;
if(event.zone === 9714)
d.send('C_RESET_ALL_DUNGEON', 1, {
})})}