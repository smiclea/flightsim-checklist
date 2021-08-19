class CustomError extends Error {
  data: { [prop: string]: unknown } | undefined

  constructor(message: string, data?: { [prop: string]: unknown }) {
    super(message)

    if (data) {
      this.data = data
    }
  }
}

export default CustomError
