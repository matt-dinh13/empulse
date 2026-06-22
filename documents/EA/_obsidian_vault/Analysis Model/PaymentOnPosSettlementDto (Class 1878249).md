---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_GENERAL_TYPES"
domain: "Analysis Model"
element_id: 1878249
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 PaymentOnPosSettlementDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_GENERAL_TYPES

## 🔗 Connections (2)

- ← Dependency «use»: [[PaymentOnPosSettlementsDto]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]

## 📊 Appears In (1 diagrams)

- Logical: HO_GENERAL_TYPES

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| paymentDataExchangeID | string |  |
| transactionNumber | string |  |
| amount | MoneyType |  |
| clientsName | string |  |
| contractCode | string |  |
| collectedWhen | dateTime |  |
| collectedByPosCode | string |  |
| collectedByPosName | string |  |
