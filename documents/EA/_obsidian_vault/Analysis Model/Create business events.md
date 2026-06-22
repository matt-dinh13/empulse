---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product"
domain: "Analysis Model"
element_id: 1822801
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Create business events

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product

## 📝 Notes

Create following business events:

	
- For 1SP and 1BoD 2SP (Client.CUID is empty)
System creates a BusinessEvent according to the rule Create business event with the following parameters:
- Contract = passed Contract
- BusinessEventType = ARRANGE_APPLICATION
- Originator = 
        = sales agent (if is not null) of currently logged user (i.e. current_user.User_setting(.User_Setting_Item=SALES_AGENT).Value. If the user doesn't exists in User then the user is created according to Creation of user.)
        = currently logged user if his sales agent = null
- Salesroom = currently logged salesroom
- TimeOfModification = current
- list of attributes = null
	
- For 1SP, 1BoD 2SP and 2BoD 2SP
System creates a BusinessEvent according to the rule Create business event with the following parameters:
- Contract = passed Contract
- BusinessEventType = APPLICAION_DATA_SUBMITTED
- Originator = 
        = sales agent (if is not null) of currently logged user (i.e. current_user.User_setting(.User_Setting_Item=SALES_AGENT).Value. If the user doesn't exists in User then the user is created according to Creation of user.)
        = currently logged user if his sales agent = null
- Salesroom = currently logged salesroom
- TimeOfModification = current
- list of attributes = null
	
- For 1BoD 2SP (Client.CUID is empty)
System creates a BusinessEvent according to the rule Create business event with the following parameters:
- Contract = passed Contract
- BusinessEventType = SUBMIT_PRE
- Originator = currently logged user
- Salesroom = currently logged salesroom
- TimeOfModification = current
- list of attributes = null
	
- For 1SP and 2BoD 2SP
System creates a BusinessEvent according to the rule Create business event with the following parameters:
- Contract = passed Contract
- BusinessEventType = CREATE_CONTRACT
- Originator = currently logged user
- Salesroom = currently logged salesroom
- TimeOfModification = current
- list of attributes = null
	
- For 1SP and 1BoD 2SP (Client.CUID is empty)
System creates a BusinessEvent according to the rule Create business event with the following parameters:
- Contract = passed Contract
- BusinessEventType = CREATE_APPLICATION
- Originator = Temporary_Application.Created_By
- Salesroom = currently logged salesroom
- TimeOfModification = Temporary_Application.Creation_Date
- list of attributes = null
	
- If business event with type=CHOOSE_OFFER doesn't exist and the product is selected, system creates a BusinessEvent according to the rule Create business event with the following parameters:
- Contract = passed Contract
- BusinessEventType = CHOOSE_OFFER
- Originator = currently logged user
- Salesroom = currently logged salesroom
- TimeOfModification = current

## 🔗 Connections (1)

- ← Dependency: [[01.080 Fill in application (UseCase 1821367)]]

## 📊 Appears In (2 diagrams)

- Custom: Product business rules
- Use Case: Fill in application
