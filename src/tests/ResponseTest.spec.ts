import { JsonResponse } from '../concerns/response'

describe('should be ok', () => {
    it('should display message, is_success and data parameters', () => {
        const res = new JsonResponse("Successfully", true, {
            _uuid: "c9380761-cf02-4c88-bf42-876451f59a27",
            _title: "Lorem impsum",
            _date: "2022-09-11 12:33:12"
        })

        expect(res).toHaveProperty('message')
        expect(res).toHaveProperty('is_success')
        expect(res).toHaveProperty('data')
    })

    it('should passes when value is a string', () => {
        const result = new JsonResponse("Successfully", true, {})

        expect(typeof result.message == "string").toBeTruthy()
    })

    it('should passes when value is a boolean', () => {
        const result = new JsonResponse("Successfully", true, {})

        expect(typeof result.is_success == "boolean").toBeTruthy()
    })

    it('should passes when value is a object', () => {
        const result = new JsonResponse("Successfully", true, {})

        expect(typeof result.data == "object").toBeTruthy()
    })

    it('should have the data parameter empty even if you don\'t enter any value in it', () => {
        const res = new JsonResponse("Unsuccessfully", false)

        expect(res).toHaveProperty('data')
    })
})
