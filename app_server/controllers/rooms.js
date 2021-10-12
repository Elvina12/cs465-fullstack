const rooms = (req, res) => {
    res.render('rooms', {title: 'Travelr Getaways'});
};

module.exports = {
    rooms
}