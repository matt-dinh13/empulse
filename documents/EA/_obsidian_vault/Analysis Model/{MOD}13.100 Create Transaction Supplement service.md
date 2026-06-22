---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Transaction Supplement support/Access Rights"
domain: "Analysis Model"
element_id: 1881425
diagrams: 7
connections: 12
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}13.100 Create Transaction Supplement service

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Transaction Supplement support/Access Rights

## 📝 Notes

The use case presents receiving a request for a cardless transaction, its validations, creation of a Contract Supplement and possibly sending request for approval in LAP. If the approval isn't needed, the request is immediately approved and its processing continues with the transaction supplement documents preparation.  
The request is received from an external system via REST API.

Example of the request: POST <bsl_env>/bsl/api/v1.0/transaction-supplement/
{
  "applicationCode": "42011300000033",
  "approvalRequestId":"2",
  "relatedSubject": {
    "code": "ACCOUNT",
    "value": "4200004741"
  },
  "sourceSystem": {
    "sourceRequestId": "AS-2345-FE-98754",
    "sourceSystem": "TIKI"
  },
  "transactionType": "BNPL_ECOM"
}
Example of the request: POST <bsl_env>/bsl/api/v2/transaction-supplement/
{
  "applicationCode": "42011300000033",
  "supplementDefinitionId": "654654654",
  "transactionType": "BNPL_ECOM"
  "relatedSubject": {
    "code": "ACCOUNT",
    "value": "4200004741"
  },
  "sourceSystem": {
    "sourceRequestId": "AS-2345-FE-98754",
    "sourceSystem": "TIKI"
  }
}

## 🔗 Connections (10)

- ← Dependency: [[TransactionSupplements]]
- ← Dependency: [[TransactionSupplements_v2 (Interface 1763826)]]
- ← UseCase: [[External system (Actor 1880866)]]
- → Dependency: [[{MOD}Validate Transaction Supplement request]]
- → Realisation: [[13.100 Create ALOP Cash request service]]
- → Dependency: [[Create contract supplement rule (Requirement 1879308)]]
- → Dependency: [[Set Sales Quote values for Transaction Supplement]]
- → UseCase «include»: [[13.150 Send supplement to approval]]
- → Dependency: [[Set Main Sales Quote for Transaction Supplement]]
- → Dependency: [[Change status of Contract Supplement]]

## 📊 Appears In (7 diagrams)

- Custom: Access Rights
- Custom: CBL-26143 (CSI-3705) BNPL - Enrich transaction data
- Logical: BNPL - Create Transaction Supplement
- Logical: Transaction Supplement - Create Transaction Supplement
- Logical: Transaction Supplement - Create Transaction Supplement v2
- Use Case: CSI-1740 - Update method for TransactionSupplement creation
- Use Case: Transaction Supplement request creation - Use case model
