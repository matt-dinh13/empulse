---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Automatic Import response"
domain: "Analysis Model"
element_id: 543345
diagrams: 2
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 IncomingPaymentsResult

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Automatic Import response

## 📝 Notes

Result of import of incoming payments from a file.

This result is sent in the form of message to user who imported a file with incoming payments. Example:

"Incoming payment file import
File: IncomingPayments_ABCDEFGH_2011-06-22_1.xml
Imported: 21.11.2011
Import status: successful
Import results
	Count of imported payments: 	204
	Sum of imported payment amounts:	302.123,- INR

## 🔗 Connections (1)

- ← Dependency «use»: [[ResultAutomaticImportIncomingPaymentsWS]]

## 📊 Appears In (2 diagrams)

- Logical: Automatic Import response
- Logical: IncomingPaymentsResult

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| File name | Text |  |
| Import status | Text |  |
| Imported | Date |  |
| Message | Text |  |
