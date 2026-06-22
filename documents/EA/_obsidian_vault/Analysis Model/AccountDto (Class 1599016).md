---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v2/Types"
domain: "Analysis Model"
element_id: 1599016
diagrams: 3
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 AccountDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v2/Types

## 🔗 Connections (5)

- ← Dependency: [[CreatePersonalizedCardRequest (Class 1598996)]]
- ← Dependency: [[ConfirmInstantCardRequest (Class 1598989)]]
- → Dependency: [[AccountTypeDto (Enumeration 1599024)]]
- → Dependency: [[CurrencyCodeType]]
- → Dependency: [[ContractCode (Class 1599015)]]

## 📊 Appears In (3 diagrams)

- Logical: CardOriginationWS - types
- Logical: CardOriginationWS.ConfirmInstantCard
- Logical: CardOriginationWS.CreatePersonalizedCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| type | AccountTypeDto |  |
| contractCode | contractCode |  |
| contractSignatureDate | date |  |
| ownerCuid | long |  |
| currency | CurrencyCodeType |  |
| iban | string |  |
| number | long |  |
