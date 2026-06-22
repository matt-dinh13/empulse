---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/PH"
domain: "Analysis Model"
element_id: 1738023
diagrams: 1
connections: 12
tags:
  - requirement
  - analysis-model
---

# 📋 Contact validation rule-PH

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/PH

## 📝 Notes

- for contactTypeCode='HOME_PHONE' and contactTypeRole=CL, value Land phone number, Unique client phones


	
- for contactTypeCode='PRIMARY_MOBILE' and contactTypeRole=CL, value  Mobile Phone, Unique client phones


	
- for contactTypeCode='SECONDARY_MOBILE' and contactTypeRole=CL, value Mobile Phone, Unique client phones
	
- for contactTypeCode='PRIMARY_EMAIL' and contactTypeRole=CL, value E-mail format
	
- for contactTypeCode='TWITTER' and contactTypeRole=CL , value Extended text character set, Max length 50
	
- for contactTypeCode='LINKEDIN' and contactTypeRole=CL, value Extended text character set, Max length 50
	
- for contactTypeCode='CHIKKA' and contactTypeRole=CL, value  Extended text character set, Max length 50


	
- for contactTypeCode='VIBER' and contactTypeRole=CL, value   Extended text character set, Max length 50
	
- for contactTypeCode='SKYPE' and contactTypeRole=CL, value  Extended text character set, Max length 50
	
- for contactTypeCode='YAHOO_MESSENGER' and contactTypeRole=CL, value  Extended text character set, Max length 50


	
- for contactTypeCode='FACEBOOK' and contactTypeRole=CL, value  Extended text character set, Max length 50


	
- for contactTypeCode='PHONE', contactTypeRole=PE and remmiter=FALSE, value General phone number
	
- for contactTypeCode='PHONE', contactTypeRole=PE and remmiter=TRUE, value Remitter's phone format, Length 8-20


	
- for contactTypeCode='PHONE' and contactTypeRole=EM, value General phone number

## 🔗 Connections (12)

- → Dependency: [[Max 8 elements]]
- → Dependency: [[Mobile phone (Requirement 1465193)]]
- → Dependency: [[E-mail format]]
- → Dependency: [[Max length 50]]
- → Dependency: [[Extended text character set (Requirement 1787146)]]
- → Dependency: [[General phone number (Requirement 1465175)]]
- → Dependency: [[Unique client phones]]
- → Dependency: [[Land phone number]]
- → Dependency: [[Length 8-20]]
- → Dependency: [[Remitter's phone format]]
- ← Dependency: [[Employment validation rule-PH]]
- ← Dependency: [[{MOD}Application validation rule-PH]]

## 📊 Appears In (1 diagrams)

- Custom: Validation rules - PH
