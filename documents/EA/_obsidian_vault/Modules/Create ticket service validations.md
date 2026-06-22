---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/COMMON for Ticketing/Validation rule definitions"
domain: "Modules"
element_id: 1799352
diagrams: 2
connections: 15
tags:
  - requirement
  - modules
---

# 📋 Create ticket service validations

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/COMMON for Ticketing/Validation rule definitions

## 📝 Notes

Set of validation rules for UC 10.022 Create ticket service:

	
- Type validation
	
- Priority validation
	
- Description validation
	
- Department validation
	
- ContractCode validation
	
- ArrangedOnSalesroom validation
	
- ArrangedBy validation
	
- DocumentExternalId validation
	
- communicationRecordCode validation
	
- ContractSupplementCode validation
	
- ContractPackageCode validation
	
- TypeSpecification validation


	
- {ADD CLM-1492}CustomerCode validation{/ADD}

## 🔗 Connections (15)

- → Dependency: [[DocumentExternalId validation]]
- → Dependency: [[ContractCode validation]]
- → Dependency: [[ArrangedBy validation]]
- → Dependency: [[communicationRecordCode validation]]
- → Dependency: [[Type validation]]
- → Dependency: [[TypeSpecification validation]]
- → Dependency: [[ContractSupplementCode validation]]
- → Dependency: [[DocumentTypeCode validation (Action 1800364)]]
- → Dependency: [[ContractPackageCode validation]]
- → Dependency: [[Description validation]]
- → Dependency: [[CustomerCode validation]]
- → Dependency: [[Department validation]]
- → Dependency: [[ArrangedOnSalesroom validation]]
- → Dependency: [[Priority validation]]
- ← Dependency: [[{MOD}10.022 Create ticket service]]

## 📊 Appears In (2 diagrams)

- Custom: Validation rules
- Use Case: Ticket creation - Use Case Model
