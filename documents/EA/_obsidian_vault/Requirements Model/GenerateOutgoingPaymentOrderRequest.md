---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1347 (CBL-3618) Automate outgoing payment orders generation"
domain: "Requirements Model"
element_id: 1527590
diagrams: 3
connections: 6
tags:
  - class
  - requirements-model
---

# 🔷 GenerateOutgoingPaymentOrderRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1347 (CBL-3618) Automate outgoing payment orders generation

## 🔗 Connections (6)

- ← Dependency: [[OutgoingPaymentsWS (Interface 1527586)]]
- → Dependency: [[{ADD}GeneralBankAccountDataDto]]
- → Association: [[GeneralBankAccountDataDto]]
- → Dependency: [[OutgoingPaymentTypeDto]]
- → Association: [[SimpleOutgoingPaymentDto]]
- → Realisation: [[New XSD OutgoingPaymentsWS.CreateOutgoingPaymentOrderRequestExt]]

## 📊 Appears In (3 diagrams)

- Custom: PAYM-1347 (CBL-3618) Automate outgoing payment orders generation
- Logical: OutgoingPaymentsWS
- Logical: OutgoingPaymentsWS - generateOutgoingPaymentOrder

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | int |  |
| hcBankAccount | GeneralBankAccountDataDto |  |
| outgoingPaymentType | OutgoingPaymentTypeDto |  |
| amount | moneyAmountType |  |
