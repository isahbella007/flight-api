class ApiError extends Error{ 
    statusCode
    message
    constructor(message:string, statusCode:number ){
        super();
        this.statusCode = statusCode || 500
        this.message = message
    }
}

export default ApiError