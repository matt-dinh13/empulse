---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product"
domain: "Analysis Model"
element_id: 1822839
diagrams: 1
connections: 5
tags:
  - requirement
  - analysis-model
---

# 📋 Paperless salesroom

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product

## 📝 Notes

If Salesroom.Paperless = TRUE (the experimental feature code PAPERLESS must be retrieved from HOMESIS REST API GET ( https://{environment}/homesis/restful/salesrooms/{salesroomCode}/experimentalfeatures)), then the salesroom is paperless.

## 🔗 Connections (5)

- ← Dependency: [[Contract is signed]]
- ← Dependency: [[01.421 Create application DDM (UseCase 1818674)]]
- ← Dependency: [[Create documents for new application DDM automatically]]
- ← Dependency: [[01.087 Print consent (UseCase 1821366)]]
- ← Dependency: [[{MOD}01.187 Sign contract]]

## 📊 Appears In (1 diagrams)

- Custom: Product business rules
