---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Business events/Messages"
domain: "Analysis Model"
element_id: 1545035
diagrams: 3
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 CardOperationFailedReasonDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Business events/Messages

## 📝 Notes

Attribute for card operation failed reasons (e.g. reason of card cancellation rejection etc.).

LDM destination:
BusinessEventAttribute where BusinessEventAttribute.type is determined according to the CardOperationFailedReasonDto->BusinessEventDto->BusinessEventTypeDto as follows:

	
- CARD_ACTIVATION_FAILED --> BusinessEventAttributeType.CARD_ACTIVATION_FAILED_REASON	
	
- CARD_CANCELLATION_REJECTED --> BusinessEventAttributeType.CARD_CANCELLATION_REJECTED_REASON	
	
- CARD_REPLACEMENT_REJECTED --> BusinessEventAttributeType.CARD_REPLACEMENT_REJECTED_REASON		
	
- CARD_RENEWAL_REJECTED --> BusinessEventAttributeType.CARD_RENEWAL_REJECTED_REASON	
	
- CARD_PIN_GENERATION_FAILED --> BusinessEventAttributeType.CARD_PIN_GENERATION_FAILED_REASON
	
- else	error

## 🔗 Connections (2)

- → Generalization «XSD extension»: [[BusinessEventAttributeDto]]
- → Dependency: [[CardOperationFailedReasonTypeDto]]

## 📊 Appears In (3 diagrams)

- Logical: Business events - Messages
- Logical: Business events - provided interface
- Logical: Business events - Types

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| reason | CardOperationFailedReasonTypeDto |  |
