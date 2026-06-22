---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Insurance finishing/Access Rights"
domain: "Analysis Model"
element_id: 1878987
diagrams: 17
connections: 17
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}11.111 Cancel insurance contract manually

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Insurance finishing/Access Rights

## 📝 Notes

This use case describes how to cancel insurance contract manually.
The cancellation of a service (insurance) means annulment of the service on a contract as if it had never been on the contract.
In case of a fee is charged in relation to the insurance and contract installment schedule is still active, then Financial Parameters of the contract are recalculated (i.e. insurance premium is removed) and Contract installment schedule is regenerated.

## 🔗 Connections (11)

- ← Dependency: [[Service cancellation]]
- → UseCase «include»: [[08.111 Cancel contract insurance common]]
- → Dependency: [[Check contract for active COP_GRPER period]]
- → Realisation: [[11.111 Cancel insurance contract manually - overrule]]
- → Dependency: [[Annuity calculation]]
- → Realisation: [[11.111 Cancel insurance contract manually]]
- → Dependency: [[Assemble Cancellation Message for Information area]]
- → Dependency: [[Calculate new installment amount on insurance cancellation]]
- → Realisation: [[REQ #1 - Calculate & Show monthly payments on Cancel insurance screen]]
- → Dependency: [[{MOD}Check conditions to insurance cancellation]]
- ← UseCase: [[User (Actor 1880892)]]

## 📊 Appears In (17 diagrams)

- Custom: Access Rights
- Custom: Access Rights
- Custom: CBL-10733 (CSI-171) Insurance cancellation and termination - check existing Payhol requests
- Custom: CBL-20860 (CSI-2911) New rules for service Termination and Cancelation
- Custom: CBL-2137 (CLM-1021) Insurance Cancellation or Termination - show Monthly payment info
- Custom: CBL-4059 (CLM-1585) Insurance Contract Cancellation/Termination – System Improvement
- Custom: CBL-6153 (CLM-3221) Insurance cancellation - implement overrule access right
- Custom: CBL-8047 (CLM-2590) Disable CANCEL button post free lookup period for EW product
- Custom: CSI-1905 Update of the Cancel Insurance method for new Service Catalogue
- Custom: Service cancellation
- Use Case: Adding switch for ContractServiceChangeSE
- Use Case: Cancellation of Insurance contract options
- Use Case: Contract insurance cancellation
- Use Case: CSI-2975 COS - Cancel Service on Contract
- Use Case: CSI-2975 COS - Cancel Service on Contract
- Use Case: Insurance Contract Management
- Use Case: OVERVIEW - Installment Schedule
