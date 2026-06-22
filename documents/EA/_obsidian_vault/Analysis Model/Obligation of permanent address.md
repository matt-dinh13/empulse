---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/IN"
domain: "Analysis Model"
element_id: 1686096
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Obligation of permanent address

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/IN

## 📝 Notes

If value of field Contact address house type is "Hostel”, “Paying guest", "Shared rented" or "Rented" , then checkbox Permanent address is different the contact address is checked and read-only and section permanent address is visible and mandatory to fill.

When user afterwards changes Contact address house type to a different type than "Hostel”, “Paying guest", "Shared rented" or "Rented" , checkbox Permanent address is different from contract address will remain checked but will be editable (permanent address will not be deleted).

## 🔗 Connections (2)

- ← Dependency: [[Permanent address is differentfrom contact address (GUIElement 1107109)]]
- ← Dependency: [[House type (GUIElement 1724581)]]

## 📊 Appears In (1 diagrams)

- Custom: IN - Business rules
