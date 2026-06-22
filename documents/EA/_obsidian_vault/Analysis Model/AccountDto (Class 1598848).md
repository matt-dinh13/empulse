---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardInfoWS/CardInfoWS_v1/Types"
domain: "Analysis Model"
element_id: 1598848
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 AccountDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardInfoWS/CardInfoWS_v1/Types

## 🔗 Connections (4)

- → Dependency: [[AccountTypeDto (Enumeration 1598829)]]
- → Dependency: [[ContractCode (Class 1601406)]]
- ← Dependency: [[CardDto (Class 1598844)]]
- → Dependency: [[CurrencyCodeType (Class 1601402)]]

## 📊 Appears In (2 diagrams)

- Logical: CardInfoWS - types
- Logical: CardInfoWS.GetCard

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| currency | CurrencyCodeType |  |
| contractCode | contractCode |  |
| contractSignatureDate | date |  |
| iban | string |  |
| ownerCuid | long |  |
| number | long |  |
| type | AccountTypeDto |  |
