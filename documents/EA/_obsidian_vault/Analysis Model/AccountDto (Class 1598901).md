---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardInfoWS/CardInfoWS_v2/Types"
domain: "Analysis Model"
element_id: 1598901
diagrams: 3
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 AccountDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardInfoWS/CardInfoWS_v2/Types

## 🔗 Connections (4)

- → Dependency: [[ContractCode (Class 1598907)]]
- → Dependency: [[CurrencyCodeType (Class 1598895)]]
- → Dependency: [[AccountTypeDto (Enumeration 1598892)]]
- ← Dependency: [[CardDto (Class 1598883)]]

## 📊 Appears In (3 diagrams)

- Logical: CardInfoWS - types
- Logical: CardInfoWS.GetCard
- Logical: CardInfoWS.GetCards

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ownerCuid | long |  |
| contractCode | contractCode |  |
| contractSignatureDate | date |  |
| currency | CurrencyCodeType |  |
| number | long |  |
| iban | string |  |
| type | AccountTypeDto |  |
