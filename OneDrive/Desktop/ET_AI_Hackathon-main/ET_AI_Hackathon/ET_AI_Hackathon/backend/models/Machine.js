import mongoose from "mongoose";

const machineSchema = new mongoose.Schema(
{
    machineName:{
        type:String,
        required:true,
        trim:true
    },

    machineType:{
        type:String,
        required:true
    },

    manufacturer:{
        type:String,
        default:""
    },

    modelNumber:{
        type:String,
        default:""
    },

    serialNumber:{
        type:String,
        default:""
    },

    installationDate:{
        type:Date
    },

    plant:{
        type:String,
        default:""
    },

    department:{
        type:String,
        default:""
    },

    location:{
        type:String,
        default:""
    },

    description:{
        type:String,
        default:""
    },

    health:{
        type:String,
        enum:["Healthy","Warning","Critical"],
        default:"Healthy"
    },

    status:{
        type:String,
        enum:[
            "Running",
            "Stopped",
            "Maintenance",
            "Offline"
        ],
        default:"Running"
    },

    images:[
        {
            type:String
        }
    ],

    documents:[
        {
            type:String
        }
    ],

    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

},
{
    timestamps:true
}
);

export default mongoose.model("Machine",machineSchema);