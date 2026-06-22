---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1347 (CBL-3618) Automate outgoing payment orders generation"
domain: "Requirements Model"
element_id: 1527596
diagrams: 2
connections: 3
tags:
  - class
  - requirements-model
---

# 🔷 GetOutgoingPaymentsByCriteriaResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1347 (CBL-3618) Automate outgoing payment orders generation

## 📝 Notes

{ADD CBL-3618 PAYM-1347}

## 🔗 Connections (3)

- ← Dependency: [[OutgoingPaymentsWS (Interface 1527586)]]
- → Association: [[GetOutgoingPaymentListResultTypeDto]]
- → Realisation: [[New XSD OutgoingPaymentWS.GetOutgoingPaymentListExtResponse]]

## 📊 Appears In (2 diagrams)

- Custom: PAYM-1347 (CBL-3618) Automate outgoing payment orders generation
- Logical: OutgoingPaymentsWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| outgoingPayments | SimpleOutgoingPaymentDto |  |
| result | GetOutgoingPaymentsForContractResultTypeDto |  |
