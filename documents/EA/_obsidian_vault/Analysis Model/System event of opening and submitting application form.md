---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product"
domain: "Analysis Model"
element_id: 1822784
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 System event of opening and submitting application form

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product

## 📝 Notes

System creates system event for following events
Opening application form

	
- Application1SPOpenedSE - for 1SP
	
- Application1BODOpenedSE - for 2SP 1BoD
	
- Application2BODOpenedSE - for 2SP 2BoD


Save application form

	
- ApplicationSavedSE


Submitting application form

	
- Application1SPSubmittedSE - for 1SP
	
- Application1BODSubmittedSE - for 2SP 1BoD
	
- Application2BODSubmittedSE - for 2SP 2BoD

## 🔗 Connections (1)

- ← Dependency: [[01.080 Fill in application (UseCase 1821367)]]

## 📊 Appears In (2 diagrams)

- Custom: Product business rules
- Use Case: Fill in application
