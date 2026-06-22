---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/Insurance Program Services/Operations/Getting Eligibility definitions"
domain: "Modules"
element_id: 1705464
diagrams: 4
connections: 5
tags:
  - class
  - modules
---

# 🔷 EligibilityDefinition

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/Insurance Program Services/Operations/Getting Eligibility definitions

## 📝 Notes

A list of all eligibility rules defined in the Insurance Program

## 🔗 Connections (5)

- → Dependency: [[EligibleCommodity]]
- ← Usage: [[InsuranceProgramDetail]]
- → Dependency: [[IneligibleProfession]]
- ← Usage: [[InsuranceProgramBase (Class 1705452)]]
- ← Dependency: [[EligibilityDefinition (Interface 1705475)]]

## 📊 Appears In (4 diagrams)

- Logical: Getting Eligibility definitions v1
- Logical: InsuranceProgramBase response
- Logical: InsuranceProgramDetail response
- Logical: Schema definitions

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| insuranceProgramCode | string |  |
| eligibleCommodities | EligibleCommodity |  |
| insuranceProgramVersion | int |  |
| maxAgeFemale | int |  |
| maxAgeMale | int |  |
| minAge | int |  |
| maxSumInsuredClient | money |  |
| maxSumInsuredContract | money |  |
| ineligibleProfessions | IneligibleProfession |  |
