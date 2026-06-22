---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/COMMON for DDM/Business Rules"
domain: "Analysis Model"
element_id: 1817917
diagrams: 1
connections: 0
tags:
  - requirement
  - analysis-model
---

# 📋 Generate message content from message pattern

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/COMMON for DDM/Business Rules

## 📝 Notes

This element describes the algorithm of generating the message content from predefined message pattern (content placeholders in such message pattern are dynamically substituted with particular content values).

Input:

	
- MessagePatternCode - code of the message pattern
	
- MessageContentAttribute [0..*] - array of message content attributes to be filled into the message pattern (in key-value structure)


Output:

	
- GenerationResult - result of message content generation (success / failure)
	
- MessageContent - generated message content


Steps:

	
- System creates a request for message content generation by calling the GenerateRequest (method of PatternWS) with following input parameters:
- code = PatternCode from the input
- contentAttributes = ContentAttributes from the input (one record for each key-value pair)
If calling the service fails due to any reason or a Fault response is returned, system returns failure as a GenerationResult and algorithm ends.
	
- System takes the received GenerateResponse.content from the response and returns it as a MessageContent along with success as a GenerationResult. Algorithm ends.

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
