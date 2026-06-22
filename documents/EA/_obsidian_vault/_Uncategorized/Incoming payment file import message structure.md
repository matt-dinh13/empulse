---
type: Requirement
stereotype: "BusinessRule"
package: ""
domain: "_Uncategorized"
element_id: 1673438
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 Incoming payment file import message structure

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: N/A

## 📝 Notes

Result of import of incoming payments from a file.

This result is sent in the form of message to user who imported a file with incoming payments. Example:

"Incoming payment file import
File: IncomingPayments_ABCDEFGH_2011-06-22_1.xml
Imported: 21.11.2011
Import status: successful
Import results
	Count of imported payments: 	204
	Sum of imported payment amounts:	302.123,- INR"
