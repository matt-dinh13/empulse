---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8652 (CLM-2697) Enhancement API ContractDocument"
domain: "Requirements Model"
element_id: 1853845
diagrams: 20
connections: 39
tags:
  - interface
  - requirements-model
---

# 🔶 Contract Insurance Services

> **Type**: Interface
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8652 (CLM-2697) Enhancement API ContractDocument

## 🔗 Connections (39)

- → Aggregation: [[contractservices]]
- → Dependency: [[GetContractListInsurancesRequest_v2]]
- → Dependency: [[08.452 Cancel contract insurance service (UseCase 1878962)]]
- → Usage: [[{ADD}CreateInsuranceOfferPreview_v3]]
- → Dependency: [[08.453 Get Contract insurance Terminate preview service (UseCase 1878969)]]
- → Dependency: [[LoanService_v3]]
- → Dependency: [[LoanService_v3]]
- → Dependency: [[{MOD}08.349 Generate Insurance offer preview]]
- → Dependency: [[GetContractListInsurancesRequest]]
- → Dependency: [[{MOD}01.772 Get contract list insurances for self-care]]
- → Dependency: [[{MOD}08.350 Accept Contract Insurance Service]]
- → Usage: [[GetContractInsuranceTerminatePreview]]
- → Usage: [[GetContractInsuranceCancelPreview]]
- → Dependency: [[GetContractListInsurancesResponse]]
- → Dependency: [[08.451 Get Contract insurance Cancel preview service (UseCase 1878961)]]
- → Usage: [[ContractInsuranceCancelPreview]]
- → Dependency: [[08.454 Terminate contract insurance service (UseCase 1878981)]]
- → Dependency: [[{MOD}01.772 Get contract list insurances for self-care]]
- → Usage: [[SetContractInsuranceCanceled]]
- → Dependency: [[{MOD}01.772 Get contract list insurances for self-care]]
- → Usage: [[CreateContractInsurance_v3]]
- → Dependency: [[08.455 Reactivate contract insurance service (UseCase 1878990)]]
- → Usage: [[ContractInsuranceTerminatePreview]]
- → Usage: [[CreateContractInsurance]]
- → Dependency: [[GetContractListInsurancesResponse_v2]]
- → Usage: [[SetContractInsuranceTerminated]]
- → Dependency: [[{ADD}ReactivateContractInsurance_v3]]
- → Usage: [[{ADD}InsuranceOfferPreview_v3]]
- → Dependency: [[LoanService_v3]]
- → Dependency: [[LoanService_v3]]
- → Dependency: [[08.342 Get contract insurance offers service (UseCase 1879829)]]
- → Usage: [[GetInsuranceServiceOffers (Class 1853854)]]
- → Dependency: [[{MOD}08.347 Add Insurance service on Contract service]]
- → Usage: [[GetContractListInsurancesResponse_v3]]
- → Dependency: [[{MOD}08.347 Add Insurance service on Contract service]]
- → Usage: [[LoanService (Class 1768073)]]
- → Usage: [[InsuranceServiceOffers_v3]]
- → Usage: [[GetContractListInsurancesRequest_v3]]
- → Usage: [[AcceptContractInsuranceService_v3]]

## 📊 Appears In (20 diagrams)

- Custom: CBL-8652 (CLM-2697) Enhancement API ContractDocument
- Custom: REQ #5 - Update Contract Insurance Services WS to use UUID instead of DOCUMENT_REF
- Logical: Contract Insurance Change Requests - GET: ContractInsuranceCancelPreview
- Logical: Contract Insurance Change Requests - GET: ContractInsuranceTerminatePreview
- Logical: Contract Insurance Service: GET Contract Insurance Service
- Logical: Contract Insurance Services - GET: Contract Insurance Service offer preview create v3
- Logical: Contract Insurance Services - GET: Contract list Insurances
- Logical: Contract Insurance Services - GET: Contract list Insurances
- Logical: Contract Insurance Services - GET: Contract list Insurances v3
- Logical: Contract Insurance Services - GET: Insurance Service Offers v3
- Logical: Contract Insurance Services - POST: Contract Insurance Service
- Logical: Contract Insurance Services - POST: Contract Insurance Service Cancel v3
- Logical: Contract Insurance Services - POST: Contract Insurance Service Reactivate v3
- Logical: Contract Insurance Services - POST: Contract Insurance Service Terminate v3
- Logical: Contract Insurance Services - POST: Contract Insurance Service v3
- Logical: Contract Insurance Services - POST: Create Contract Insurance Service v3_proposal
- Logical: Contract Insurance Services - PUT: Accept Contract Insurance Service v3
- Logical: Contract Insurance Services - PUT: Contract Insurance Service Cancel
- Logical: Contract Insurance Services - PUT: Contract Insurance Service Terminate
- Logical: CSI-1882 Update of the Add Insurance Service method for new Service Catalogue
