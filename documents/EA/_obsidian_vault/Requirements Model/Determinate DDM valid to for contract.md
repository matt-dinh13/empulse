---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9335 Calculating Valid to for DDM based on offer installment"
domain: "Requirements Model"
element_id: 1817921
diagrams: 4
connections: 8
tags:
  - requirement
  - requirements-model
---

# 📋 Determinate DDM valid to for contract

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9335 Calculating Valid to for DDM based on offer installment

## 📝 Notes

This object describes the steps, how system determines the date, until when the direct debit mandate associated with the particular contract is valid to.

Input:
- ContractCode = unique identifier of the contract

Output:
- DirectDebitMandateValidTo = date, until when the direct debit mandate is valid to

Steps:

	
- System takes the ContractCode from the input and proceeds based on the corresponding contract type as follows:

1.1.  If the contract is based on a REL product type (i.e. Contract[.Contract_Code=ContractCode].Contract_Type = 'REL'), then system sets:
          - DirectDebitMandateValidTo = '3000-01-01'

1.2.  If the contract is based on a CEL product type (i.e. Contract[.Contract_Code=ContractCode].Contract_Type = 'CEL') and any Contract->Installment exists, then system sets:
          - DirectDebitMandateValidTo = Contract->Installment[last where .Active=TRUE].Due_Date_Customer + value of the global parameter DDMCreationOverlap

1.3.  If the contract is based on a CEL product type (i.e. Contract[.Contract_Code=ContractCode].Contract_Type = 'CEL') and no Contract->Installment exists and any offer installments exists for selected chosen offer financial parameters (Contract->Offer_Financial_Parameters[.Chosen=TRUE]), then system sets:
          - DirectDebitMandateValidTo = Due_Date_Customer of last installment + value of the global parameter DDMCreationOverlap
Note - based on parameter getInstallmentsExternally, system gets offer installments:
- parameter is false - Offer_Financial_Parameters[.Chosen=TRUE]->Offer_Installment
- parameter is true - call to ISM module using Offer_Financial_Parameters.Installment_schedule, response will contain all offer installments

1.4.  Otherwise system sets:
          - DirectDebitMandateValidTo = '3000-01-01'

Note: The Installment[last] / Offer_Installment[last] is determined by the highest available value of .Due_Date_Customer attribute.
.
	
- System takes the DirectDebitMandateValidTo calculated within the previous step and returns it to the calling object.
	
- Algorithm ends.

## 🔗 Connections (8)

- ← Dependency: [[01.420 Create DDM on the contract]]
- ← Dependency: [[{MOD}01.460 Create DDM externally]]
- ← Dependency: [[14.435 POST ValidateDDM (Validate direct debit mandate data) (UseCase 1817864)]]
- ← Dependency: [[14.432 POST DDM (Create and validate direct debit mandate) (UseCase 1817863)]]
- ← Dependency: [[01.421 Create application DDM (UseCase 1818674)]]
- ← Dependency: [[{MOD}14.421 Create DDM via WS]]
- ← Dependency: [[{MOD}14.422 Update DDM via WS]]
- ← Dependency: [[{MOD}01.186 Prepare documentation]]

## 📊 Appears In (4 diagrams)

- Custom: LOR-9335 Calculating Valid to for DDM based on offer installment
- Use Case: Create/Update/Receive DDM
- Use Case: DDM via WS
- Use Case: Use Case
