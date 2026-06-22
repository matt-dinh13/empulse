---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Business Rules"
domain: "Modules"
element_id: 1799786
diagrams: 5
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {MOD}Get documents for contract

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Business Rules

## 📝 Notes

{ADD CLM-4795/}

Input: contract code

Output: compiled list of document UUIDs

Steps:

	
- System retrieves a list of contract document UUIDs from database based on input contract code from tables Contract > Contract document.
	
- {ADD CLM-4852}If system property disableDmsContractDocumentFiltering = True then system return list of contract document without any filtering and use case ends.{/ADD}
	
- System calls DMS REST API findDocument endpoint with a filter object for query parameter, containing the list of contract documents and Document flag field set to 'CONTRACT'.
	
- For each contract document NOT returned in DMS response, system removes its UUID from the contract document list.
	
- System fetches a list of client document UUIDs from database (Contract > Client snapshot -> Client documents.)
	
- System returns a list of documents compiled of the contract document UUID list and client document UUID list and rule ends.

## 🔗 Connections (2)

- ← Dependency: [[{MOD}Get contract documents]]
- ← Usage: [[{MOD}Contracts search (UseCase 1873969)]]

## 📊 Appears In (5 diagrams)

- Custom: Business Rules
- Custom: CLM-4852 - Kafka Initial Load - Perf fix
- Logical: getContractDocuments
- Logical: searchContracts
- Logical: searchContracts
