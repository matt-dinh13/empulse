---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v1/Types"
domain: "Analysis Model"
element_id: 1598947
diagrams: 3
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 AccountDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v1/Types

## 🔗 Connections (5)

- ← Dependency: [[ConfirmInstantCardRequest (Class 1598960)]]
- ← Dependency: [[CreatePersonalizedCardRequest (Class 1598963)]]
- → Dependency: [[AccountTypeDto (Enumeration 1598944)]]
- → Dependency: [[CurrencyCodeType (Class 1598945)]]
- → Dependency: [[ContractCode (Class 1598946)]]

## 📊 Appears In (3 diagrams)

- Logical: CardOriginationWS - types
- Logical: CardOriginationWS.ConfirmInstantCard
- Logical: CardOriginationWS.CreatePersonalizedCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| number | long |  |
| ownerCuid | long |  |
| type | AccountTypeDto |  |
| iban | string |  |
| currency | CurrencyCodeType |  |
| contractSignatureDate | date |  |
| contractCode | contractCode |  |
