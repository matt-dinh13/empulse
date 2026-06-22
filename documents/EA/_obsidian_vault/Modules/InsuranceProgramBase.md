---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-8512 (CSI-13) CLM Modularization - Insurance Program functionalities/CSI-769 INSR - Custom data validation API"
domain: "Modules"
element_id: 1657846
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 InsuranceProgramBase

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-8512 (CSI-13) CLM Modularization - Insurance Program functionalities/CSI-769 INSR - Custom data validation API

## 📝 Notes

A basic (short) structure of the Insurance Program

## 🔗 Connections (2)

- ← Dependency: [[InsurancePrograms]]
- → Usage: [[{ADD}CustomDataDefinition_v2]]

## 📊 Appears In (1 diagrams)

- Logical: CSI-769 INSR - Custom data validation API

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | string |  |
| description | string |  |
| insuranceProvider | InsuranceProvider |  |
| versionStatus | string |  |
| subjectType | string |  |
| customDataDefinitions | {ADD}CustomDataDefinition_v2 |  |
| eligibilityDefinitions | EligibilityDefinition |  |
| externalId | string |  |
