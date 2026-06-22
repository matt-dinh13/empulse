---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Use Case Model"
domain: "Analysis Model"
element_id: 1878535
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Outgoing Payment File name definition - VN

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Use Case Model

## 📝 Notes

VN outgoing payment file name is defined as:
BYYMMDDNN.xml – where:

	
- B – character (constant) 
	
- YY – last two numbers of year (filled by zero from the left for years from 1 to 9)
	
- MM – number of month (filled by zero from the left for months from 1 to 9)
	
- DD – number of day (filled by zero from the left for days from 1 to 9)
	
- NN – sequence of the numbers from 1 incremented by 1 in one day (filled by zeros from the left to maximal length of 2 digits). This sequence is restarted to back from 1 at every next day.


Examples

	
- B09072401.xml
	
- B09072402.xml

## 🔗 Connections (1)

- → Generalization: [[Outgoing Payment File name definition - general]]

## 📊 Appears In (1 diagrams)

- Use Case: Process outgoing payments
