const mongoose  = require('mongoose')

const PirateSchema  = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Pirate Name  is required ❌❌❌"],
        minlength:[3, "Pirate Name must be at least 3 characters ⛔⛔⛔"]
    },
    image:{
        type:String,
        required:[true, "Image must be present 🛑🛑🛑"],
        
    },
    numberOfTreasure : {
        type:Number,
        required:[true, "Number of Treasure  is required ❌❌❌"],
    },
    catchPhrase:{
        type:String,
        required:[true, "Catch Phrase  is required ❌❌❌"],
        minlength:[3, "Catch Phrase must be at least 3 characters ⛔⛔⛔"]
        
    },
    crewPosition:{
        type:String,
        required:[true, "Crow Position  is required ❌❌❌"],
       
        
    },
    hook:{
        type:Boolean,
        default:true
       
        
    },
    eyePatch:{
        type:Boolean,
        default:true
       
        
    },
    pegLeg:{
        type:Boolean,
        default:true
       
        
    }
}, {timestamps:true});

const Pirate = mongoose.model('Pirate', PirateSchema);
module.exports = Pirate