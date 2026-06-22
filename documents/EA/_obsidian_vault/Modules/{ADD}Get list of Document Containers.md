---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Consumed/DMS API/Business Rules"
domain: "Modules"
element_id: 1664595
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 {ADD}Get list of Document Containers

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Consumed/DMS API/Business Rules

## 📝 Notes

{ADD PCG-3403/}
List of available Document Containers (Code) is retrieved from external module (DMS - Document Management System) by REST service call with GET request: DocumentContainers
If specific document containers is needed then fill list of codes in documentContainerCodes in request
If only active document containers are needed then fill true in activeOnly in request

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
