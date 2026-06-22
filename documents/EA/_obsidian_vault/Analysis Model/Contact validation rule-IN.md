---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/IN"
domain: "Analysis Model"
element_id: 1819518
diagrams: 1
connections: 8
tags:
  - requirement
  - analysis-model
---

# 📋 Contact validation rule-IN

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/IN

## 📝 Notes

- for contactTypeCode='PHONE' and note='PRIMARY_MOBILE', value Mobile Phone


	
- for contactTypeCode='PHONE' and note='HOME_PHONE', value Fix phone


	
- for contactTypeCode='HOME_PHONE', value Fix phone


	
- for contactTypeCode='PRIMARY_MOBILE' and contactTypeRole=CL, value Mobile Phone
	
- for contactTypeCode='SECONDARY_MOBILE', value Mobile Phone


	
- for contactTypeCode='PRIMARY_EMAIL', value E-mail
	
- for contactTypeCode='OTHER_EMAIL', value E-mail
	
- for contactTypeCode='TWITTER', value Length50
	
- for contactTypeCode='LINKED_IN', value Length50
	
- for contactTypeCode='FACEBOOK', value Length50
	
- for contactTypeCode='EMAIL_FB', value E-mail



	
- extension -Phone Extension

## 🔗 Connections (8)

- → Dependency: [[Length50]]
- → Dependency: [[E-mail (Requirement 1721753)]]
- → Dependency: [[Fix phone (Requirement 1721757)]]
- → Dependency: [[Max 1 element]]
- → Dependency: [[Max 8 elements (Requirement 1721760)]]
- → Dependency: [[Mobile Phone]]
- ← Dependency: [[Person validation rule - IN]]
- ← Dependency: [[{MOD}Application validation rule - IN]]

## 📊 Appears In (1 diagrams)

- Custom: Validation rules - IN
