
function Airline(data){
    data = data || {};
    this.id = Number(data.id) || Date.now();
    this.number = data.number || "";
    this.planeType = data.planeType || "";
    this.fromCity = data.fromCity || "";
    this.toCity = data.toCity || "";
    this.startTime = data.startTime || "";
    this.endTime = data.endTime || "";
    this.state = data.state || "";
};

module.exports = Airline;