---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract documents management/Access Rights/Client documents"
domain: "Analysis Model"
element_id: 1731363
diagrams: 7
connections: 15
tags:
  - requirement
  - analysis-model
---

# 📋 Access control to Document by Contract status

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract documents management/Access Rights/Client documents

## 📝 Notes

Entry condition A: User has basic access right
Entry condition B: User has specific access right (for particular contract statuses)
Entry condition C: Contract is in status that is defined in specific right
 

	
- If A = False then document is not accessible
	
- If A = True AND B = False then document is not accessible
	
- If A = True AND B = True AND C = False then document is not accessible


	
- If A = True AND B = True AND C = True then document is accessible

## 🔗 Connections (15)

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
- ← Dependency: [[{MOD}01.128 Preview document]]

## 📊 Appears In (7 diagrams)

- Custom: Client documents - Access Rights
- Custom: COMMON for documents
- Custom: Contract documents - Access Rights
- Custom: DDM documents - Access Rights
- Use Case: Edit client documents
- Use Case: Edit contract documents
- Use Case: Edit DDM documents
