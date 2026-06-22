---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Account management/Account transaction/Logical data model"
domain: "Analysis Model"
element_id: 1860895
diagrams: 1
connections: 0
tags:
  - class
  - analysis-model
---

# 🔷 Account Transaction Setting

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Account transaction/Logical data model

## 📝 Notes

Predefined values to set some attributes of transaction originated in the BSL so that be accepted by the CaBus

## 📊 Appears In (1 diagrams)

- Logical: Account transaction - Logical data model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Acquiring Institution Id | int | 1 |
| Code | string | REVOLVING_ACCOUNT |
| Conversion Rate | decimal | 1 |
| Person Role | string | OWNER |
| Source System | string | BSL |
| Terminal Location Type | string | DOMESTIC |
| Terminal Ownership | string | OUR |
| Terminal Type | string | POS |
| Transaction Direction | string | DEBIT |
| Verification Attempt Count Max | int |  |
| Skip Verification On OTP Error | boolean |  |
| Transaction Type | {MOD}Transaction Type |  |
