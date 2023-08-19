class ErrorBuilder{ 
    private statusCode: number 
    private message: string
    constructor(statusCode: number, message: string){ 
        this.statusCode = statusCode, 
        this.message = message
    }

    build(){ 
        return{ 
            status: "Error", 
            statusCode: this.statusCode, 
            message: this.message
        }
    }
}

export default ErrorBuilder