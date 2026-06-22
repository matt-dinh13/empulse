---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1347 (CBL-3618) Automate outgoing payment orders generation"
domain: "Requirements Model"
element_id: 1527593
diagrams: 3
connections: 3
tags:
  - class
  - requirements-model
---

# 🔷 GenerateOutgoingPaymentOrderResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1347 (CBL-3618) Automate outgoing payment orders generation

## 🔗 Connections (3)

- ← Dependency: [[OutgoingPaymentsWS (Interface 1527586)]]
- → Dependency: [[GenerateOutgoingPaymentOrderResponseResultTypeDto]]
- → Realisation: [[New XSD OutgoingPaymentsWS.CreateOutgoingPaymentOrderResponseExt]]

## 📊 Appears In (3 diagrams)

- Custom: PAYM-1347 (CBL-3618) Automate outgoing payment orders generation
- Logical: OutgoingPaymentsWS
- Logical: OutgoingPaymentsWS - generateOutgoingPaymentOrder

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| result | GenerateOutgoingPaymentOrderResponseResultTypeDto |  |
