---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19416 (CSI-2295) Cancellation Functionality of Joint Lending VAS"
domain: "Requirements Model"
element_id: 1833416
diagrams: 16
connections: 10
tags:
  - requirement
  - requirements-model
---

# 📋 Get Service definition from Services

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19416 (CSI-2295) Cancellation Functionality of Joint Lending VAS

## 📝 Notes

This rule describes how to get a Service by its identifier from the Product Services

Input: -- array of service codes and versions is possible

	
- Service1.serviceCode:serviceVersion
	
- Service2.serviceCode:serviceVersion (optional)


Output:

	
- ServiceDefinition [NewService, ReplacedService]object || an error


Steps:

	
- System calls PRC GET .../services/{Service1, (Service2)} with deps = PARAMETERS, SERVICE_TYPE_FLAGS -- get Service parameters definition
	
- System returns result into the output

## 🔗 Connections (10)

- ← Dependency: [[{MOD}Check conditions to insurance cancellation]]
- ← Dependency: [[{MOD}Check conditions to insurance termination]]
- ← Dependency: [[{MOD}Check for an active insurance existence]]
- ← Dependency: [[11.147 Activate insurance on contract]]
- ← Dependency: [[{MOD}Calculation of Loan Service parameters]]
- ← Dependency: [[{MOD}11.775 Activate Standalone Insurance on Cash Loan disbursement]]
- ← Dependency: [[{MOD}08.349 Generate Insurance offer preview]]
- ← Dependency: [[08.345 Add Insurance on Contract (UseCase 1879841)]]
- ← Dependency: [[{MOD}08.347 Add Insurance service on Contract service]]
- ← Dependency: [[{MOD}01.774 Create Contract Service]]

## 📊 Appears In (16 diagrams)

- Custom: CBL-19416 (CSI-2295) Cancellation Functionality of Joint Lending VAS
- Custom: CBL-19520 (CSI-2290) Apply feature [Replace service] in Bulk assignment for Payment Service
- Custom: CSI-1904 Update of the Terminate insurance method for new Service Catalogue
- Custom: CSI-1905 Update of the Cancel Insurance method for new Service Catalogue
- Use Case: Activate Insurance on related CL Contract disbursement
- Use Case: Adding Insurance Service on CEL contract
- Use Case: Adding Insurance Service on REL contract
- Use Case: Adding Insurance Service on REL contract method
- Use Case: Change LoanService status on defined Account Closure notifications
- Use Case: Changing insurance operation status
- Use Case: CLM-6044 Activate Insurance on related CL Contract disbursement
- Use Case: Contract Service replacement (flip)
- Use Case: Insurance Service Offers API - Use Case Model
- Use Case: Insurance Service Offers UI - Use Case Model
- Use Case: Loan Service - Add a Service to Contract
- Use Case: Processing Account Closure notifications
