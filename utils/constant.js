
// 标的类型
let ProductType = {
    // 普通标
    NORMAL_TYPE:0,
    // 新手标
    NOVICE_TYPE:1,
    // 立即起息标
    INTRESTING_TYPE:4
}

// 还款方式
let RepaymentType = {
    //还款方式类型（按天计息到期还款-1 按月分期还款-2 按季分期还款-3 每月还息到期还本-4 一次性还款-5 按季付息，到期还本-6 半年付息，到期还本-7 ）
    // 说明，现仅支持按天/月计息
    DAY_TYPE:1,
    MONTH_TYPE:2,
}

/* 暴露接口  */
module.exports = {
    ProductType:ProductType,
    RepaymentType:RepaymentType
}
