---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_GENERAL_TYPES"
domain: "Analysis Model"
element_id: 1878239
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 PaymentChannelComplexType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_GENERAL_TYPES

## 🔗 Connections (2)

- ← Dependency «use»: [[PaymentChannelsType (Class 1878238)]]
- → Dependency «use»: [[BankAccountType]]

## 📊 Appears In (1 diagrams)

- Logical: HO_GENERAL_TYPES

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| bankAccount | BankAccountType |  |
| purpose | string |  |
| type | string |  |
| sourceType | string |  |
