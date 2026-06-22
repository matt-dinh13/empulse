---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/IS/IS-248 (CBL-1141) IN Paperless REQ9 - Generate installment schedule"
domain: "Requirements Model"
element_id: 1290992
diagrams: 1
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 CBL-1141 IN Paperless REQ9 - Generate installment schedule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/IS/IS-248 (CBL-1141) IN Paperless REQ9 - Generate installment schedule

## 📝 Notes

Managerial description:
Objective is to utilize data source for generation of installment schedule pdf file and publish this functionality via API.

OSB: In case of new WS or new version of existing WS please create OpenAPI proxy for it.

A4:
Add following attributes into data source for print of installment schedule:
Client address - permanent
    PIN code
 State name
 District name
 Village/Town/City name
 Buildings
 Floor number
 Street name
 Locality
 Landmark
Contract status
Type of loan – cash loan, POS loan

Implementation of following web service:
Print installment schedule
    Request
     Contract code
 Response
     File name
     File content

## 🔗 Connections (2)

- ← Generalization: [[REQ#1 Extend ContractInstallmentType data source]]
- ← Generalization: [[REQ#2 Update business logic for filling ContractInstallmentType data source]]

## 📊 Appears In (1 diagrams)

- Custom: IS-248 (CBL-1141) IN Paperless REQ9 - Generate installment schedule
