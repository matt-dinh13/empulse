---
type: Class
stereotype: "Resource"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Interface Consumed/REST/Party Identification Files/v1/findCustomer"
domain: "Modules"
element_id: 1802228
diagrams: 1
connections: 0
tags:
  - class
  - modules
---

# 🔷 findCustomer

> **Type**: Class · **Stereotype**: «Resource»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Consumed/REST/Party Identification Files/v1/findCustomer

## 📝 Notes

{ADD CLM-5391/}

GET https://pif.id00a1.cz.infra/party-web/api/pif/v1/customer/382981?projections=PARTY_DATA,ROLE_DATA,RELATIONSHIP_DATA,SAFE_GUARANTY,PARTY_ADDRESSES,PARTY_DOCUMENTS,ROLE_CONTACTS,ROLE_COMMUNICATION_CHANNELS,ROLE_REFERENCE_INFOS,ROLE_DOCUMENTS,EMPLOYMENT_DATA,RELATED_PERSON_DATA

Find customer for given external ID. It is possible to restrict which customer data are returned using projections. For example to retrieve contacts only, the projection ROLE_CONTACTS should be used. Then other customer data (like employments, related persons etc) will be omitted. It is strongly recommended to use the most strict projections as possible.

## 📊 Appears In (1 diagrams)

- Logical: findCustomer
