---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/VN"
domain: "Analysis Model"
element_id: 1773133
diagrams: 1
connections: 8
tags:
  - requirement
  - analysis-model
---

# 📋 Contact validation rule-VN

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/VN

## 📝 Notes

- for contactTypeCode='HOME_PHONE' and contactTypeRole=CL, value Length8-11 digits


	
- for contactTypeCode='PRIMARY_MOBILE' and contactTypeRole=CL, value Length8-11 digits


	
- for contactTypeCode='SECONDARY_MOBILE' and contactTypeRole=CL, value Length8-11 digits
	
- for contactTypeCode='PRIMARY_EMAIL' and contactTypeRole=CL, value  E-mail, Length50


	
- for contactTypeCode='OTHER_EMAIL' and contactTypeRole=CL, value E-mail, Length50


	
- for contactTypeCode='GOOGLE_TALK' and contactTypeRole=CL, value  Length50
	
- for contactTypeCode='FRIENDSTER' and contactTypeRole=CL, value Length50
	
- for contactTypeCode='FACEBOOK' and contactTypeRole=CL, value Length50
	
- for contactTypeCode='MSN' and contactTypeRole=CL, value Length50
	
- for contactTypeCode='SKYPE' and contactTypeRole=CL, value Length50
	
- for contactTypeCode='TWITER' and contactTypeRole=CL, value Length50
	
- for contactTypeCode='WHATS_APP' and contactTypeRole=CL, value Length50
	
- for contactTypeCode='YAHOO_MESSENGER' and contactTypeRole=CL, value Length50
	
- for contactTypeCode='BLACK_BERRY' and contactTypeRole=CL, value Length50


	
- for contactTypeCode='PHONE' and contactTypeRole=PE, value Length8-11 digits, Number format


	
- for contactTypeCode='PHONE' and contactTypeRole=EM, value Length8-11 digits  and extension Length 6 digits

## 🔗 Connections (8)

- ← Dependency: [[Application validation rule-VN]]
- → Dependency: [[Max elements]]
- → Dependency: [[Length 6 digits]]
- → Dependency: [[Length8-11 digits]]
- → Dependency: [[Email (Requirement 1789751)]]
- → Dependency: [[Length50]]
- → Dependency: [[Number format]]
- ← Dependency: [[Person validation rule-VN]]

## 📊 Appears In (1 diagrams)

- Custom: Validation rules-VN
