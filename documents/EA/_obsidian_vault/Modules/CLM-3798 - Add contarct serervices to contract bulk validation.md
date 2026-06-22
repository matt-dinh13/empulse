---
type: Requirement
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-11068/CLM-3798 - Add new types of validation - serviceAssigned, serviceNotAssigned"
domain: "Modules"
element_id: 1800845
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 CLM-3798 - Add contarct serervices to contract bulk validation

> **Type**: Requirement
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-11068/CLM-3798 - Add new types of validation - serviceAssigned, serviceNotAssigned

## 📝 Notes

serviceAssigned

	
- input: serviceCode (mandatory), serviceVersion (optional)
	
- validation: Contract must have ContractService with serviceCode from input and serviceVersion from input (if used)


serviceNotAssigned

	
- input: serviceCode (mandatory), serviceVersion (optional)
	
- validation: Contract must not have ContractService with serviceCode from input and serviceVersion from input (if used)


implement automated tests for API
prepare technical COMA user for integration with other systems

## 📊 Appears In (1 diagrams)

- Custom: CBL-11068 (CLM-3798) - Add new types of validation - serviceAssigned, serviceNotAssigned
