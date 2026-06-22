---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product"
domain: "Analysis Model"
element_id: 1822841
diagrams: 1
connections: 5
tags:
  - requirement
  - analysis-model
---

# 📋 Find application form configuration

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product

## 📝 Notes

This algorithm finds the specific application form configuration. 

Input:

	
- product profile - optional
	
- contract origination process type (1SP or 2SP) - optional
	
- block of data (1BoD or 2BoD) - optional
	
- scope of data - optional value of scope of data is filled according Search Application form scope
	
- default - optional



	
- If default=true, system searches record in Application Form Configuration (AFC) with AFC.Default=TRUE.
	
- Else system searches records in AFC related to the product profile (Product Profile 2 Application Form Configuration).
	
- If contract origination process type=1SP, then system returns the record with AFC.Contract_Origination_Type='1SP' and AFC.Form_Scope=scope of data.
	
- Else if block of data=1BoD, then system returns the record with AFC.Contract_Origination_Type='2SP', AFC.Block_Type='1BoD' and AFC.Form_Scope=scope of data.
	
- Else system returns the record with AFC.Contract_Origination_Type='2SP', AFC.Block_Type='2BoD' and AFC.Form_Scope=scope of data.


Existing configuration without specified AFC.Data Scope is always used when the returned configuration with defined AFC.Data Scope is not found for 1SP or 1BoD.
If found AF is not assigned to product profile or is assigned to product profile but it is inactive (AFC.active_flag=0) or without supported configuration then no specific validations which are defined on AF level are run. Note: It is done for cases when the AF configuration is defined onlz for UI but the same profile is used for API process or when some AF is invalidated but still assigned to some used product profile.
If more then one configuration record is found, this algorithm ends with error message.


Output:
AFC.Code

## 🔗 Connections (5)

- ← Dependency: [[Application form construction]]
- → Dependency: [[Find Application form scope]]
- ← Dependency: [[{MOD}01.098 Update and evaluate application v9]]
- ← Dependency: [[01.313 Evaluate application (UseCase 1879292)]]
- ← Dependency: [[01.095 Create and evaluate application]]

## 📊 Appears In (1 diagrams)

- Custom: Product business rules
