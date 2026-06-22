---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/Insurance Program Services/Schema definitions"
domain: "Modules"
element_id: 1705452
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 InsuranceProgramBase

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/Insurance Program Services/Schema definitions

## 📝 Notes

A basic (short) structure of the Insurance Program

returned for projection = (no projection || CUSTOM_DATA || ELIGIBILITY)

## 🔗 Connections (4)

- → Usage: [[InsuranceProvider]]
- → Usage: [[EligibilityDefinition (Class 1705464)]]
- → Usage: [[{ADD}CustomDataDefinition_v2]]
- ← Dependency: [[InsurancePrograms (Class 1705469)]]

## 📊 Appears In (1 diagrams)

- Logical: InsuranceProgramBase response

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
| externalId | string |  |
| eligibilityDefinition | EligibilityDefinition |  |
