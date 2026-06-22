---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract documents management/Access Rights/Client documents"
domain: "Analysis Model"
element_id: 1731358
diagrams: 3
connections: 14
tags:
  - requirement
  - analysis-model
---

# 📋 Access control to Document by Salesroom

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract documents management/Access Rights/Client documents

## 📝 Notes

Document is accessible only if any of the following conditions is met:

	
- User is logged on the salesroom, where the contract was created on. //This is actually the deleted entry condition A - the original description was not correctly reflecting the code.
	
- User is logged on a salesroom AND the contract was created remotely (i.e. Contract.Created_remotely = TRUE).
	
- User is not logged on any salesroom AND has the specific access right (for all salesrooms).


Otherwise the document is not accessible.

## 🔗 Connections (14)

- ← Dependency: [[{MOD}01.110 Edit contract document]]
- ← Dependency: [[01.102 Add DDM document (UseCase 1880252)]]
- ← Dependency: [[01.133 Delete document content (UseCase 1880251)]]
- ← Dependency: [[{MOD}01.113 Edit client document]]
- ← Dependency: [[01.122 Delete DDM document (UseCase 1880249)]]
- ← Dependency: [[01.112 Edit DDM document (UseCase 1880248)]]
- ← Dependency: [[01.127 Take and upload contract document photo (UseCase 1880243)]]
- ← Dependency: [[01.123 Delete client document (UseCase 1880237)]]
- ← Dependency: [[01.103 Add client document (UseCase 1880236)]]
- ← Dependency: [[01.126 Upload client document file]]
- ← Realisation: [[01.129 Take and upload client document photo (UseCase 1880234)]]
- ← Dependency: [[01.120 Delete contract document]]
- ← Dependency: [[{MOD}01.100 Add contract document]]
- ← Dependency: [[01.125 Upload contract document]]

## 📊 Appears In (3 diagrams)

- Custom: Client documents - Access Rights
- Custom: Contract documents - Access Rights
- Custom: DDM documents - Access Rights
