---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1347 (CBL-3618) Automate outgoing payment orders generation"
domain: "Requirements Model"
element_id: 1529399
diagrams: 2
connections: 2
tags:
  - enumeration
  - requirements-model
---

# 📝 GetOutgoingPaymentListResultTypeDto

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1347 (CBL-3618) Automate outgoing payment orders generation

## 📝 Notes

{ADD CBL-3618 PAYM-1347}

## 🔗 Connections (2)

- ← Association: [[GetOutgoingPaymentsByCriteriaResponse]]
- → Dependency: [[Request result enumeration]]

## 📊 Appears In (2 diagrams)

- Custom: PAYM-1347 (CBL-3618) Automate outgoing payment orders generation
- Logical: OutgoingPaymentsWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| OTHER_ERROR |  |  |
| SUCCESS |  |  |
| NO_PAYMENT_FOUND |  |  |
| NO_ORIGINATION_SALESROOM_FOUND |  |  |
| NO_ADDRESSED_SALESROOM_FOUND |  |  |
| INVALID_OUTGOING_PAYMENT_TYPE |  |  |
| INVALID_OUTGOING_PAYMENT_STATUS |  |  |
