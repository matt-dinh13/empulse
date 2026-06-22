---
type: Requirement
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/PH"
domain: "Analysis Model"
element_id: 1814010
diagrams: 2
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Processing remmiter's contact type

> **Type**: Requirement
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/PH

## 📝 Notes

{DEL LOR-9883}If switch useRemittandPhone is false, {/DEL}system

	
- first uses contact type PHONE
	
- when that is not found, system uses contact type REMITTAND_PHONE and converts it to PHONE.

{DEL LOR-9883}Otherwise (switch is true), system uses only REMITTAND_PHONE as is.{/DEL}

## 🔗 Connections (3)

- ← Dependency: [[Specific attribute processing]]
- ← Dependency: [[Mapping CIF data to application form-PH]]
- ← Dependency: [[Application form construction]]

## 📊 Appears In (2 diagrams)

- Custom: Business rules - PH
- Custom: LOR-9883 Remove obsolete switches related to applicant
