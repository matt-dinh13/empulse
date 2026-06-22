---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8752 (CLM-2700) Separate document management and expose it via REST API"
domain: "Requirements Model"
element_id: 1816570
diagrams: 2
connections: 4
tags:
  - class
  - requirements-model
---

# 🔷 {DEL}TickedClientDocumentType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8752 (CLM-2700) Separate document management and expose it via REST API

## 📝 Notes

{DEL LOR-8678/}
This data type defines mapping of loan options and client document types which should be initially ticket (chosen) in product calculator.
Source is entity Documents Selected on Product Calculator, only active records corresponding to allowed options in LoanOption are provided.

## 🔗 Connections (4)

- → Dependency: [[{ADD}Documents Selected on Product Calculator]]
- → Dependency: [[{DEL}LoanOption (Enumeration 1816618)]]
- → Dependency: [[Document Type (Class 1877882)]]
- ← Dependency: [[{DEL}GetCodeListResponse (Class 1816566)]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-8752 (CLM-2700) Separate document management and expose it via REST API
- Logical: CustomerOfferWS - GetCodeList

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| documentType | string |  |
| loanOption | {DEL}LoanOption |  |
