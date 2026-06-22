---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Prefill application/Business Rules"
domain: "Analysis Model"
element_id: 1738963
diagrams: 3
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Mapping CLIENT_SEARCH data to application form

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Prefill application/Business Rules

## 📝 Notes

This rule describes how client data from Initial client search screen are mapped to fields in application form:
- if client is found, CUID is encoded accroding to rule X-sell code encoding and saved to Temporary_Application.X-sell_offer_code

## 🔗 Connections (3)

- → Dependency: [[Search client]]
- → Dependency: [[X-sell code encoding]]
- ← Dependency: [[Prefill application form]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: Client search
- Custom: Product business rules
