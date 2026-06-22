---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10452 (CLM-3304) [HomeX] Change Communication Management REST service to follow current behavior on BSL"
domain: "Requirements Model"
element_id: 1558093
diagrams: 4
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 Communication file content validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10452 (CLM-3304) [HomeX] Change Communication Management REST service to follow current behavior on BSL

## 📝 Notes

Validation of Communication Event (communicationEventType)
The validation is applied for each communication event (i.e. event record in the file)

	
- Check if given CUID of the client exists in database
	
- Check if given communicationChannelCode exists in the system (Communication Channel.Code enumeration)
	
- For each communication record in the event, the Validation of Communication Record is performed (see next paragraph)


Validation of Communication Record (communicationRecordType)

	
- {ADD CLM-3304}For IN/ID {/ADD}check if given communicationResultTypeCode {DEL CLM-3304}(if has been passed){DEL} exists in the system (Communication Result Type.Code  enumeration)
	
- Check if given communicationTypeCode exists in the system (Communication Type.Code enumeration)
	
- Check if given communicationSubtypeCode exists in the system (Communication Subtype.Code enumeration)
	
- Check if given communicationSubtypeSpecificationCode (if has been passed) exists in the system (Communication Subtype Specification.Code enumeration)
	
- Check if given communicationSubtypeSubspecificationCode (if has been passed) exists in the system (Communication Subtype Subspecification.Code enumeration)
	
- {ADD CLM-3304}For IN/ID {/ADD}check if given communicationStatusCode exists in the system (Communication Status.Code enumeration)
	
- If communicationResultTypeCode is passed, check whether given combination of communicationChannelCode, communicationResultTypeCode, communicationSubtypeCode and communicationStatusCode {ADD CLM-3304}(if has been passed){/ADD} exists in the system (Communication Result Definition.Code enumeration).
	
- If communicationSubtypeSpecificationCode is passed, check whether given combination of communicationSubtypeCode and communicationSubtypeSpecificationCode exists in the system (Communication Definition.Code enumeration)
	
- If communicationSubtypeSubspecificationCode is passed, check whether given combination of communicationSubtypeCode, communicationSubtypeSpecificationCode and communicationSubtypeSubspecificationCode exists in the system (Communication Definition.Code enumeration)
	
- Check if given combination of communicationChannelCode, communicationTypeCode and communicationSubtypeCode exists in the system (Communication Definition.Code enumeration)
	
- For each communication result part perform Validation of Communication Result Part (see next paragraph)
	
- If communication record in imported data contains address perform Validation of Address (see next paragraph)
	
- Check if exists contract for given Contract Code
	
- Check if the contract belongs to the client of given CUID


Validation of Communication Result Part

	
- Check if given communicationResultTypePartCode {ADD CLM-3304}(if has been passed){/ADD} exists in the system (Communication Result Type Part.Code enumeration)
	
- Check if DataType of the communication result part match Logical Data Type.Code of the system
	
- Check if value contains a value allowed defined Logical Data Type


Validation of Address
The validation continues with Communication file address validation rule

Evaluation of the Validation steps
If any error occurred in the processing of the validations, the system stops further execution of the batch job and an error message is returned to the calling use case.

## 🔗 Connections (3)

- ← Aggregation: [[Communication file address validation]]
- ← Dependency: [[{MOD}07.060 Process communication list file]]
- ← Dependency: [[{MOD}07.065 Create communication on external request]]

## 📊 Appears In (4 diagrams)

- Custom: CBL-10452 (CLM-3304) [HomeX] Change Communication Management REST service to follow current behavior on BSL
- Custom: Validations
- Use Case: Create communication on external request
- Use Case: Import list of communication
