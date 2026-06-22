---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Access Rights"
domain: "Analysis Model"
element_id: 1879722
diagrams: 11
connections: 11
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.774 Create Contract Service

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Access Rights

## 📝 Notes

The use case describes creating of Contract Service in status NEW on an external request.
Contract for which a Contract Service will be created has to be in one of allowed statuses.
endpoint address example: 

POST https://bsl.vn00c1.vn.infra/bsl/openapi/v1.0/contractservices/
{
   "contractNumber": "4000014651",
  "serviceCode": "FER01",
  "serviceVersion": "19",
   "switchOn": "true"
}

v3
POST https://bsl.vn00c1.vn.infra/bsl/openapi/v3/contractservices/
{
  "contractNumber": "4000014651",
  "serviceExternalId": "0af971e4-8162-1bcd-8181-6738653f011f",
  "transactionSupplementId": "42012345567856",
   "switchOn": "true"
}

## 🔗 Connections (8)

- ← Dependency: [[Contract Service Services]]
- → Association: [[External system (Actor 1880866)]]
- → Dependency: [[Get Service definition from Services (Requirement 1833416)]]
- → Realisation: [[01.774 Create Contract Service AR]]
- → Dependency: [[Create Loan Service Request with Service Operation Status]]
- → Dependency: [[Get Service definition from New Service Catalogue (Requirement 1833433)]]
- → Dependency: [[Check Account status by account number from AM]]
- → Dependency: [[Get initial Contract service status]]

## 📊 Appears In (11 diagrams)

- Custom: Access Rights
- Custom: CBL-12505 (CSI-1179) Service bundling support for cancellation and termination
- Custom: CBL-8246 (CLM-2557) Implementation of API + UI for service replacement
- Logical: Contract Services - POST create contract service
- Logical: ContractService - Create Contract Service method
- Use Case: Contract Service Requests - Use Case Model
- Use Case: ContractServiceCreatedNotification message variant
- Use Case: CSI-2287 Replace LoanServiceRequest sending for Operation Status change
- Use Case: Customer Self-Care API - Use Case Model
- Use Case: Loan Service - Add a Service to Contract
- Use Case: Service - Contract Service management via API
