---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Contract/Communication model"
domain: "Modules"
element_id: 1713640
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 {DEL}ContractCreditAccountResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Contract/Communication model

## 📝 Notes

{DEL CLM-5045/}

## 🔗 Connections (4)

- → Dependency: [[ContractNotificationResultType]]
- → Dependency «transformation»: [[CREDITACCOUNT210]]
- → Dependency: [[Processing ContractCreditAccountResponse message]]
- → Dependency «transformation»: [[RESULT290]]

## 📊 Appears In (1 diagrams)

- Logical: Contract credit account - Communication model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| messageID | string |  |
| resultCode | ContractNotificationResultType |  |
