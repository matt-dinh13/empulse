---
type: Requirement
stereotype: "requirement"
package: "HomerSelect/BSL/Modules/CEL Account (CELA)/Analytical model/DDM validation/Business rules"
domain: "Modules"
element_id: 1798545
diagrams: 3
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {ADD}Flag contract with extended property of type DDM

> **Type**: Requirement · **Stereotype**: «requirement»
> **Package**: HomerSelect/BSL/Modules/CEL Account (CELA)/Analytical model/DDM validation/Business rules

## 📝 Notes

{CLM-5321/}

input:

	
- DDM code
	
- extended property value



	
- System calls BSL REST API getDDM with DDM code from input.
	
- {DEL CLM-5365}System calls COMA REST API getExtendedProperties endpoint with contract code from call above to find out if extended property of type "DDM" exists on given contract.
	
- If so, then{/DEL} system calls COMA REST API updateContractExtendedProperty endpoint to update contract extended property of DDM type to value given on input.
	
- {DEL CLM-5365}If not, then system calls COMA REST API createContractExtendedProperty endpoint to create contract extended property of DDM type to value given on input. This fails with error 400 'CONTRACT_EXTENDED_PROPERTY_ALREADY_EXISTS' if given property gets created inbetween time in the rare case of a delayed/concurrent call from the Process contract change UC on ContractSigned Kafka event.{/DEL}

## 🔗 Connections (2)

- → Dependency «use»: [[COMA (Actor 1798540)]]
- ← Dependency «use»: [[{MOD}Check DDM account]]

## 📊 Appears In (3 diagrams)

- Custom: Business rules
- Custom: CBL-19085 (CLM-5321) DDM validation - test & document
- Use Case: DDM validation
