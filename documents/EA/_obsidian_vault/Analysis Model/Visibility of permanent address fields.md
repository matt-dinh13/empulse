---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Payment information - product AF/Card information"
domain: "Analysis Model"
element_id: 1822823
diagrams: 3
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Visibility of permanent address fields

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Payment information - product AF/Card information

## 📝 Notes

If checkbox Permanent address is different from contact address is not checked, then value for secondary address is not available in Card delivery type field (i.e. CUSTOMER_PERMANENT or CUSTOMER_CONTACT).

See country specific modifications:

	
- PH - Visibility of permanent address fields - PH

## 🔗 Connections (3)

- ← Dependency: [[Permanent address is different from contact address]]
- ← Dependency: [[Card delivery type (GUIElement 1716428)]]
- ← Generalization: [[Visibility of permanent address fields - PH]]

## 📊 Appears In (3 diagrams)

- Custom: Card information - product AF
- Custom: Primary contact address - product AF
- Custom: Product business rules
