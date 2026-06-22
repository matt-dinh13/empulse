---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Adding Insurance on running contract/Access Rights"
domain: "Analysis Model"
element_id: 1879830
diagrams: 13
connections: 14
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}08.347 Add Insurance service on Contract service

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Adding Insurance on running contract/Access Rights

## 📝 Notes

This use case presents a web service method to adding insurance service on a contract, creation of related insurance contract and possibly activation of the insurance on the contract.

Example REL:
curl --location --request POST 'https://bsl.in00a1.cz.infra/bsl/openapi/v1.0/contractservices/insurance/' \
--data-raw '{
  "customerId": "102146",
  "contractNumber": "3900013938",
  "insuranceService": {
    "serviceCode": "INS_PPI",
    "versionNumber": "3"
  },
  "activateInsuranceYN": "true",
  "notice": "Insurance API"
}'

Example v3 REL transaction
curl --location --request POST 'https://bsl.in00a1.cz.infra/bsl/openapi/v3/contractservices/insurance/' \
--data-raw '{
  "customerId": "102146",
  "contractNumber": "4200022294",
  "transactionSupplementId":"42056868680013"
  "insuranceService": {
    "serviceExternalId": "0af971e4-8162-1bcd-8181-6738653f011f"
   },
  "activateInsuranceYN": "true",
  "notice": "Insurance API"
}'

Example v3 CEL
curl --location --request POST 'https://bsl.in00a1.cz.infra/bsl/openapi/v1.0/contractservices/insurance/' \
--data-raw '{
  "customerId": "102146",
  "contractNumber": "4300013938",
  "insuranceService": {
    "serviceCode": "INSLI_XX",
    "versionNumber": "3"
  },
  "activateInsuranceYN": "false",
  "notice": "Insurance API",
  "insuranceOffer": {
    "premiumTariffItemCode":"TIFFINS_9878"
    "insurancePremiumAmount": {"amount": 12000.0, "currency": "IDR"},
    "currentMonthlyInstallment": {"amount": 100000.0, "currency": "IDR"},
    "futureMonthlyInstallment":  {"amount": 112000.0, "currency": "IDR"},
     "firstDueDateInsurance":"2023-10-30T07:37:13.000+01:00",
     "remainingInstallmentsCount":2,
     “sumInsured”: {"amount": 10000000.0, "currency": "IDR"}
   }
}'

## 🔗 Connections (10)

- ← Dependency: [[Contract Insurance Services (Interface 1853845)]]
- ← Dependency: [[Contract Insurance Services (Interface 1853845)]]
- → Dependency: [[Get Service definition from New Service Catalogue (Requirement 1833433)]]
- → Dependency: [[{MOD}Check for an active insurance existence]]
- → Realisation: [[08.347 Add Insurance service on Contract service]]
- → Dependency: [[{ADD}Check Service Eligibility for provided contract]]
- → Dependency: [[Get Service definition from Services (Requirement 1833416)]]
- → Dependency: [[{MOD}CreateContractInsurance validations]]
- → UseCase «include»: [[{MOD}08.346 Add Insurance service on Contract common]]
- ← UseCase: [[External system (Actor 1880866)]]

## 📊 Appears In (13 diagrams)

- Custom: Access Rights
- Custom: CBL-8652 (CLM-2697) Enhancement API ContractDocument
- Custom: REQ #5 - Update Contract Insurance Services WS to use UUID instead of DOCUMENT_REF
- Logical: CBL-26066 (CSI-3652) Add Insurances and Services to Existing Contract in POS Loan and Cash Loan
- Logical: Contract Insurance Services - POST: Contract Insurance Service
- Logical: Contract Insurance Services - POST: Contract Insurance Service v3
- Logical: Contract Insurance Services - POST: Create Contract Insurance Service v3_proposal
- Logical: CSI-1882 Update of the Add Insurance Service method for new Service Catalogue
- Use Case: Adding Insurance Service on CEL contract
- Use Case: Adding Insurance Service on REL contract
- Use Case: Adding Insurance Service on REL contract method
- Use Case: ContractServiceCreatedNotification message variant
- Use Case: Insurance Service Offers API - Use Case Model
