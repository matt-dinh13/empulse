---
type: Interface
stereotype: "Resource"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PIF REST API/v1"
domain: "Analysis Model"
element_id: 1755720
diagrams: 2
connections: 13
tags:
  - interface
  - analysis-model
---

# 🔶 Customer Data

> **Type**: Interface · **Stereotype**: «Resource»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PIF REST API/v1

## 📝 Notes

{ADD CLM-2727 /}
CIF/PIF REST API resource for providing data about customers

## 🔗 Connections (13)

- → Usage: [[SearchCustomertDataResponse]]
- → Usage: [[GetCustomerDataRequest]]
- → Usage: [[SearchCustomerDataRequest]]
- → Usage: [[RemoveCustomerDataRequest]]
- → Usage: [[CreateCustomerDataRequest]]
- → Usage: [[CreateCustomerDataResponse]]
- ← Association: [[CIF_PIF (Class 1755754)]]
- → Usage: [[UpdateCustomerDataRequest]]
- → Usage: [[GetCustomerDataResponse]]
- → Usage: [[IdentificationCustomerDataResponse]]
- → Usage: [[RemoveCustomerDataResponse]]
- → Usage: [[IdentificationCustomerDataRequest]]
- → Usage: [[UpdateCustomerDataResponse]]

## 📊 Appears In (2 diagrams)

- Logical: Customer Data - Requests
- Logical: Customer Data - Responses
