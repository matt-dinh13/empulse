---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CLM/CBL-23535 (CLM-6055) Update of conditions for FER service request"
domain: "Requirements Model"
element_id: 1807833
diagrams: 4
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Get FER service setting rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CLM/CBL-23535 (CLM-6055) Update of conditions for FER service request

## 📝 Notes

Input parameters:

	
- ExternalId (identifier of the contract service which is to be used)


Output:

	
- FERSetting object


System gets the FER service setting (i.e. data from Contract Service ->Service.Full Early Repayment Service object) where Contract Service.ExternalId = ExternalId (from input) and Contract Service.Status in (Signed, Active) into FERSetting:

	
- EarlyRepaymentAlgorithm
	
- AcceptSmallUnderpayment
	
- AcceptedDueDateShift
	
- IncludeGIFTPayments
	
- AllowRequestInMoratorium
	
- PerformRequestInMoratorium
	
- AllowERDateChoice
	
- FinishContractAfterProcessing
	
- {ADD CLM-6055} useCurrentDate
	
- blockRequestReactivation {/ADD}


	
- If Full Early Repayment Service.Moratorium > 0 then
- Moratorium = Full Early Repayment Service.Moratorium
Else set Moratorium = Moratorium Length from Full Early Repayment Service Variant where Contract.Financial Parameters.Term between Number Of Installments From and Number Of installments To. In no setting exists, set Moratorium = 0


If no setting (record) is found, system generates an exception

## 🔗 Connections (3)

- ← Dependency: [[08.066 Calculate Full Early repayment preview (UseCase 1879648)]]
- ← Dependency: [[03.052 Create Full Early repayment request (UseCase 1879643)]]
- ← Dependency: [[03.100 Check and process Early repayment request (UseCase 1879631)]]

## 📊 Appears In (4 diagrams)

- Custom: CBL-23535 (CLM-6055) Update of conditions for FER service request
- Use Case: Full early repayment processing
- Use Case: Full early repayment request - externally
- Use Case: Full early repayment request - via GUI
