export class JsonResponse {
    message: string;
    is_success: boolean;
    data: object;

    constructor (
        message: string,
        is_success: boolean,
        data: object = {}
    ) {
        this.message = message;
        this.is_success = is_success;
        this.data = data
    }

    response () {
        return {
            message: this.message,
            is_success: this.is_success,
            data: this.data
        }
    }
}
