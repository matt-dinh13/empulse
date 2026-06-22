---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Access Rights"
domain: "Analysis Model"
element_id: 1869799
diagrams: 9
connections: 8
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.763 Get Contract Documents for self-care

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Access Rights

## 📝 Notes

Use case provides list of documents for self-care purposes

Response is limited only to contract, service and service request documents having printout stored in external storage (Cabinet).

Endpoint:
/v1.0/customers/{cuid}/documents
{DEL NOT IMPL}/v2.0/customers/{cuid}/documents{/DEL}

## 🔗 Connections (6)

- ← Dependency: [[Document Services]]
- ← Dependency: [[documents v2 (NOT IMPLEMENTED)]]
- ← Dependency: [[documents (DEPRECATED)]]
- → Dependency: [[Supported contract statuses for self-care]]
- → Realisation: [[01.763 Get documents for self-care]]
- ← UseCase: [[External system (Actor 1880866)]]

## 📊 Appears In (9 diagrams)

- Custom: Access Rights
- Custom: Business Rules
- Custom: CBL-8156 (CSI-172) Integration with Inovatrics - using PageSpecification in API (step3b)
- Custom: CBL-8652 (CLM-2697) Enhancement API ContractDocument
- Custom: REQ #4 - Update Document REST API services to use UUID instead of DOCUMENT_REF
- Logical: Documents (DEPRECATED)
- Logical: Documents (NOT IMPLEMENTED)
- Use Case: Contract document services
- Use Case: Customer Self-Care API - Use Case Model
