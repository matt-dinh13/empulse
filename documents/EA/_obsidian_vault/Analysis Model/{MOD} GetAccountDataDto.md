---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/UMC/AccountWS"
domain: "Analysis Model"
element_id: 865525
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 {MOD} GetAccountDataDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/UMC/AccountWS

## 📝 Notes

This is XML representation of selected attributes of an Account.

## 🔗 Connections (1)

- ← Dependency: [[GetAccountDataResponse]]

## 📊 Appears In (1 diagrams)

- Logical: AccountWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountID | AccountIdTypeDto |  |
| login | string |  |
| employeeCode | string |  |
| firstName | string |  |
| middleName | string |  |
| lastName | string |  |
| email | string |  |
| phoneNumber | number(16) |  |
| mobileNumber | number(16) |  |
| description | string |  |
| employeePosition | string |  |
| employeeType | string |  |
| employedSince | Date |  |
| employedUntil | Date |  |
| isApprover | bool |  |
| roles | Role |  |
| languages | Language |  |
| department | string |  |
| umcAccountRole | string |  |
| approver | AccountIdTypeDto |  |
| VAB | int |  |
| NAB | int |  |
| blocked | bool |  |
| status | string |  |
| {DEL} salesAreaCodes | string |  |
