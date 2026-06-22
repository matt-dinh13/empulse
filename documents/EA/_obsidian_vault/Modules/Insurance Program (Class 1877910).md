---
type: Class
stereotype: "versioned"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program management/Logical Data Model"
domain: "Modules"
element_id: 1877910
diagrams: 2
connections: 12
tags:
  - class
  - modules
---

# 🔷 Insurance Program

> **Type**: Class · **Stereotype**: «versioned»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program management/Logical Data Model

## 📝 Notes

Insurance program agreed with insurance company. It serves as a base for definition of insurance services which will be linked to loan products.
Insurance program is versioned entity.

## 🔗 Connections (12)

- → Dependency: [[Insurance Contract Type (Class 1877921)]]
- → Dependency: [[Insurance Subject Type (Class 1877911)]]
- → Dependency: [[Revenue Share Base (Class 1877916)]]
- → Dependency: [[Register Inclusion Frequency (Class 1877917)]]
- ← Aggregation: [[Insurance Eligibility Criteria (Class 1877915)]]
- → Dependency: [[Insurance Contract Numbering (Class 1877919)]]
- ← Aggregation: [[Insurance Custom Data Def (Class 1877913)]]
- → Dependency: [[Insurance Partner]]
- → Dependency: [[Revenue Share Frequency (Class 1877907)]]
- → Dependency: [[Register Inclusion Date Calculation (Class 1877906)]]
- → Dependency: [[Rounding (Enumeration 1877905)]]
- → Generalization: [[Insurance Program Versioned entity (Class 1877904)]]

## 📊 Appears In (2 diagrams)

- Logical: Insurance Program versions
- Logical: Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Text |  |
| Name | Text |  |
| Description | Text |  |
| Valid From | Date |  |
| Valid To | Date |  |
| Contract Number Prefix | Text |  |
| Contract Number Suffix | Text |  |
| Contract Numbering | Insurance Contract Numbering |  |
| Contract Type | Insurance Contract Type |  |
| Fixed Contract Number | Text |  |
| Register Inclusion Date | Register Inclusion Date Calculation |  |
| Register Inclusion Date Offset | int |  |
| Register Inclusion Frequency | Register Inclusion Frequency |  |
| Revenue Share | Percentage |  |
| Revenue Share Base | Revenue Share Base |  |
| Revenue Share Frequency | Revenue Share Frequency |  |
| Revenue Share Rounding | Rounding |  |
| Revenue Share Scale | Rounding Scale Type |  |
| Subject Type | Insurance Subject Type |  |
| Partner | Insurance Partner |  |
