---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Services (COS_NG)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1868222
diagrams: 11
connections: 9
tags:
  - requirement
  - modules
---

# 📋 Get Service definition from New Service Catalogue (COS)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Services (COS_NG)/Analytical Model/Use Case Model

## 📝 Notes

This rule describes how to get a Service by its identifier from the new Service Catalogue

Input:

	
- serviceCode

Output:

	
- ServiceDefinition object || an error


Steps:

	
- System calls PRC GET .../openapi/v1/sc-services/{serviceCode}?deps=PARAMETERS
	
- System returns result into the output

## 🔗 Connections (9)

- ← Dependency: [[08.020 Activate Loan Service (COS) (UseCase 1876290)]]
- ← Dependency: [[08.040 Terminate Loan Service (COS) (UseCase 1876289)]]
- ← Dependency: [[08.030 Deactivate Loan Service method (COS) (UseCase 1876286)]]
- ← Dependency: [[08.010 Add Service to Loan (COS) (UseCase 1876285)]]
- ← Dependency: [[08.218 Process Account Closure notifications (UseCase 1876282)]]
- ← Dependency: [[08.114 Get Account Contract Service Role (COS) (UseCase 1876279)]]
- ← Dependency: [[08.050 Cancel Loan Service method (COS) (UseCase 1876278)]]
- ← Dependency: [[08.110 Add Role to Contract Service (COS) (UseCase 1876277)]]
- ← Dependency: [[08.060 Replace Loan Service method (COS) (UseCase 1876274)]]

## 📊 Appears In (11 diagrams)

- Use Case: Activate Service on Contract - Use Case Model
- Use Case: Add Role to Contract Service - Use Case Model
- Use Case: Adding Service to Contract - Use Case Model
- Use Case: Cancel Loan Service - Use Case Model
- Use Case: CSI-2971 Activate Service on Contract
- Use Case: CSI-2977 COS - Process Contract notifications to Deal activation
- Use Case: Deactivate Service on Contract - Use Case Model
- Use Case: Get Account Contract Service Role - Use Case Model
- Use Case: Process Account Closure notification - Use Case Model
- Use Case: Replace Loan Service - Use Case Model
- Use Case: Terminate Service on Contract - Use Case Model
