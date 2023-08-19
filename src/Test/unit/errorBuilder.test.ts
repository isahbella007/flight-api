import ErrorBuilder from "../../Express/Util/errorBuilder";

describe('ErrorBuilder Class', () => {
    it('should return error response when build() method is called', () => {
        const statusCode = 500;
        const message = "INTERNAL_SERVER_ERROR";

        const builder = new ErrorBuilder(statusCode, message);
        const result = builder.build()

        expect(result).toEqual({
            status: 'Error',
            statusCode: 500,
            message: "INTERNAL_SERVER_ERROR"
        });
    })
})