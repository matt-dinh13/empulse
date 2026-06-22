---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Change of Due Date/Use Case"
domain: "Analysis Model"
element_id: 935689
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Allow Change of Due Day

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Change of Due Date/Use Case

## 📝 Notes

All following conditions must be satisfied together:

	
- Contract is in status Signed (N) or Active (A) (MSG_CHDD_InvalidContractStatus).
	
- The next regular installment after current date is not the last one in the regular installment schedule (MSG_CHDD_IsLastInstallment).
	
- There is no active unexpired early repayment request present on the contract, i.e. does not exist Contract.EarlyRepaymentRequest and request.SuccessfullCompletionDate is null and request.Active = true and request.RequestType in (FER, PER, CET, COP) (MSG_CHDD_ExistsEarlyReayment) and request.EarlyRepaymentDateTolerance >= current date
	
- If a service of type GRPER (grace period) is assigned to the contract then current date must be greater than end of grace period (value of Contract.ContractService.ContractServiceParameter where ServiceType = END_OF_GRACE_PERIOD) (MSG_CHDD_ContractUnderGracePeriod).

## 🔗 Connections (1)

- ← Dependency: [[{MOD}08.060 Change Due Date]]

## 📊 Appears In (1 diagrams)

- Use Case: Change Due Date processing
