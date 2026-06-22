---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/Use Case"
domain: "Analysis Model"
element_id: 1442204
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Input values validation for communications

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/Use Case

## 📝 Notes

Validation of Communication Event (CommunicationEvent)
These validations is applied for each communication event:

	
- Check if given CUID of the client exists in database (if not message CLIENT_NOT_FOUND is displayed)
	
- Check if given user (Created by) exists in database(if not message USER_NOT_FOUND is displayed)
	
- Check if given Channel exists in the system (Communication Channel.Code enumeration) (if not message MSG_ENUM_ERROR_WITH_PARAMS is displayed)
	
- For each communication record in the event, the Validation of Communication Record is performed (see next paragraph)


Validation of Communication Record (CommunicationRecord)

	
- Check if given Type exists in the system (Communication Type (Area).Code enumeration) (if not, message MSG_ENUM_ERROR_WITH_PARAMS is displayed)
	
- Check if given Subtype exists in the system (Communication Subtype (Topic).Code enumeration) (if not message MSG_ENUM_ERROR_WITH_PARAMS is displayed)
	
- Check if exists contract for given Contract Code  (if not, message CONTRACT_NOT_FOUND is displayed)
	
- Check if given Status exists in the system (Communication Status.Code enumeration) (if not, message MSG_ENUM_ERROR_WITH_PARAMS is displayed)
	
- Check if given ResultType exists in the system (Communication Result Type.Code enumeration) (if not, message MSG_ENUM_ERROR_WITH_PARAMS is displayed)
	
- For each communication result part perform Validation of Communication Result Part (see next paragraph)
	
- Check if the contract belongs to the client of given CUID  (if not, message CONTRACT_DOES_NOT_BELONG_TO_CLIENT is displayed)


Validation of Communication Result Part (ResultPart)

	
- Check if given ResultPartType exists in the system (Communication Result Type Part.Code enumeration) (if not, message MSG_ENUM_ERROR_WITH_PARAMS is displayed)
	
- Check if DataType of the communication result part match Logical Data Type.Code of the system  (if not, message UNKNOWN_DATA_TYPE is displayed)
	
- Check if value contains a value allowed defined Logical Data Type  (if not, message DATA_TYPE_ERROR is displayed)

## 🔗 Connections (1)

- ← Dependency: [[07.041 Create communication record (UseCase 1879984)]]

## 📊 Appears In (1 diagrams)

- Use Case: Communication records
