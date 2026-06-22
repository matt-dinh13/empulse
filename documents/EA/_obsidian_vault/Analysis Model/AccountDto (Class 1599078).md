---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v3"
domain: "Analysis Model"
element_id: 1599078
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 AccountDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v3

## 📝 Notes

LDM:
Contract.IBAN

## 🔗 Connections (4)

- → Dependency: [[CurrencyCodeType (Class 1599094)]]
- → Dependency: [[ContractCode (Class 1599089)]]
- → Dependency: [[AccountTypeDto (Enumeration 1599076)]]
- ← Dependency: [[PreparePersonalizedCardRequest]]

## 📊 Appears In (1 diagrams)

- Logical: CardOriginationWS.PreparePersonalizedCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | ContractCode |  |
| currency | CurrencyCode |  |
| iban | string |  |
| number | long |  |
| type | AccountTypeDto |  |
| ownerCuid | long |  |
| contractSignatureDate | date |  |
