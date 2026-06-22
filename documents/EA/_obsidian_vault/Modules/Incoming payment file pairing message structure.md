---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Import incoming payments/Use Case Model"
domain: "Modules"
element_id: 1673431
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 Incoming payment file pairing message structure

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Import incoming payments/Use Case Model

## 📝 Notes

Result of pairing of incoming payments from a file.

This result is sent in the form of message to user who imported a file with incoming payments.
Example:

"Incoming payment file processing
File: IncomingPayments_ABCDEFGH_2013-03-22_1.xml
Processed: 21.11.2011
Automatic pairing results
	Count of paired payments: 	204
	Sum of paired payment amounts:	302.123,- INR
					
	Count of unpaired payments:	14
	Sum of unpaired payment amounts: 10.564,- INR"

## 📊 Appears In (1 diagrams)

- Use Case: Import incoming payments
