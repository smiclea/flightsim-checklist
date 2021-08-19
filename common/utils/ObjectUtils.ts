class ObjectUtils {
  hasOwnProperty<X extends Record<string, unknown>, Y extends PropertyKey>(
    obj: X,
    prop: Y,
  ): obj is X & Record<Y, unknown> {
    return obj.hasOwnProperty(prop)
  }
}

export default new ObjectUtils()
