---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Commodity/Interface Consumed/External manufacturers/Business Rules"
domain: "Modules"
element_id: 1881757
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 XIAOMI validation cancellation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Commodity/Interface Consumed/External manufacturers/Business Rules

## 📝 Notes

System calls external system for validation cancelation with data from commodity.
Endpoint: /xiaomi/order/external/emi/cancel
Parameters:
posId = salesroomCode
transactionId = commodity.commodityId
imei = value (commodity.IMEI or commodity.SerialNumber from External validation cancellation )

retailerId = (optional)
skuList = commodity.sku

note: documentation for xiaomi integration assigned in CBL-18864

## 🔗 Connections (1)

- ← Dependency: [[{MOD}External validation cancellation]]

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
