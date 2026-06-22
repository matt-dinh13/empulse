---
type: Requirement
stereotype: "FunctionalRequirement"
package: "HomerSelect/BSL/Requirements Model/Finished/IS/IS-280 (CBL-1071) Improvement of CBL-58 Functionality"
domain: "Requirements Model"
element_id: 1290944
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#3 - System sends SMS notification message of template MSG_PAYMENT_PAIRED to all contracts with remaining debt <= IDR 50 000.

> **Type**: Requirement · **Stereotype**: «FunctionalRequirement»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/IS/IS-280 (CBL-1071) Improvement of CBL-58 Functionality

## 📝 Notes

This request will be country specific since ID have smallunderpayment regulation.

<title> --> "Bpk" if customer is Male, and "Ibu" if customer is Female
Format of amount --> Rpx.xxx.xxx
Format of due date --> dd-mmm-yy

## 🔗 Connections (2)

- → Generalization: [[CBL-1071 Improvement of CBL-58 Functionality_ System supports on-line sending of SMS and email witho]]
- ← Dependency «derive»: [[REQ#10 - System supports generation of SMS notification messages paramaters in following format_ par]]

## 📊 Appears In (1 diagrams)

- Custom: IS-280 (CBL-1071) Improvement of CBL-58 Functionality
