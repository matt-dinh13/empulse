---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/Insurance Program Services/Operations/Getting Insurance Program data"
domain: "Modules"
element_id: 1705466
diagrams: 4
connections: 7
tags:
  - class
  - modules
---

# 🔷 InsuranceProgramDetail

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/Insurance Program Services/Operations/Getting Insurance Program data

## 📝 Notes

A structure of the Insurance Program

returned for projection = (EXTENDED || FULL)

## 🔗 Connections (7)

- → Dependency: [[RegisterInclusionType]]
- → Usage: [[EligibilityDefinition (Class 1705464)]]
- → Usage: [[{ADD}CustomDataDefinition_v2]]
- → Usage: [[InsuranceProvider]]
- → Dependency: [[RevenueShareType]]
- → Usage: [[InsuranceContractCodeType]]
- ← Dependency: [[InsurancePrograms (Interface 1705474)]]

## 📊 Appears In (4 diagrams)

- Logical: Getting Insurance Program data v1
- Logical: Getting Insurance Programs v1
- Logical: InsuranceProgramDetail response
- Logical: Schema definitions

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | string |  |
| description | string |  |
| insuranceProvider | InsuranceProvider |  |
| versionStatus | string |  |
| subjectType | string |  |
| revenueShareDef | RevenueShareType |  |
| customDataDefinitions | {ADD}CustomDataDefinition_v2 |  |
| registerInclusionDef | RegisterInclusionType |  |
| eligibilityDefinition | EligibilityDefinition |  |
| externalId | string |  |
| contractCodeDef | InsuranceContractCodeType |  |
| contractType | string |  |
| validFrom | dateTime |  |
| validTo | dateTime |  |
