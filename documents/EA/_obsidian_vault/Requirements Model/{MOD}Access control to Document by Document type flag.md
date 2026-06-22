---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-14919 NATIONAL ID as new primary ID in PH"
domain: "Requirements Model"
element_id: 1731355
diagrams: 3
connections: 11
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Access control to Document by Document type flag

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-14919 NATIONAL ID as new primary ID in PH

## 📝 Notes

Input:

	
- Users access rights
	
- Document type flags of the related document


Algorithm (all the following must be true in order to met this rule):

	
- If document has flag 'PHOTO', user has to have access right for the flag PHOTO.
	
- {ADD CLM-4365}If document has flag 'READ_ONLY', user has to have access right for the flag READ_ONLY.{/ADD}

## 🔗 Connections (11)

- ← Dependency: [[{MOD}01.110 Edit contract document]]
- ← Dependency: [[01.133 Delete document content (UseCase 1880251)]]
- ← Dependency: [[{MOD}01.113 Edit client document]]
- ← Dependency: [[01.127 Take and upload contract document photo (UseCase 1880243)]]
- ← Dependency: [[01.123 Delete client document (UseCase 1880237)]]
- ← Dependency: [[01.103 Add client document (UseCase 1880236)]]
- ← Dependency: [[01.126 Upload client document file]]
- ← Dependency: [[01.129 Take and upload client document photo (UseCase 1880234)]]
- ← Dependency: [[01.120 Delete contract document]]
- ← Dependency: [[{MOD}01.100 Add contract document]]
- ← Dependency: [[01.125 Upload contract document]]

## 📊 Appears In (3 diagrams)

- Custom: CBL-14919 NATIONAL ID as new primary ID in PH
- Custom: Client documents - Access Rights
- Custom: Contract documents - Access Rights
