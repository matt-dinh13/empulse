---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_GENERAL_TYPES"
domain: "Analysis Model"
element_id: 1878226
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 PaymentType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_GENERAL_TYPES

## 🔗 Connections (3)

- ← Dependency «use»: [[PaymentsType]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]

## 📊 Appears In (1 diagrams)

- Logical: HO_GENERAL_TYPES

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| amount | MoneyType |  |
| paymentDate | dateTime |  |
| paymentChannel | string |  |
| splitedAmount | MoneyType |  |
| depositDate | dateTime |  |
| pairingDate | dateTime |  |
| unpairingDate | dateTime |  |
| dataExchangeId | string |  |
