class JsonResponse {
    response (message: string, is_success: boolean, data = {}) {
        return {
            message: message,
            is_success: is_success,
            data: data
        }
    }
}

export default new JsonResponse
