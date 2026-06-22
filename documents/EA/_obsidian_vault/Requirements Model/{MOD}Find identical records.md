---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9290 - Copy DDM references from application to contract"
domain: "Requirements Model"
element_id: 1817756
diagrams: 2
connections: 15
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Find identical records

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9290 - Copy DDM references from application to contract

## 📝 Notes

Input data are compared with stored data in following entities:

	
- preferred language - based on the rule Find identical language
	
- related person - based on the rule Find identical related person
	
- address (related person, client) - based on the rule Find identical address
	
- contact (related person, client, employer) - based on the rule Find identical contact
	
- extended information - based on the rule Find identical extended information
	
- service - based on the rule Find identical service
	
- external identification attribute - based on the rule Find identical external identification attribute
	
- insurance custom data - based on the rule Find identical insurance custom data
	
- commodity - based on the rule Find identical commodity
	
- document - based on the rule Find identical document
	
- extended property - based on the rule Find identical extended property
	
- payment channel - based on the rule Find identical payment channel
	
- direct debit mandate - based on the rule Find identical direct debit mandate

## 🔗 Connections (15)

- → Dependency: [[Find identical contact]]
- → Dependency: [[Find identical extended property]]
- → Dependency: [[Find identical extended information]]
- → Dependency: [[Find identical document]]
- → Dependency: [[Find identical direct debit mandate]]
- → Dependency: [[Find identical insurance custom data]]
- → Dependency: [[Find identical service]]
- → Dependency: [[Find identical commodity]]
- → Dependency: [[Find identical external identification attribute]]
- → Dependency: [[Find identical address]]
- → Dependency: [[Find identical payment channel]]
- → Dependency: [[Find identical related person]]
- → Dependency: [[Find identical language]]
- ← Dependency: [[Application Processing]]
- ← Dependency: [[01.312 Update approved application (UseCase 1879295)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9290 - Copy DDM references from application to contract
- Custom: Update application - Business rules
