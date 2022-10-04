const taskSchemea = new Schema(
    {
        name:{
            type:String,
            required:true
        },
        date:{
            type:Date,
            required:true
        },
        isCompleted:{
            type:Boolean,
            required:true
        }
    }
)