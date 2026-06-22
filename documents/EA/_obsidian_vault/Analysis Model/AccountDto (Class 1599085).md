---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v3/Types"
domain: "Analysis Model"
element_id: 1599085
diagrams: 3
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 AccountDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v3/Types

## 🔗 Connections (5)

- → Dependency: [[ContractCode (Class 1599089)]]
- → Dependency: [[CurrencyCodeType (Class 1599094)]]
- → Dependency: [[AccountTypeDto (Enumeration 1599076)]]
- ← Dependency: [[CreatePersonalizedCardRequest (Class 1599065)]]
- ← Dependency: [[ConfirmInstantCardRequest (Class 1599061)]]

## 📊 Appears In (3 diagrams)

- Logical: CardOriginationWS - types
- Logical: CardOriginationWS.ConfirmInstantCard
- Logical: CardOriginationWS.CreatePersonalizedCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| number | long |  |
| ownerCuid | long |  |
| currency | CurrencyCodeType |  |
| contractSignatureDate | date |  |
| type | AccountTypeDto |  |
| contractCode | contractCode |  |
| iban | string |  |
