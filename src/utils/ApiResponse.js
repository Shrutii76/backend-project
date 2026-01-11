class ApiResponse{
    constaructor(statusCode,data,message="succuess"){
        this.statusCode=statusCode
        this.data=data
        this.message=message
        this.success=statusCode<400
    }
}