---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/Product"
domain: "Analysis Model"
element_id: 1787139
diagrams: 2
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Min number of documents

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/Product

## 📝 Notes

If product is selected, all conditions of document containers for selected product must be met - applicable document containers are got according to the rule Get document containers for applicable client scoring segment. Otherwise NECESSARY_DOCUMENTS_MISSING appears.

In case no product was selected, count of document types=ID_DOC in AF must be equal or higher then global parameter ValidateMinCountOfPrimDoc(BL_VALIDATE_MIN_PRIM_IDENT_CNT). Otherwise MSG_MIN_PRIMARY_DOCUMENTS_COUNT appears.

## 🔗 Connections (3)

- ← Dependency: [[Application validation rule (Requirement 1773433)]]
- ← Dependency: [[Min number of documents (Action 1787175)]]
- → Dependency: [[Get document containers for applicable client scoring segment]]

## 📊 Appears In (2 diagrams)

- Custom: Product validation
- Custom: Validation Rules
