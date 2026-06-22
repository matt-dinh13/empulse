---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Logical Data Model"
domain: "Analysis Model"
element_id: 1750948
diagrams: 4
connections: 18
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}Employment

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Logical Data Model

## 📝 Notes

Information about actual client employment

## 🔗 Connections (18)

- ← Dependency: [[Due Date Algorithm Parameters]]
- → Dependency: [[CustomerEmployment]]
- → Aggregation: [[{MOD}Client Snapshot]]
- → Dependency: [[CustomerEmployment]]
- → Dependency: [[Employment Type]]
- → Dependency: [[Salary frequency (Class 1758717)]]
- → Dependency: [[CustomerEmployment]]
- → Dependency: [[CustomerEmployment]]
- → Dependency: [[CustomerEmployment]]
- → Dependency: [[CustomerEmployment]]
- → Dependency: [[Profession (Enumeration 1758713)]]
- → Dependency: [[CustomerEmployment]]
- → Dependency: [[Salary payment method (Enumeration 1758702)]]
- → Aggregation: [[Additional Person]]
- → Dependency: [[Economical Status]]
- → Dependency: [[CustomerEmployment]]
- → Dependency: [[CustomerEmployment]]
- → Association: [[Employer (Class 1750943)]]

## 📊 Appears In (4 diagrams)

- Logical: Address - CORE
- Logical: Client management
- Logical: Common - Person
- Logical: Enumerations

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Course | KeyOrValue Type |  |
| Salary Frequency | SalaryFrequency |  |
| Employed from | Date |  |
| Department | Text(60) |  |
| Economical status | Economical Status |  |
| Employment type | Employment Type |  |
| Profession | KeyValueField |  |
| Salary Day | Day of month |  |
| Salary Payment Method | Salary payment method |  |
| Total Work Experience | Number (2,0) |  |
| Remitter Occupancy | Industry |  |
