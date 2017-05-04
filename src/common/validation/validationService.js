export const isEmpty = (value) => {
  return {
    valid: !!value,
    message: ['This field is required']
  }
};

export const isString = (value) => {
  const regexp = /^[a-zA-Z]+$/;

  return {
    valid: regexp.test(value),
    message: ['This field should contains only chars']
  }
}