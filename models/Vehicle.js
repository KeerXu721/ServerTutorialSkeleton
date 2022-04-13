const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Schema to describe a vehicle.
 */

let ShipSchema = new Schema({
    /**
     * Make of the vehicle
     */
    make: {
        type: String
    },
    /**
     * Model aspect
     */
    model: {
        type: String
    },
    /**
     * Model year
     */
    modellyear: {
        type: Number
    },
    /**
     * MPG(Miles per Gallon)
     */
    milesPerGallon: {
        value: {type: Number},
        unit: {type: String, default:"mpg"}
    },
    /**
     * odometer miles (how many miles the car hass been driven)
     */
    odometer: {
        value: {type: Number},
        unit: {type: String, default:"miles"}
    },
    /**
     * Engine type
     */
    engine: {
        type:Sting
    },
    /**
     * Display name
     */
    displayName: {
        type: String
    },
    /**
     * VIN
     */
    vin: {
        type: String
    }

});

let vehicle = mongoose.model("Vehicle", VehicleSchema);
module.exports = ship;