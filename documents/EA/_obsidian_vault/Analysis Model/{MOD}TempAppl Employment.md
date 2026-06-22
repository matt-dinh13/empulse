---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Logical Data Model"
domain: "Analysis Model"
element_id: 1771491
diagrams: 2
connections: 12
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}TempAppl Employment

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Logical Data Model

## 📝 Notes

Employment information about the client as entered on application form.

## 🔗 Connections (11)

- → Dependency: [[Profession (Enumeration 1758713)]]
- → Dependency: [[University Course]]
- → Dependency: [[Industry (Enumeration 1758720)]]
- → Dependency: [[Employment Type]]
- → Dependency: [[Salary payment method (Enumeration 1758702)]]
- → Dependency: [[Economical Status]]
- → Dependency: [[Salary frequency (Class 1758717)]]
- ← Aggregation: [[TempAppl Contact]]
- ← Aggregation: [[TempAppl Address]]
- → Aggregation: [[{MOD}Temporary Application]]
- → Aggregation: [[TempAppl Person]]

## 📊 Appears In (2 diagrams)

- Logical: Temporary Application - overview
- Logical: Temporary Application - Person and Employment

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Course | KeyOrValue Type |  |
| Employment Residence Cum Office | Boolean |  |
| Employment Salary frequence | Salary Frequence |  |
| Employed from | Date |  |
| Name | KeyOrValue Type |  |
| Employer ID | Text |  |
| Employer Industry | Industry |  |
| Employment Department | Text(60) |  |
| Employment Economical status | Economical Status |  |
| Employment Profession | KeyOrValue Type |  |
| Employment Salary day | Day of month |  |
| Employment Salary payment method | Salary payment method |  |
| Employment Total work experience | Number |  |
| Employment Type | Employment Type |  |
| Employer Identification | Text |  |
| Occupation | Industry |  |
