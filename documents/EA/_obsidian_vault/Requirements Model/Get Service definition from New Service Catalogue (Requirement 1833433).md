---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination/Update BSL Contract Service methods/CSI-1904 Update of the Terminate insurance method for new Service Catalogue"
domain: "Requirements Model"
element_id: 1833433
diagrams: 9
connections: 6
tags:
  - requirement
  - requirements-model
---

# 📋 Get Service definition from New Service Catalogue

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16736 (CSI-1550) EMI Card - VAS as a service -Termination/Update BSL Contract Service methods/CSI-1904 Update of the Terminate insurance method for new Service Catalogue

## 📝 Notes

This rule describes how to get a Service by its identifier from the new Service Catalogue

Input:

	
- serviceCode

Output:

	
- ServiceDefinition object || an error


Steps:

	
- System calls PRC GET .../openapi/v1/sc-services/{serviceCode}?deps=PARAMETERS
	
- System returns result into the output

## 🔗 Connections (6)

- ← Dependency: [[{MOD}Check conditions to insurance cancellation]]
- ← Dependency: [[{MOD}Check conditions to insurance termination]]
- ← Dependency: [[11.147 Activate insurance on contract]]
- ← Dependency: [[08.010 Add Service to Loan (COS) (UseCase 1876285)]]
- ← Dependency: [[{MOD}08.347 Add Insurance service on Contract service]]
- ← Dependency: [[{MOD}01.774 Create Contract Service]]

## 📊 Appears In (9 diagrams)

- Custom: CSI-1904 Update of the Terminate insurance method for new Service Catalogue
- Custom: CSI-1905 Update of the Cancel Insurance method for new Service Catalogue
- Use Case: Adding Insurance Service on CEL contract
- Use Case: Adding Insurance Service on REL contract
- Use Case: Adding Insurance Service on REL contract method
- Use Case: Change LoanService status on defined Account Closure notifications
- Use Case: Changing insurance operation status
- Use Case: Loan Service - Add a Service to Contract
- Use Case: Processing Account Closure notifications
