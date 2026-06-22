---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Use Case Model"
domain: "Analysis Model"
element_id: 1878547
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Payment Order identifier definition - VN

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Use Case Model

## 📝 Notes

VN outgoing payment order ID is defined as:

BPYYMMDDNNNNN - where:
BP - characters (constant) 
YY - last two numbers of year (filled by zero from the left for years from 1 to 9)
MM - number of month (filled by zero from the left for months from 1 to 9)
DD - number of day (filled by zero from the left for days from 1 to 9)
NNNNN - sequence of the numbers from 1 incremented by 1 (filled by zeros from the left to maximal length of 5 digits). After reaching number of 99999, the sequence starts from 00001 again and it means, payment order ID is unique in the system.

Examples:
First exported file on 24.7.2013 will contain following Payment Order IDs:

	
- BP13072400001
	
- BP13072400002

Second exported file on 24.7.2013:

	
- BP13072400003
	
- BP13072400004

This ID will be restarted when the sequence reaches of number 999999 (e.g. on 25.7.2013):

	
- BP13072599999
	
- BP13072500001
	
- BP13072500002

## 🔗 Connections (1)

- → Generalization: [[Payment Order identifier definition - general]]

## 📊 Appears In (1 diagrams)

- Use Case: Process outgoing payments
