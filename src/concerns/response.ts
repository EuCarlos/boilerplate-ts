type JsonResponseProps = {
    message: string 
    is_success: Boolean
    data?: Object
}

export const json_response = (props: JsonResponseProps): Object => {
    return {
        message: props.message,
        is_sucess: props.is_success,
        data: props.data || {}
    }
}