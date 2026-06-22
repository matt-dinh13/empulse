---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/OutgoingPaymentsWS"
domain: "Analysis Model"
element_id: 1527585
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 CreateOutgoingPaymentAttributeDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/OutgoingPaymentsWS

## 📝 Notes

{ADD CBL-2620 PAYM-1290 /}
Additional attribute, e.g. for insurance payments.
Details of supported keys find in the UC for request processing.

## 🔗 Connections (1)

- ← Dependency: [[{ADD}CreateOutgoingPaymentRequest]]

## 📊 Appears In (1 diagrams)

- Logical: OutgoingPaymentsWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| key | string |  |
| value | string |  |
