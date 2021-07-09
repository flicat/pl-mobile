import Schema from 'async-validator';

// 验证方法
/**
 * 参考 async-validator
 */
export default function validate(rules, value) {
  return (new Schema({
    value: rules
  })).validate({ value }, { firstFields: true })
}
