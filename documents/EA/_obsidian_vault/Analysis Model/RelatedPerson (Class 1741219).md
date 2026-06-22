---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided notification messages/Asynchronous Message/LoanApplicationData/LoanApplicationData_v2"
domain: "Analysis Model"
element_id: 1741219
diagrams: 1
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 RelatedPerson

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided notification messages/Asynchronous Message/LoanApplicationData/LoanApplicationData_v2

## 📝 Notes

Loan application data related to the related person.

## 🔗 Connections (6)

- → Dependency: [[RelatedPersonAddress (Class 1741224)]]
- → Dependency: [[Document (Class 1741220)]]
- → Dependency: [[Contact (Class 1741225)]]
- ← Dependency: [[Application (Class 1741217)]]
- → Dependency: [[Employment (Class 1741214)]]
- → Dependency: [[Remittance (Class 1741213)]]

## 📊 Appears In (1 diagrams)

- Logical: LoanApplicationData_v2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| XSDelementAttributes |  |  |
| addresses | RelatedPersonAddress |  |
| contacts | Contact |  |
| documents | Document |  |
| employment | Employment |  |
| remittance | Remittance |  |
