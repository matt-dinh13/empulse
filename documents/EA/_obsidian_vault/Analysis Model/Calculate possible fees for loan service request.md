---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Business Rules"
domain: "Analysis Model"
element_id: 1833406
diagrams: 6
connections: 6
tags:
  - requirement
  - analysis-model
---

# 📋 Calculate possible fees for loan service request

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Business Rules

## 📝 Notes

This rule describes calculation of fees charged to a loan service request
Input:

	
- Contract
	
- Loan Service Request
	
- RequestType
	
- TariffUsage


Output:

	
- Loan Service Request



	
- System finds all tariff items to be charged at the moment of the service request creation by calling of Algorithm_Find tariff items by usage with parameters:
- usage = TariffUsage
- contract = Contract.ID
- contract service = Contract.Contract Service where Contract.ContractService.ServiceType = RequestType 
	
- System calls for each tariff item from previous step Algorithm: Calculate tariff item amount algorithm with tariff item as parameter and calculates tariff items amount (request fee).
All calculated request fees are registered separately by Tariff Items in Loan Service Request.Charged Fee To Request object by described rules.

## 🔗 Connections (6)

- ← Dependency: [[13.450 Process supplement approval result (UseCase 1865654)]]
- ← Dependency: [[01.797 Create ContractPayholRequest service]]
- ← Dependency: [[01.796 Get ContractPayholRequest preview service]]
- ← Dependency: [[08.354 Show parameters of payment holiday (UseCase 1862151)]]
- ← Dependency: [[08.404 Confirm offer for loan restructuring (UseCase 1862186)]]
- ← Dependency: [[01.380 Prepare Contract for Consolidation]]

## 📊 Appears In (6 diagrams)

- Custom: Business Rules
- Use Case: Loan consolidation - use case model
- Use Case: Loan restructuring request creation - externally
- Use Case: Loan restructuring request creation - via GUI
- Use Case: Payment holiday request creation - externally
- Use Case: Payment holiday request creation - via GUI
