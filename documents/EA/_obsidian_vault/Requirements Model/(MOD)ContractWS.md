---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3579 (CLM-1390) Previous CLIP/CLDP data for new contracts approval vector"
domain: "Requirements Model"
element_id: 1833058
diagrams: 10
connections: 36
tags:
  - interface
  - requirements-model
---

# 🔶 (MOD)ContractWS

> **Type**: Interface
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3579 (CLM-1390) Previous CLIP/CLDP data for new contracts approval vector

## 📝 Notes

Provider: Homer Select.BSL.CLM
{DEL CLM-5128} The following methods have been deleted in the given WS versions (see Linked document for a screenshot of source spreadsheet):
GetContractsRequest	v2
GetContractsForCrossChecksRequest	v2
GetContractListRequest	v2
GetContractDetailRequest	v2
CreateContractRequest	v2
PrepareMaterialsRequest	v2
SignContractRequest	v2
RegisterContractRequest	v2
CalculateEarlyRepaymentRequest	v2
CalculateChangeDueDateRequest	v2
ChangeDueDateRequest	v2
GetContractsRequest	v3
GetContractsForCrossChecksRequest	v3
GetCUIDByContractPhoneRequest	v3
GetSalesroomContractsRequest	v3
GetContractForDisbursementRequest	v3
GetContractsRequest	v4
GetContractHistoryRequest	v4
GetContractsForCrossChecksRequest	v4
GetContractDetailRequest	v4
GetCUIDByContractPhoneRequest	v4
GetContractsByCUIDRequest	v4
GetSalesroomContractsRequest	v4
GetContractForDisbursementRequest	v4
GetPersonCUIDByContractRequest	v5
GetContractsForCrossChecksRequest	v5
GetCUIDByContractPhoneRequest	v5
GetSalesroomContractsRequest	v5
GetContractForDisbursementRequest	v5
GetContractsRequest	v6
GetSalesroomContractsRequest	v6
GetContractForDisbursementRequest	v6
GetContractCreditLimitChangesRequest	v6
GetContractCreditLimitChangesRequest	v7
GetCUIDByContractPhoneRequest	v8
GetSalesroomContractsRequest	v8
GetContractCreditLimitChangesRequest	v8
{/DEL}

## 🔗 Connections (36)

- → Dependency: [[GetCUIDByContractPhoneFault]]
- → Dependency: [[GetContractListResponse]]
- → Dependency «trace»: [[01.173 Get contracts for cross checks (UseCase 1631393)]]
- → Dependency «use»: [[GetSalesroomContractsRequest]]
- → Dependency: [[GetContractForDisbursementFault]]
- → Dependency: [[01.756 Get client by contract and phone]]
- → Dependency «use»: [[GetContractHistoryResponse]]
- → Dependency «use»: [[GetContractsRequest]]
- → Dependency «use»: [[GetPersonCUIDByContractRequest]]
- → Dependency: [[{ADD}GetContractCreditLimitChangesResponse]]
- → Dependency «use»: [[GetContractsForCrossChecksResponse]]
- → Dependency: [[GetContractForDisbursementRequest]]
- → Dependency «use»: [[GetContractsForCrossChecksRequest]]
- → Dependency «use»: [[GetContractHistoryRequest]]
- → Dependency: [[01.750 Get contracts by client]]
- → Dependency: [[{MOD}01.753 Get contract list]]
- → Dependency: [[{MOD}01.771 Get contracts for disbursement service]]
- → Abstraction «trace»: [[01.767 Get contracts created on salesroom (UseCase 1631401)]]
- → Dependency: [[{MOD}01.754 Get contract detail]]
- → Dependency: [[GetContractListRequest]]
- → Dependency: [[GetContractDetailResponse]]
- → Dependency «use»: [[GetContractsResponse (Class 1833048)]]
- → Dependency: [[GetContractsByCUIDResponse]]
- → Dependency: [[GetContractsByCUIDRequest]]
- → Dependency: [[GetContractForDisbursementResponse]]
- → Dependency «trace»: [[01.750 Get contracts by client]]
- → Dependency: [[GetCUIDByContractPhoneResponse]]
- → Dependency: [[GetCUIDByContractPhoneRequest]]
- → Dependency: [[GetPersonCUIDByContractResponse]]
- → Dependency «use»: [[GetSalesroomContractsResponse]]
- → Usage: [[GetSalesroomContractsFault]]
- → Abstraction «trace»: [[01.175 Get contracts credit limit changes]]
- → Dependency «trace»: [[01.752 Get contract history for contract]]
- → Dependency: [[GetContractCreditLimitChangesRequest]]
- → Dependency «trace»: [[01.751 Get client by contract (UseCase 1729625)]]
- → Dependency: [[GetContractDetailRequest]]

## 📊 Appears In (10 diagrams)

- Custom: CBL-3579 (CLM-1390) Previous CLIP/CLDP data for new contracts approval vector
- Logical: ContractWS - GetContractDetail method
- Logical: ContractWS - GetContractForDisbursement
- Logical: ContractWS - GetContractList method
- Logical: ContractWS - GetContracts by CUID
- Logical: ContractWS - GetContracts by CUID 2
- Logical: ContractWS - GetCUIDByContractPhone
- Logical: ContractWS - GetPersonCUIDByContract method
- Logical: ContractWS - GetSalesroomContracts
- Logical: ContractWS - methods for internal usage
