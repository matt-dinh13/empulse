---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1903 (CBL-4667) IN JL - Generate IS on basis of JL account opening"
domain: "Requirements Model"
element_id: 1366492
diagrams: 1
connections: 7
tags:
  - requirement
  - requirements-model
---

# 📋 Generate IS on basis of JL account opening

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1903 (CBL-4667) IN JL - Generate IS on basis of JL account opening

## 📝 Notes

HCIN will send information about JL account opening for a particular contract to a new BSL queue (JMS). On basis of receiving of a JMS, if global parameter installmentScheduleGenerationTrigger is set to ON_DISBURSEMENT, we will:

	
- trigger installment schedule generation using UC 01.191 and we will pass the first installment due date from the JMS to the UC
	
- create a new business event IS_GENERATED with a new business event parameter IS_GENERATION_REASON = 'Money disbursement requested'.


Add new Business Event Type:

	
- Visibility = true
	
- Code = 'IS_GENERATED'
	
- Name = 'Generate installment schedule'


Add new Business Event Attribute Type:

	
- Code = 'IS_GENERATION_REASON'
	
- DataType = String
	
- Enumeration = null
	
- Name = 'Regeneration reason'

## 🔗 Connections (1)

- → Generalization: [[PAYM-1903 (CBL-4667) IN JL - Generate IS on basis of JL account opening (Requirement 1366491)]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1903 (CBL-4667) IN JL - Generate IS on basis of JL account opening
