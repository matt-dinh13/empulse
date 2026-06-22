---
type: Requirement
stereotype: "FunctionalRequirement"
package: "HomerSelect/BSL/Requirements Model/Finished/IS/IS-280 (CBL-1071) Improvement of CBL-58 Functionality"
domain: "Requirements Model"
element_id: 1290939
diagrams: 1
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#10 - System supports generation of SMS notification messages paramaters in following format: parameter ${title} --> "Bpk" if customer is Male, "Ibu" if customer is Female; ${paymentAmount} --> Rpx.xxx.xxx; ${nextDueDate} --> dd-mmm-yy

> **Type**: Requirement · **Stereotype**: «FunctionalRequirement»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/IS/IS-280 (CBL-1071) Improvement of CBL-58 Functionality

## 🔗 Connections (4)

- → Dependency «derive»: [[REQ#3 - System sends SMS notification message of template MSG_PAYMENT_PAIRED to all contracts with r]]
- → Dependency «derive»: [[REQ#4 - System send SMS notification message of template MSG_PAYMENT_PAIRED_DPD_0_NO_PREPAYMENT]]
- → Dependency «derive»: [[REQ#6 - System sends SMS notification message of template MSG_PAYMENT_PAIRED_DPD]]
- → Dependency «derive»: [[REQ#5 - System sends SMS notification message of template MSG_PAYMENT_PAIRED_DPD_0_PREPAYMENT]]

## 📊 Appears In (1 diagrams)

- Custom: IS-280 (CBL-1071) Improvement of CBL-58 Functionality
