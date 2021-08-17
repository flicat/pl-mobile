import Schema from 'async-validator';

// 验证方法
/**
 * 参考 async-validator
 */
export default function validate(rules, value, type = 'any') {
  let calcRules = rules.map(item => {
    let proto = { ...item }
    if (!proto.type) {
      proto.type = type
    }
    return proto
  })
  return (new Schema({
    value: calcRules
  })).validate({ value }, { firstFields: true })
}
