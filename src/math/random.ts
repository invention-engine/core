/***
 * @function random Generate a random value
 * @param top Greater number to generate
 * @param includeTop Switchs between including or not the 'top' number in the generation range
 ***/
export const random = (top?: number | string, includeTop: boolean = false) => {
  if (typeof(top) === 'undefined') {
    return Math.floor(Math.random());
  } else {
    if (typeof(top) === 'number') {
      if (top > 0) {
        if (typeof(includeTop) === 'boolean') {
          return includeTop ? Math.floor(Math.random() * (top - 1)) : Math.floor(Math.random() * top);
        } else {
          throw new Error('includeTop is not a boolean.');
        }
      } else {
        throw new Error('Top must be greater that 0.')
      }
    } else if (typeof(top) === 'string') {
      if (+top > 0) {
        if (typeof(includeTop) === 'boolean') {
          return includeTop ? Math.floor(Math.random() * (+top - 1)) : Math.floor(Math.random() * +top);
        } else {
          throw new Error('includeTop is not a boolean.');
        }
      } else {
        throw new Error('Top must be greater that 0.')
      }
    } else {
      throw new Error('Top is not a number or string.');
    }
  }
}
