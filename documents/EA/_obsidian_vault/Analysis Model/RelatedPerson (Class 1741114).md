---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided notification messages/Asynchronous Message/LoanApplicationData/LoanApplicationData_v1"
domain: "Analysis Model"
element_id: 1741114
diagrams: 1
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 RelatedPerson

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided notification messages/Asynchronous Message/LoanApplicationData/LoanApplicationData_v1

## 📝 Notes

Loan application data related to the related person.

## 🔗 Connections (6)

- → Dependency: [[RelatedPersonAddress (Class 1741120)]]
- → Dependency: [[Contact (Class 1741129)]]
- → Dependency: [[Remittance (Class 1741119)]]
- → Dependency: [[Document (Class 1741125)]]
- ← Dependency: [[Application (Class 1741110)]]
- → Dependency: [[Employment (Class 1741109)]]

## 📊 Appears In (1 diagrams)

- Logical: LoanApplicationData_v1

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| XSDelementAttributes |  |  |
| addresses | RelatedPersonAddress |  |
| contacts | Contact |  |
| documents | Document |  |
| employment | Employment |  |
| remittance | Remittance |  |
